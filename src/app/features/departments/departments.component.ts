import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {
  protected readonly departments = this.departmentService.getDepartments();

  constructor(private readonly departmentService: DepartmentService) {}
}
