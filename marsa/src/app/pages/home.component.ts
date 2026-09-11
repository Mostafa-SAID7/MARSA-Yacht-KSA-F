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
import { HeroComponent } from '../components/sections/hero/hero.component';
import { IntroComponent } from '../components/sections/intro/intro.component';
import { ServicesComponent } from '../components/sections/services/services.component';
import { ProvisioningComponent } from '../components/sections/provisioning/provisioning.component';
import { ProductsComponent } from '../components/sections/products/products.component';
import { DestinationsComponent } from '../components/sections/destinations/destinations.component';
import { AboutComponent } from '../components/sections/about/about.component';
import { TestimonialsComponent } from '../components/sections/testimonials/testimonials.component';
import { CtaComponent } from '../components/sections/cta/cta.component';
import {
  LucideArrowUpRight,
  LucideSun,
  LucideMoon,
  LucideGlobe,
  LucideMenu,
  LucideX,
  LucideCheck,
  LucideShare2,
  LucideMapPin,
  LucidePhone,
  LucideMail,
  LucideExternalLink,
} from '@lucide/angular';

@Component({
  selector: 'marsa-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HeroComponent,
    IntroComponent,
    ServicesComponent,
    ProvisioningComponent,
    ProductsComponent,
    DestinationsComponent,
    AboutComponent,
    TestimonialsComponent,
    CtaComponent,
    // Lucide icon directives (attribute-selector standalone components)
    LucideArrowUpRight,
    LucideSun,
    LucideMoon,
    LucideGlobe,
    LucideMenu,
    LucideX,
    LucideCheck,
    LucideShare2,
    LucideMapPin,
    LucidePhone,
    LucideMail,
    LucideExternalLink,
  ],
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