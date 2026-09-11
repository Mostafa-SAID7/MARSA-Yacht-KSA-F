import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { copy, steps } from '../../../data/content';
import { SitePreferencesService } from '../../../services/site-preferences.service';
import { LucideArrowUpRight } from '@lucide/angular';

@Component({
  selector: 'app-provisioning',
  standalone: true,
  imports: [CommonModule, LucideArrowUpRight],
  templateUrl: './provisioning.component.html',
})
export class ProvisioningComponent {
  copy = copy;
  steps = steps;
  @Output() requestService = new EventEmitter<void>();

  constructor(public preferences: SitePreferencesService) {}

  text(value: { en: string; ar: string }): string {
    return this.preferences.text(value);
  }
}
