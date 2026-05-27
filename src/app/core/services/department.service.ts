import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Department {
  name: string;
  headcount: number;
  manager: string;
  openPositions: number;
  budget: string;
  utilization: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private readonly departmentsSubject = new BehaviorSubject<Department[]>([
    {
      name: 'Engineering',
      headcount: 5,
      manager: 'John Smith',
      openPositions: 2,
      budget: '$1.4M',
      utilization: 84,
      description: 'Builds and maintains digital employee platforms and integrations.'
    },
    {
      name: 'HR',
      headcount: 2,
      manager: 'Jane Doe',
      openPositions: 1,
      budget: '$420K',
      utilization: 78,
      description: 'Owns talent, employee experience, compliance, and workforce planning.'
    },
    {
      name: 'Finance',
      headcount: 2,
      manager: 'Robert Taylor',
      openPositions: 0,
      budget: '$510K',
      utilization: 73,
      description: 'Supports planning, payroll, controls, and business financial health.'
    },
    {
      name: 'Marketing',
      headcount: 2,
      manager: 'Sarah Williams',
      openPositions: 1,
      budget: '$610K',
      utilization: 81,
      description: 'Shapes brand presence, internal campaigns, and recruitment storytelling.'
    },
    {
      name: 'Operations',
      headcount: 2,
      manager: 'David Brown',
      openPositions: 1,
      budget: '$780K',
      utilization: 76,
      description: 'Keeps facilities, logistics, and internal processes running efficiently.'
    }
  ]);

  readonly departments$ = this.departmentsSubject.asObservable();

  getDepartments(): Department[] {
    return this.departmentsSubject.value;
  }
}
