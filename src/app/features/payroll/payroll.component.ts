import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { PayrollService } from '../../core/services/payroll.service';

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, PageHeaderComponent, StatCardComponent],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})
export class PayrollComponent {
  protected readonly summary = this.payrollService.getSummary();
  protected readonly records = this.payrollService.getRecords();

  protected readonly statCards = [
    { title: 'Payroll Budget', value: this.summary.totalPayroll, description: 'Current semi-monthly payroll', icon: '💰', accent: 'var(--color-primary)' },
    { title: 'Processed', value: String(this.summary.processedEmployees), description: 'Employees already processed', icon: '🧾', accent: 'var(--color-success)' },
    { title: 'Pending', value: String(this.summary.pendingApprovals), description: `Next payroll date ${this.summary.nextPayrollDate}`, icon: '⌛', accent: 'var(--color-warning)' }
  ];

  constructor(private readonly payrollService: PayrollService) {}
}
