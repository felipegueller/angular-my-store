import { Component, OnInit } from '@angular/core'

import { CartService } from '../cart.service'
import { Product } from '../products'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] | undefined = this.cart.getItems()

  constructor(private cart: CartService) {}

  ngOnInit(): void {}
}
