import { useQuery } from '@tanstack/react-query';
import { fetchedTasks } from '../services/tasks';
import TaskList from '../components/TaskList/TaskList';

const Tasks = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => fetchedTasks(),
  });
  console.log(data);

  return (
    <div>
      Tasks
      {isSuccess && data && data?.tasks.length > 0 && (
        <TaskList tasks={data.tasks} />
      )}
    </div>
  );
};

export default Tasks;
