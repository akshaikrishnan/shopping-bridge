import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  public cartCount = new BehaviorSubject<number>(0);
  addToCart() {
    this.cartCount.next(this.cartCount.value + 1);
  }
  getProduct() {
    return this.product;
  }

  product = {
    title:
      'Allie Wood Sheesham Wood Premium Quality Sofa Set with Cushions (Special PU Polish) Fabric 3 + 1 + 1 Sofa Set  (White, DIY(Do-It-Yourself))',
    price: 1274,
    description:
      'A fusion of old world charm and contemporary minimalist theme, the Canvas Sofa by an elegant touch to your living room. Made from solid Sheesham wood in a deep walnut finish, each piece is built to last a lifetime Santosha Decor Brings To You Modern And Comfortable Sofa Set For Your Living Room. 5 Seater Sofa Set 3+1+1 Is Made Of Solid wood. It Has An Elegant Design Which Enhances The Interior Decor Of Your Living Room. Designed In Such A Way, The Sofa Is Comfortable To Sit. Buy This Sofa Today!',
    colors: ['bg-amber-900', 'bg-teal-900', 'bg-gray-700', 'bg-gray-500'],
    reviews: 120,
    rating: 3,
    features: [
      'Filling Material: Cotton',
      'Frame Material: Solid Wood',
      'DIY - Basic assembly to be done with simple tools by the customer, comes with instructions.',
    ],
    images: [
      '../../../assets/1.jpg',
      '../../../assets/2.jpg',
      '../../../assets/3.jpg',
    ],
    relatedProducts: [
      {
        title: 'Table With Flowervase',
        price: 500,
        image: 'https://picsum.photos/id/1068/600',
      },
      {
        title: 'Macbook Table',
        price: 130,
        image: 'https://picsum.photos/id/119/600',
      },
      {
        title: 'Clean Table for Laptop',
        price: 220,
        image: 'https://picsum.photos/id/445/600',
      },
      {
        title: 'Dining Table Set',
        price: 500,
        image: 'https://picsum.photos/id/625/600',
      },
    ],
  };
}
