import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AttendanceService } from '../../core/services/attendance.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, StatCardComponent],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent {
  protected readonly summary = this.attendanceService.getSummary();
  protected readonly attendanceRecords = this.attendanceService.getAttendanceRecords();
  protected readonly leaveRequests = this.attendanceService.getLeaveRequests();

  protected readonly statCards = [
    { title: 'Present', value: String(this.summary.presentToday), description: 'Employees checked in today', icon: '🟢', accent: 'var(--color-success)' },
    { title: 'Remote', value: String(this.summary.remote), description: 'Approved WFH employees', icon: '🏠', accent: 'var(--color-primary)' },
    { title: 'Absent', value: String(this.summary.absent), description: 'Unreported attendance gaps', icon: '⚠', accent: 'var(--color-danger)' }
  ];

  constructor(private readonly attendanceService: AttendanceService) {}
}
