import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PayrollSummary {
  totalPayroll: string;
  processedEmployees: number;
  pendingApprovals: number;
  nextPayrollDate: string;
}

export interface PayrollRecord {
  employeeName: string;
  department: string;
  payPeriod: string;
  netPay: number;
  bonus: number;
  status: 'Processed' | 'Pending';
}

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  private readonly summarySubject = new BehaviorSubject<PayrollSummary>({
    totalPayroll: '$684,300',
    processedEmployees: 221,
    pendingApprovals: 7,
    nextPayrollDate: 'Jun 28, 2026'
  });

  private readonly recordsSubject = new BehaviorSubject<PayrollRecord[]>([
    { employeeName: 'John Smith', department: 'Engineering', payPeriod: 'Jun 01 - Jun 15', netPay: 3840, bonus: 450, status: 'Processed' },
    { employeeName: 'Jane Doe', department: 'HR', payPeriod: 'Jun 01 - Jun 15', netPay: 3660, bonus: 320, status: 'Processed' },
    { employeeName: 'Mike Johnson', department: 'Finance', payPeriod: 'Jun 01 - Jun 15', netPay: 3340, bonus: 280, status: 'Processed' },
    { employeeName: 'Sarah Williams', department: 'Marketing', payPeriod: 'Jun 01 - Jun 15', netPay: 3510, bonus: 300, status: 'Processed' },
    { employeeName: 'Kevin Thomas', department: 'Operations', payPeriod: 'Jun 01 - Jun 15', netPay: 2480, bonus: 120, status: 'Pending' }
  ]);

  readonly summary$ = this.summarySubject.asObservable();
  readonly records$ = this.recordsSubject.asObservable();

  getSummary(): PayrollSummary {
    return this.summarySubject.value;
  }

  getRecords(): PayrollRecord[] {
    return this.recordsSubject.value;
  }
}
