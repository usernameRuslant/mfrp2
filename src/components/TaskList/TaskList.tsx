import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Task } from '../../types/articles';
import css from './TaskList.module.css';
import { deleteTask } from '../../services/tasks';

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.listItem}>
          <h2>
            {task.title} className={css.title}
          </h2>
          <p>
            {task.description} className={css.description}
          </p>
          <div>
            <span>
              {task.status} className={css.status}
            </span>
            <button
              className={css.button}
              onClick={() => mutation.mutate(task._id)}
            >
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
