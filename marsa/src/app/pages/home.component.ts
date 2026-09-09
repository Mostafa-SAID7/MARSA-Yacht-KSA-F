import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { copy, destinations, products, services, steps } from '../data/content';
import { SitePreferencesService } from '../services/site-preferences.service';

@Component({
  selector: 'marsa-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly copy = copy;
  readonly services = services;
  readonly products = products;
  readonly destinations = destinations;
  readonly steps = steps;
  readonly preferences: SitePreferencesService;
  isMenuOpen = false;
  isRequestOpen = false;
  requestSent = false;
  requestName = '';
  requestEmail = '';
  requestNotes = '';
  private observer?: IntersectionObserver;

  @ViewChild('page') private page?: ElementRef<HTMLElement>;

  constructor(
    preferences: SitePreferencesService,
    private readonly route: ActivatedRoute,
  ) {
    this.preferences = preferences;
  }

  ngAfterViewInit(): void {
    const anchor = this.route.snapshot.data['anchor'] as string | undefined;
    if (anchor) {
      window.setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 150);
    }

    this.observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    this.page?.nativeElement.querySelectorAll('.reveal').forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  text(value: { en: string; ar: string }): string {
    return this.preferences.text(value);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  openRequest(): void {
    this.isRequestOpen = true;
    this.requestSent = false;
    this.closeMenu();
  }

  closeRequest(): void {
    this.isRequestOpen = false;
  }

  submitRequest(): void {
    this.requestSent = true;
  }

  navLink(path: string): string {
    return path;
  }
}