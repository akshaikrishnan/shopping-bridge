import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  article = false;
  imageUrl: any;
  buttonText = 'Add to Bag';
  starRating: any;
  constructor(private common: CommonService) {}
  imageSelect(url: any) {
    this.imageUrl = url;
  }
  addToCart() {
    this.buttonText = 'Item Added';
    this.common.addToCart();
  }
  ngOnInit(): void {
    this.product = this.common.getProduct();
    this.imageUrl = this.product.images[0];
    this.starRating = new Array(5);
  }
}
