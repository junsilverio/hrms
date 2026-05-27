import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartOptions, registerables } from 'chart.js';
import { AttendanceService } from '../../core/services/attendance.service';
import { DepartmentService } from '../../core/services/department.service';
import { EmployeeService } from '../../core/services/employee.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, StatCardComponent, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  protected readonly summary = this.attendanceService.getSummary();
  protected readonly departmentBreakdown = this.departmentService.getDepartments();
  protected readonly recentActivity = this.attendanceService.getRecentActivity();
  protected readonly upcomingEvents = this.attendanceService.getUpcomingEvents();

  protected readonly statCards = [
    { title: 'Total Employees', value: '248', description: `${this.employeeService.getEmployees().length} mock profiles available`, icon: '👥', accent: 'var(--color-primary)' },
    { title: 'Present Today', value: String(this.summary.presentToday), description: '82% attendance completion by 10 AM', icon: '✅', accent: 'var(--color-success)' },
    { title: 'On Leave', value: String(this.summary.onLeave), description: '3 pending approvals awaiting review', icon: '🌴', accent: 'var(--color-warning)' },
    { title: 'New Hires', value: String(this.summary.newHires), description: '4 onboarding sessions this week', icon: '✨', accent: 'var(--color-danger)' }
  ];

  protected readonly headcountChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.departmentBreakdown.map((department) => department.name),
    datasets: [
      {
        label: 'Employees',
        data: this.departmentBreakdown.map((department) => department.headcount),
        backgroundColor: ['#1e88e5', '#42a5f5', '#64b5f6', '#90caf9', '#bbdefb'],
        borderRadius: 10,
        maxBarThickness: 36
      }
    ]
  };

  protected readonly headcountChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0 },
        grid: { color: 'rgba(148, 163, 184, 0.18)' }
      },
      x: {
        grid: { display: false }
      }
    }
  };

  protected readonly monthlyAttendanceChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.attendanceService.getMonthlyAttendance().map((item) => item.month),
    datasets: [
      {
        label: 'Attendance Rate',
        data: this.attendanceService.getMonthlyAttendance().map((item) => item.rate),
        fill: true,
        tension: 0.35,
        borderColor: '#1e88e5',
        backgroundColor: 'rgba(30, 136, 229, 0.12)',
        pointBackgroundColor: '#1e88e5',
        pointBorderColor: '#ffffff',
        pointHoverRadius: 6
      }
    ]
  };

  protected readonly monthlyAttendanceChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        suggestedMin: 88,
        suggestedMax: 100,
        grid: { color: 'rgba(148, 163, 184, 0.18)' }
      },
      x: {
        grid: { display: false }
      }
    }
  };

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly attendanceService: AttendanceService,
    private readonly departmentService: DepartmentService
  ) {}
}
