import { HttpClient } from '@angular/common/http';
import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //Ürün sayısı adeti
  public totalItem: number = 0;

  constructor(private cardService: CardService,
              private http:HttpClient) {}

  ngOnInit(): void {
    //Sepete kaç adet ürün eklendi kısmı
    this.cardService.getProducts().subscribe((data) => {
      this.totalItem = data.length;
    });
  }
}
