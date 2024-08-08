import {Component, OnInit} from '@angular/core';

import {CategoryService} from './category.service';
import {Category} from './category';

@Component({selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  newCategory: Category = new Category();

  constructor(
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .then(categories => this.categories = categories );
  }

}
