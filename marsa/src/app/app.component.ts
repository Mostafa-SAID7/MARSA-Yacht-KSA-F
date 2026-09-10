import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'marsa-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
  styleUrls: ['../styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
