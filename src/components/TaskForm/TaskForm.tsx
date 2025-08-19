import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '../../services/tasks';
import type { FormikValues } from 'formik';

const TaskForm = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const onSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    mutation.mutate(values);
    actions.resetForm();
  };

  return <div>TaskForm</div>;
};

export default TaskForm;
