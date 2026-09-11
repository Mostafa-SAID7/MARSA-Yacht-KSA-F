import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { copy } from '../../../data/content';
import { SitePreferencesService } from '../../../services/site-preferences.service';
import {
  LucideArrowUpRight,
  LucideSun,
  LucideMoon,
  LucideGlobe,
  LucideMenu,
  LucideX,
} from '@lucide/angular';

@Component({
  selector: 'marsa-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LucideArrowUpRight,
    LucideSun,
    LucideMoon,
    LucideGlobe,
    LucideMenu,
    LucideX,
  ],
  templateUrl: './header.html',
})
export class Header {
  readonly copy = copy;
  readonly preferences: SitePreferencesService;
  isMenuOpen = false;

  @Output() requestService = new EventEmitter<void>();
  @Output() menuToggled = new EventEmitter<boolean>();

  constructor(preferences: SitePreferencesService) {
    this.preferences = preferences;
  }

  text(value: { en: string; ar: string }): string {
    return this.preferences.text(value);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggled.emit(this.isMenuOpen);
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.menuToggled.emit(this.isMenuOpen);
  }

  openRequest(): void {
    this.requestService.emit();
    this.closeMenu();
  }
}
