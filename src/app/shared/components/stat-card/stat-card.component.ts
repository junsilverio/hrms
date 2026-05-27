import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss'
})
export class StatCardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) value = '';
  @Input() description = '';
  @Input() icon = '◫';
  @Input() accent = 'var(--color-primary)';
}
