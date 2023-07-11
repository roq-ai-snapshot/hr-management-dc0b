import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  working_hours: yup.number().integer(),
  performance_evaluation: yup.number().integer(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
