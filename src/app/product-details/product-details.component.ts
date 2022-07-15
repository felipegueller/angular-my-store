import { Component, OnInit, Input } from '@angular/core'

import { Product } from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor () {}

  ngOnInit(): void {}
}