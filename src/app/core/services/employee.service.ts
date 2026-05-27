import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type EmployeeStatus = 'Active' | 'On Leave';

export interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  status: EmployeeStatus;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  manager: string;
  salary: number;
  leaveBalance: number;
  performance: number;
  skills: string[];
  emergencyContact: string;
  avatar: string;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly employeesSubject = new BehaviorSubject<Employee[]>([
    {
      id: 1,
      name: 'John Smith',
      department: 'Engineering',
      position: 'Software Engineer',
      status: 'Active',
      email: 'john.smith@hrms.com',
      phone: '+1 (555) 120-4001',
      location: 'New York, USA',
      joinDate: '2021-03-15',
      manager: 'Michelle Jackson',
      salary: 92000,
      leaveBalance: 14,
      performance: 94,
      skills: ['Angular', 'Node.js', 'System Design'],
      emergencyContact: 'Laura Smith · +1 (555) 221-4400',
      avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=1e88e5&color=fff',
      bio: 'Full-stack engineer focused on building scalable HR self-service features and integrations.'
    },
    {
      id: 2,
      name: 'Jane Doe',
      department: 'HR',
      position: 'HR Manager',
      status: 'Active',
      email: 'jane.doe@hrms.com',
      phone: '+1 (555) 120-4002',
      location: 'Chicago, USA',
      joinDate: '2019-11-20',
      manager: 'Executive Team',
      salary: 88000,
      leaveBalance: 11,
      performance: 97,
      skills: ['People Ops', 'Compliance', 'Coaching'],
      emergencyContact: 'Daniel Doe · +1 (555) 221-4401',
      avatar: 'https://ui-avatars.com/api/?name=Jane+Doe&background=1e88e5&color=fff',
      bio: 'Leads talent, culture, and employee lifecycle initiatives across the organization.'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      department: 'Finance',
      position: 'Financial Analyst',
      status: 'Active',
      email: 'mike.johnson@hrms.com',
      phone: '+1 (555) 120-4003',
      location: 'Dallas, USA',
      joinDate: '2020-07-08',
      manager: 'Robert Taylor',
      salary: 79000,
      leaveBalance: 10,
      performance: 91,
      skills: ['Forecasting', 'Budgeting', 'Excel'],
      emergencyContact: 'Olivia Johnson · +1 (555) 221-4402',
      avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=1e88e5&color=fff',
      bio: 'Owns planning models, variance analysis, and monthly reporting for business leaders.'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      department: 'Marketing',
      position: 'Marketing Lead',
      status: 'Active',
      email: 'sarah.williams@hrms.com',
      phone: '+1 (555) 120-4004',
      location: 'Austin, USA',
      joinDate: '2020-01-14',
      manager: 'Executive Team',
      salary: 84000,
      leaveBalance: 12,
      performance: 95,
      skills: ['Brand Strategy', 'Campaigns', 'Content'],
      emergencyContact: 'Brian Williams · +1 (555) 221-4403',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams&background=1e88e5&color=fff',
      bio: 'Drives brand awareness, internal communications, and talent attraction campaigns.'
    },
    {
      id: 5,
      name: 'David Brown',
      department: 'Operations',
      position: 'Operations Manager',
      status: 'Active',
      email: 'david.brown@hrms.com',
      phone: '+1 (555) 120-4005',
      location: 'Seattle, USA',
      joinDate: '2018-05-02',
      manager: 'Executive Team',
      salary: 96000,
      leaveBalance: 15,
      performance: 93,
      skills: ['Vendor Management', 'Process Improvement', 'Planning'],
      emergencyContact: 'Emma Brown · +1 (555) 221-4404',
      avatar: 'https://ui-avatars.com/api/?name=David+Brown&background=1e88e5&color=fff',
      bio: 'Leads workforce planning, facilities, and cross-functional operational excellence.'
    },
    {
      id: 6,
      name: 'Emily Davis',
      department: 'Engineering',
      position: 'Frontend Developer',
      status: 'Active',
      email: 'emily.davis@hrms.com',
      phone: '+1 (555) 120-4006',
      location: 'Boston, USA',
      joinDate: '2022-02-10',
      manager: 'John Smith',
      salary: 85000,
      leaveBalance: 13,
      performance: 92,
      skills: ['Angular', 'SCSS', 'UX'],
      emergencyContact: 'Ryan Davis · +1 (555) 221-4405',
      avatar: 'https://ui-avatars.com/api/?name=Emily+Davis&background=1e88e5&color=fff',
      bio: 'Builds intuitive interfaces and reusable design-system components for internal tools.'
    },
    {
      id: 7,
      name: 'Chris Wilson',
      department: 'Engineering',
      position: 'Backend Developer',
      status: 'Active',
      email: 'chris.wilson@hrms.com',
      phone: '+1 (555) 120-4007',
      location: 'Denver, USA',
      joinDate: '2021-09-05',
      manager: 'John Smith',
      salary: 89000,
      leaveBalance: 9,
      performance: 90,
      skills: ['Java', 'APIs', 'Cloud'],
      emergencyContact: 'Sophia Wilson · +1 (555) 221-4406',
      avatar: 'https://ui-avatars.com/api/?name=Chris+Wilson&background=1e88e5&color=fff',
      bio: 'Owns core APIs, integrations, and data flows that power attendance and payroll systems.'
    },
    {
      id: 8,
      name: 'Amanda Miller',
      department: 'HR',
      position: 'Recruiter',
      status: 'Active',
      email: 'amanda.miller@hrms.com',
      phone: '+1 (555) 120-4008',
      location: 'San Diego, USA',
      joinDate: '2023-01-17',
      manager: 'Jane Doe',
      salary: 67000,
      leaveBalance: 12,
      performance: 89,
      skills: ['Hiring', 'Sourcing', 'Employer Branding'],
      emergencyContact: 'Henry Miller · +1 (555) 221-4407',
      avatar: 'https://ui-avatars.com/api/?name=Amanda+Miller&background=1e88e5&color=fff',
      bio: 'Manages candidate pipelines, interview coordination, and onboarding for key teams.'
    },
    {
      id: 9,
      name: 'Robert Taylor',
      department: 'Finance',
      position: 'Accountant',
      status: 'Active',
      email: 'robert.taylor@hrms.com',
      phone: '+1 (555) 120-4009',
      location: 'Atlanta, USA',
      joinDate: '2019-04-11',
      manager: 'Executive Team',
      salary: 76000,
      leaveBalance: 8,
      performance: 88,
      skills: ['Accounting', 'Controls', 'Reconciliation'],
      emergencyContact: 'Grace Taylor · +1 (555) 221-4408',
      avatar: 'https://ui-avatars.com/api/?name=Robert+Taylor&background=1e88e5&color=fff',
      bio: 'Maintains payroll accuracy, reporting controls, and month-end close readiness.'
    },
    {
      id: 10,
      name: 'Lisa Anderson',
      department: 'Marketing',
      position: 'Designer',
      status: 'On Leave',
      email: 'lisa.anderson@hrms.com',
      phone: '+1 (555) 120-4010',
      location: 'Portland, USA',
      joinDate: '2022-06-06',
      manager: 'Sarah Williams',
      salary: 72000,
      leaveBalance: 18,
      performance: 87,
      skills: ['Branding', 'Figma', 'Motion'],
      emergencyContact: 'Noah Anderson · +1 (555) 221-4409',
      avatar: 'https://ui-avatars.com/api/?name=Lisa+Anderson&background=1e88e5&color=fff',
      bio: 'Creates compelling visual assets for campaigns, onboarding, and employee engagement.'
    },
    {
      id: 11,
      name: 'Kevin Thomas',
      department: 'Operations',
      position: 'Logistics Coordinator',
      status: 'Active',
      email: 'kevin.thomas@hrms.com',
      phone: '+1 (555) 120-4011',
      location: 'Phoenix, USA',
      joinDate: '2021-12-01',
      manager: 'David Brown',
      salary: 63000,
      leaveBalance: 10,
      performance: 86,
      skills: ['Scheduling', 'Inventory', 'Reporting'],
      emergencyContact: 'Mia Thomas · +1 (555) 221-4410',
      avatar: 'https://ui-avatars.com/api/?name=Kevin+Thomas&background=1e88e5&color=fff',
      bio: 'Coordinates day-to-day logistics, equipment readiness, and office support services.'
    },
    {
      id: 12,
      name: 'Michelle Jackson',
      department: 'Engineering',
      position: 'QA Engineer',
      status: 'Active',
      email: 'michelle.jackson@hrms.com',
      phone: '+1 (555) 120-4012',
      location: 'Miami, USA',
      joinDate: '2020-10-19',
      manager: 'John Smith',
      salary: 81000,
      leaveBalance: 11,
      performance: 93,
      skills: ['Automation', 'Testing', 'Cypress'],
      emergencyContact: 'Lucas Jackson · +1 (555) 221-4411',
      avatar: 'https://ui-avatars.com/api/?name=Michelle+Jackson&background=1e88e5&color=fff',
      bio: 'Ensures release quality through automation, regression coverage, and test analytics.'
    }
  ]);

  readonly employees$ = this.employeesSubject.asObservable();

  getEmployees(): Employee[] {
    return this.employeesSubject.value;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.getEmployees().find((employee) => employee.id === id);
  }
}
