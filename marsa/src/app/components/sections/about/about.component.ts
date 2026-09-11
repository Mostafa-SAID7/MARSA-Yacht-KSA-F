import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { copy } from '../../../data/content';
import { SitePreferencesService } from '../../../services/site-preferences.service';
import { LucideAnchor, LucideArrowUpRight } from '@lucide/angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAnchor, LucideArrowUpRight],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  copy = copy;
  @Output() requestService = new EventEmitter<void>();

  constructor(public preferences: SitePreferencesService) {}

  text(value: { en: string; ar: string }): string {
    return this.preferences.text(value);
  }
}
