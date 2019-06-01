import { Component, OnInit } from '@angular/core';

import IProduct from "./productInterface";

@Component({
  // selector is only necessary for nesting purposes.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
