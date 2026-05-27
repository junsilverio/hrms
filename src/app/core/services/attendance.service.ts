import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AttendanceSummary {
  presentToday: number;
  onLeave: number;
  newHires: number;
  absent: number;
  remote: number;
}

export interface MonthlyAttendancePoint {
  month: string;
  rate: number;
}

export interface AttendanceRecord {
  employeeName: string;
  department: string;
  status: 'Present' | 'Remote' | 'On Leave';
  checkIn: string;
  checkOut: string;
}

export interface LeaveRequest {
  employeeName: string;
  type: string;
  dates: string;
  status: 'Approved' | 'Pending';
}

export interface ActivityItem {
  title: string;
  description: string;
  time: string;
  accent: string;
}

export interface UpcomingEvent {
  title: string;
  date: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private readonly summarySubject = new BehaviorSubject<AttendanceSummary>({
    presentToday: 203,
    onLeave: 12,
    newHires: 8,
    absent: 6,
    remote: 27
  });

  private readonly monthlyAttendanceSubject = new BehaviorSubject<MonthlyAttendancePoint[]>([
    { month: 'Jan', rate: 92 },
    { month: 'Feb', rate: 94 },
    { month: 'Mar', rate: 93 },
    { month: 'Apr', rate: 96 },
    { month: 'May', rate: 95 },
    { month: 'Jun', rate: 97 },
    { month: 'Jul', rate: 96 },
    { month: 'Aug', rate: 98 }
  ]);

  private readonly activitySubject = new BehaviorSubject<ActivityItem[]>([
    {
      title: 'New hire onboarding completed',
      description: 'Amanda Miller finished orientation and system access provisioning.',
      time: '15 mins ago',
      accent: 'var(--color-primary)'
    },
    {
      title: 'Leave request approved',
      description: 'Lisa Anderson approved annual leave for July 22–26.',
      time: '1 hour ago',
      accent: 'var(--color-warning)'
    },
    {
      title: 'Payroll batch locked',
      description: 'Finance finalized the May payroll ledger for 248 employees.',
      time: '3 hours ago',
      accent: 'var(--color-success)'
    },
    {
      title: 'Policy document updated',
      description: 'HR published the revised hybrid work policy for all departments.',
      time: 'Yesterday',
      accent: 'var(--color-danger)'
    }
  ]);

  private readonly eventsSubject = new BehaviorSubject<UpcomingEvent[]>([
    { title: 'Benefits enrollment deadline', date: 'Jun 18 · 11:00 AM', type: 'HR' },
    { title: 'Engineering town hall', date: 'Jun 19 · 02:00 PM', type: 'Department' },
    { title: 'Payroll submission cutoff', date: 'Jun 21 · 05:00 PM', type: 'Payroll' },
    { title: 'Leadership all-hands', date: 'Jun 24 · 10:00 AM', type: 'Company' }
  ]);

  private readonly attendanceRecordsSubject = new BehaviorSubject<AttendanceRecord[]>([
    { employeeName: 'John Smith', department: 'Engineering', status: 'Present', checkIn: '08:52 AM', checkOut: '05:41 PM' },
    { employeeName: 'Jane Doe', department: 'HR', status: 'Present', checkIn: '08:35 AM', checkOut: '05:12 PM' },
    { employeeName: 'Mike Johnson', department: 'Finance', status: 'Remote', checkIn: '08:58 AM', checkOut: '05:20 PM' },
    { employeeName: 'Sarah Williams', department: 'Marketing', status: 'Present', checkIn: '09:05 AM', checkOut: '05:55 PM' },
    { employeeName: 'David Brown', department: 'Operations', status: 'Present', checkIn: '08:40 AM', checkOut: '05:10 PM' },
    { employeeName: 'Lisa Anderson', department: 'Marketing', status: 'On Leave', checkIn: '-', checkOut: '-' }
  ]);

  private readonly leaveRequestsSubject = new BehaviorSubject<LeaveRequest[]>([
    { employeeName: 'Lisa Anderson', type: 'Annual Leave', dates: 'Jul 22 - Jul 26', status: 'Approved' },
    { employeeName: 'Kevin Thomas', type: 'Personal Leave', dates: 'Jun 28', status: 'Pending' },
    { employeeName: 'Emily Davis', type: 'Work From Home', dates: 'Jun 17', status: 'Approved' }
  ]);

  readonly summary$ = this.summarySubject.asObservable();
  readonly monthlyAttendance$ = this.monthlyAttendanceSubject.asObservable();
  readonly recentActivity$ = this.activitySubject.asObservable();
  readonly upcomingEvents$ = this.eventsSubject.asObservable();
  readonly attendanceRecords$ = this.attendanceRecordsSubject.asObservable();
  readonly leaveRequests$ = this.leaveRequestsSubject.asObservable();

  getSummary(): AttendanceSummary {
    return this.summarySubject.value;
  }

  getMonthlyAttendance(): MonthlyAttendancePoint[] {
    return this.monthlyAttendanceSubject.value;
  }

  getRecentActivity(): ActivityItem[] {
    return this.activitySubject.value;
  }

  getUpcomingEvents(): UpcomingEvent[] {
    return this.eventsSubject.value;
  }

  getAttendanceRecords(): AttendanceRecord[] {
    return this.attendanceRecordsSubject.value;
  }

  getLeaveRequests(): LeaveRequest[] {
    return this.leaveRequestsSubject.value;
  }
}
