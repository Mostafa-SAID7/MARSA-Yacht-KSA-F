import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { copy } from '../../../data/content';
import { SitePreferencesService } from '../../../services/site-preferences.service';
import { LucideArrowUpRight } from '@lucide/angular';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideArrowUpRight],
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  copy = copy;

  constructor(public preferences: SitePreferencesService) {}

  text(value: { en: string; ar: string }): string {
    return this.preferences.text(value);
  }
}
