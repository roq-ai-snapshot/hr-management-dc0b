import * as yup from 'yup';

export const teamValidationSchema = yup.object().shape({
  team_lead_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
