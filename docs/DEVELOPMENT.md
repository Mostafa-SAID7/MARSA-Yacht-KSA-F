# Development Guide

## Development Workflow

### 1. Starting Development
```bash
npm run dev
```
The dev server starts in watch mode, automatically recompiling on file changes.

### 2. Creating Components

#### Standalone Component
```typescript
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'marsa-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      background: white;
      border-radius: 8px;
      padding: 16px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {}
```

### 3. Creating Services

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private data$ = new BehaviorSubject<any>(null);
  
  constructor() {
    this.loadData();
  }
  
  getData(): Observable<any> {
    return this.data$.asObservable();
  }
  
  private loadData(): void {
    // Load data logic
  }
}
```

### 4. Using Services in Components

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'marsa-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>{{ (data$ | async)?.name }}</div>
  `
})
export class PageComponent {
  data$ = this.dataService.getData();
  
  constructor(private dataService: DataService) {}
}
```

## Code Style Guidelines

### TypeScript
- Use strict type annotations (no implicit `any`)
- Prefer interfaces for object shapes
- Use constants for magic strings/numbers
- Document complex logic with comments

### Components
- Keep components focused and single-responsibility
- Use OnPush change detection
- Leverage OnDestroy for cleanup
- Use async pipe to avoid manual subscriptions

### Naming Conventions
- **Components**: PascalCase + `Component` suffix (e.g., `UserCardComponent`)
- **Services**: PascalCase + `Service` suffix (e.g., `UserService`)
- **Files**: kebab-case matching the class name (e.g., `user-card.component.ts`)
- **Interfaces**: PascalCase, prefixed with `I` or use `interface` keyword (e.g., `IUser` or `User`)

## File Organization

```
src/
├── app/
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── button.component.ts
│   │   │   └── card.component.ts
│   │   └── layout/           # Layout components
│   │       └── header.component.ts
│   ├── pages/                # Page/feature components
│   │   ├── home.component.ts
│   │   └── about.component.ts
│   ├── services/             # Application services
│   │   ├── user.service.ts
│   │   └── data.service.ts
│   ├── data/                 # Models and constants
│   │   ├── models.ts
│   │   └── constants.ts
│   ├── app.component.ts      # Root component
│   └── app.routes.ts         # Route configuration
└── styles/                   # Global styles
```

## Working with Routes

### Defining Routes
```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
```

### Navigating
```typescript
constructor(private router: Router) {}

navigate() {
  this.router.navigate(['/about']);
}
```

## Styling

### Global Styles
Modify `src/styles.css` for global styles.

### Component Styles
Define styles in the `styles` array:
```typescript
@Component({
  selector: 'marsa-button',
  template: `<button>{{ label }}</button>`,
  styles: [`
    button {
      background: blue;
      color: white;
      padding: 8px 16px;
    }
  `]
})
export class ButtonComponent {}
```

### Tailwind CSS
Use Tailwind classes in templates:
```html
<div class="flex items-center justify-between p-4 bg-gray-100">
  <h1 class="text-2xl font-bold">Title</h1>
</div>
```

## Bilingual Support

### Accessing Locale
```typescript
constructor(private preferences: SitePreferencesService) {}

getText() {
  const locale = this.preferences.text({ 
    en: 'Hello', 
    ar: 'مرحبا' 
  });
  return locale;
}
```

### RTL Support
RTL is automatically handled through CSS. Ensure your styles support both directions:
```css
.card {
  margin-left: 16px;      /* Will flip in RTL */
  padding: 16px;          /* Same in both */
}
```

## Debugging

### Browser DevTools
- Use Angular DevTools browser extension
- Inspect component tree and change detection
- Monitor HTTP requests

### Console Logging
```typescript
console.log('Debug:', data);  // Use sparingly in production code
```

### Type Checking
```bash
npm run typecheck
```

## Common Patterns

### Async Operations
```typescript
export class UserService {
  constructor(private http: HttpClient) {}
  
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`);
  }
}
```

### Error Handling
```typescript
this.userService.getUser(id)
  .pipe(
    catchError(error => {
      console.error('Failed to load user', error);
      return of(null);
    })
  )
  .subscribe(user => {
    this.user = user;
  });
```

### OnDestroy Cleanup
```typescript
export class ComponentWithCleanup implements OnDestroy {
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    this.data$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.data = data);
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

## Commit Messages

Follow conventional commit format:
```
type(scope): subject

body

footer
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(components): add user card component

Implemented new reusable user card component with avatar,
name, and email display.

Closes #123
```

---

For architecture details, see [ARCHITECTURE.md](./ARCHITECTURE.md)
