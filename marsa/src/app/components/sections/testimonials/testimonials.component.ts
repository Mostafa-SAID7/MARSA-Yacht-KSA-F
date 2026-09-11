import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { copy } from '../../../data/content';
import { SitePreferencesService } from '../../../services/site-preferences.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  copy = copy;

  constructor(public preferences: SitePreferencesService) {}

  text(value: { en: string; ar: string }): string {
    return this.preferences.text(value);
  }
}
