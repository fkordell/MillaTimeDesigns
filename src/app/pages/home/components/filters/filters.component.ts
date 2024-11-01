import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatExpansionModule, MatListModule, CommonModule],
  templateUrl: 'filters.component.html',
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>()
  categories = ['shoes', 'sports']

  constructor() {}

  ngOnInit(): void {

  }

  onShowCategory(category: string): void {
    this.showCategory.next(category);
  }

  



}
