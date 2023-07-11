import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  working_hours?: number;
  performance_evaluation?: number;
  created_at?: any;
  updated_at?: any;
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    team_member?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
}
