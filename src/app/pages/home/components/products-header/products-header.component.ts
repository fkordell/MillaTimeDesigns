import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIcon
  ],
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12
  constructor() {}

  ngOnInit(): void {
    
  }

  onSortUpdated(newSort: string): void {
    this.sort =  newSort
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count
  }

  onColumnsUpdated(colsNum: number): void  {
    this.columnsCountChange.emit(colsNum);
  }
}
