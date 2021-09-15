import { AlertifyjsService } from './../../services/alertifyjs.service';
import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //products
  public products: any = [];
  //toplam fiyat
  public grandTotal!: number;
  constructor(private cardService: CardService,
              private AlertifyjsService:AlertifyjsService) {}

  ngOnInit(): void {
    this.cardService.getProducts().subscribe((data) => {
      this.products = data;
      //toplam fiyat kısmı
      this.grandTotal = this.cardService.getTotalPrice();
    });
  }

  //Ürün Sil
  removeItem(p:any){
    this.cardService.removeCardItem(p)
    this.AlertifyjsService.error('Ürün silindi.')
  }

  //Tüm Ürünleri Sil
  removeAllCard(){
    this.cardService.removeAllCard();
    this.AlertifyjsService.error('Ürünlerin hepsi silindi.')
  }
}
