import { Injectable, signal } from '@angular/core';
import { Locale, Theme } from '../data/content';

@Injectable({ providedIn: 'root' })
export class SitePreferencesService {
  readonly locale = signal<Locale>(this.readLocale());
  readonly theme = signal<Theme>(this.readTheme());

  constructor() {
    this.applyPreferences();
  }

  toggleLocale(): void {
    this.locale.update((value) => (value === 'en' ? 'ar' : 'en'));
    localStorage.setItem('marsa-locale', this.locale());
    this.applyPreferences();
  }

  toggleTheme(): void {
    this.theme.update((value) => (value === 'light' ? 'dark' : 'light'));
    localStorage.setItem('marsa-theme', this.theme());
    this.applyPreferences();
  }

  text(value: { en: string; ar: string }): string {
    return value[this.locale()];
  }

  private applyPreferences(): void {
    const locale = this.locale();
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    
    if (this.theme() === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }

  private readLocale(): Locale {
    return localStorage.getItem('marsa-locale') === 'ar' ? 'ar' : 'en';
  }

  private readTheme(): Theme {
    const stored = localStorage.getItem('marsa-theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}