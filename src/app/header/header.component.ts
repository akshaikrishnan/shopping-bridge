import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  product: any;
  menu = true;
  cartCount = 0;

  constructor(private common: CommonService) {}
  toggleMenu() {
    this.menu = !this.menu;
  }
  ngOnInit(): void {
    this.common.cartCount.subscribe((data) => {
      this.cartCount = data;
    });
  }
}
