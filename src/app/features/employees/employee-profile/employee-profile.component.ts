import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Employee, EmployeeService } from '../../../core/services/employee.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.scss'
})
export class EmployeeProfileComponent implements OnInit {
  protected employee?: Employee;
  protected activeTab: 'overview' | 'attendance' | 'payroll' | 'documents' = 'overview';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee = this.employeeService.getEmployeeById(id);
  }

  protected selectTab(tab: 'overview' | 'attendance' | 'payroll' | 'documents'): void {
    this.activeTab = tab;
  }
}
