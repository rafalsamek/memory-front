import {Component, inject, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ApiService} from "../../api.service";
import {Category} from "../../models";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink, NgIcon, NgForOf, NgIf, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  ngOnInit(): void {
    this.fetchCategories();
  }
  private readonly apiService = inject(ApiService);
  categoriesList: Category[] = [];
  showNewCategory = false;
  newCategory = '';

  addCategory() {
    // this.categories.push(this.newCategory);
    this.newCategory = '';
    this.showNewCategory = false;
  }

  removeCategory(i: number) {
    this.categoriesList.splice(i, 1);
  }

  fetchCategories() {
    this.apiService.getCategories().subscribe(
      categories => this.categoriesList = categories
    )
  }
}
