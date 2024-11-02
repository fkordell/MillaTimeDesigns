import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../../models/product.model';


@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule],
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode =  false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {
    
  }
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
