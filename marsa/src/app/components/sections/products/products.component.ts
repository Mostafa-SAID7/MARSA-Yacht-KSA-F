import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { copy, products } from '../../../data/content';
import { SitePreferencesService } from '../../../services/site-preferences.service';
import { LucidePlus, LucideArrowUpRight } from '@lucide/angular';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, LucidePlus, LucideArrowUpRight],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  copy = copy;
  products = products;
  @Output() requestService = new EventEmitter<void>();

  constructor(public preferences: SitePreferencesService) {}

  text(value: { en: string; ar: string }): string {
    return this.preferences.text(value);
  }
}
