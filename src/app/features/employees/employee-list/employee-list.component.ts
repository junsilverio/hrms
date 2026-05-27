import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Employee, EmployeeService } from '../../../core/services/employee.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PageHeaderComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  protected searchTerm = '';
  protected selectedDepartment = 'All';
  protected selectedStatus = 'All';
  protected readonly employees = this.employeeService.getEmployees();
  protected readonly departments = ['All', ...Array.from(new Set(this.employees.map((employee) => employee.department)))];

  constructor(private readonly employeeService: EmployeeService) {}

  protected get filteredEmployees(): Employee[] {
    return this.employees.filter((employee) => {
      const search = this.searchTerm.toLowerCase().trim();
      const matchesSearch = !search || [employee.name, employee.department, employee.position].some((value) =>
        value.toLowerCase().includes(search)
      );
      const matchesDepartment = this.selectedDepartment === 'All' || employee.department === this.selectedDepartment;
      const matchesStatus = this.selectedStatus === 'All' || employee.status === this.selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }
}
