import { TeamInterface } from 'interfaces/team';
import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  team_id?: string;
  employee_id?: string;
  created_at?: any;
  updated_at?: any;

  team?: TeamInterface;
  employee?: EmployeeInterface;
  _count?: {};
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  team_id?: string;
  employee_id?: string;
}
