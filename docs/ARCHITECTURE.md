# Architecture Guide

## Overview

MARSA is built using a modular Angular architecture with standalone components, reactive programming with RxJS, and a service-based pattern for state management.

## Core Architecture

### 1. Application Structure

```
src/
├── app/
│   ├── app.component.ts        # Root component
│   ├── app.routes.ts           # Route configuration
│   ├── pages/                  # Page/container components
│   ├── components/             # Reusable UI components
│   ├── services/               # Application services
│   └── data/                   # Data models and constants
```

### 2. Design Patterns

#### Standalone Components
All Angular components are standalone, promoting better tree-shaking and module independence.

```typescript
@Component({
  selector: 'marsa-button',
  standalone: true,
  imports: [CommonModule],
  template: `...`
})
export class ButtonComponent {}
```

#### Services Pattern
Application state and side effects are managed through services with RxJS observables.

```typescript
@Injectable({ providedIn: 'root' })
export class SitePreferencesService {
  private locale$ = new BehaviorSubject<'en' | 'ar'>('en');
  locale = this.locale$.asObservable();
}
```

#### Component Composition
Complex UIs are built by composing smaller, focused components with clear input/output contracts.

### 3. Routing

The application uses Angular Router with lazy loading for optimal performance.

- Main routes defined in `app.routes.ts`
- Feature modules can implement their own route configurations
- Lazy loading applied where appropriate

### 4. Styling

- **Global Styles**: `src/styles.css`
- **Component Styles**: Scoped to component encapsulation
- **Design System**: Tailwind CSS for utility-first styling

## State Management

### Pattern
- Services with BehaviorSubjects for reactive state
- OnPush change detection for performance
- Unsubscription handled automatically through async pipe or takeUntil

### Example
```typescript
export class UserService {
  private users$ = new BehaviorSubject<User[]>([]);
  
  getUsers() {
    return this.users$.asObservable();
  }
  
  addUser(user: User) {
    const current = this.users$.value;
    this.users$.next([...current, user]);
  }
}
```

## Performance Considerations

1. **OnPush Change Detection**: Used to minimize change detection cycles
2. **Lazy Loading**: Routes are lazy-loaded to reduce initial bundle size
3. **Tree Shaking**: Standalone components improve bundle optimization
4. **Unsubscription**: Memory leaks prevented through proper subscription management

## Type Safety

- Strict TypeScript configuration enforced
- No implicit `any` types allowed
- Strong typing across services and components
- Use of discriminated unions for complex types

## Testing Strategy

- Unit tests for services using Jasmine
- Component tests with TestBed
- E2E tests for critical user flows
- Mock services for isolated testing

## Bilingual Support

The application supports both English (LTR) and Arabic (RTL) through:
- `SitePreferencesService` managing locale state
- Responsive text data structures with `{ en: string, ar: string }`
- Dynamic language switching at runtime

---

For more details, see [DEVELOPMENT.md](./DEVELOPMENT.md)
