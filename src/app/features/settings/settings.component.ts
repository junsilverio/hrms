import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  protected companyName = 'HRMS Incorporated';
  protected supportEmail = 'support@hrms.com';
  protected timezone = 'UTC-05:00 Eastern Time';
  protected allowNotifications = true;
  protected requireMfa = true;
}
