import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'

import { CartService } from '../cart.service'
import { Product } from '../products'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] | undefined = this.cart.getItems()
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(private cart: CartService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit():void {
    this.items = this.cart.clearCart()
    console.warn('Your order has been submitted. ', this.checkoutForm.value)
    this.checkoutForm.reset()
  }
}
