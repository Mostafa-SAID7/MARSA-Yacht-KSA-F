import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { copy, products } from '../../../data/content';
import { SitePreferencesService } from '../../../services/site-preferences.service';
import { LucideCheck } from '@lucide/angular';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideCheck],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  copy = copy;
  @Output() requestService = new EventEmitter<void>();

  // Form State
  requestName = '';
  requestPhone = '';
  requestYacht = '';
  requestChef = ''; // Chef is an input in the new design, but we can leave it as string

  // Checkboxes for Galley
  cbMeat = false;
  cbFish = false;
  cbDairy = false;
  cbFruit = false;
  cbBread = false;
  cbBeverages = false;
  cbHerbs = false;
  cbBespoke = false;
  cbGeneral = false;

  // Checkboxes for Interior
  cbToiletries = false;
  cbFlowers = false;
  cbJanitorial = false;
  cbCrew = false;

  formSubmitted = false;

  constructor(public preferences: SitePreferencesService) {}

  text(value: { en: string; ar: string }): string {
    return this.preferences.text(value);
  }

  submitForm(event: Event): void {
    event.preventDefault();
    if (this.requestName && this.requestPhone && this.requestYacht) {
      this.formSubmitted = true;
    }
  }
}
