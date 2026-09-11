import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { copy } from '../../../data/content';
import { SitePreferencesService } from '../../../services/site-preferences.service';
import { LucideArrowUpRight, LucideArrowDown, LucideMouse } from '@lucide/angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideArrowUpRight, LucideArrowDown, LucideMouse],
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  copy = copy;
  @Output() requestService = new EventEmitter<void>();

  slides = [
    '/assets/marsa-hero.jpg',
    '/assets/marsa-hospitality.jpg',
    '/assets/marsa-marina.jpg',
    '/assets/marsa-deck.jpg'
  ];
  activeSlideIndex = 0;
  private slideInterval: any;

  constructor(public preferences: SitePreferencesService) {}

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    // Check if running in browser to prevent SSR issues with setInterval
    if (typeof window !== 'undefined') {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 6000);
    }
  }

  stopSlider() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
  }

  setSlide(index: number) {
    this.activeSlideIndex = index;
    this.stopSlider();
    this.startSlider();
  }

  text(value: { en: string; ar: string }): string {
    return this.preferences.text(value);
  }
}
