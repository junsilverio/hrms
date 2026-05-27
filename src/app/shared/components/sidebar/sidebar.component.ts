import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input({ required: true }) collapsed = false;

  protected readonly navItems: NavItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: '◫' },
    { label: 'Employees', route: '/employees', icon: '👥' },
    { label: 'Attendance', route: '/attendance', icon: '🕒' },
    { label: 'Payroll', route: '/payroll', icon: '💳' },
    { label: 'Departments', route: '/departments', icon: '🏢' },
    { label: 'Settings', route: '/settings', icon: '⚙' }
  ];
}
