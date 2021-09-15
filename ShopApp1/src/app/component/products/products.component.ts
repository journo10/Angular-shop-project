import { AlertifyjsService } from './../../services/alertifyjs.service';
import { Product } from '../../model/product.model';
import { CardService } from './../../services/card.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  //Products
  public productsList: Product[]=[];
  filterText:string='';
  constructor(
    private apiService: ApiService,
    private cardService: CardService,
    private alertifyjsService:AlertifyjsService
  ) {}

  ngOnInit(): void {
    //Products
    this.apiService.getProducts().subscribe((data) => {
      this.productsList = data;

      //Adet ve Toplam kısmı
      this.productsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  //Sepete Ekle
  addToCard(product: any) {
    this.cardService.addToCard(product);
    this.alertifyjsService.success('Ürün sepete eklendi.')
  }
}
