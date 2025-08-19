import axios from 'axios';
import type { NewTask, Task } from '../types/articles';

interface FetchTasksRespons {
  tasks: Task[];
  totalPages: number;
}

const instance = axios.create({
  baseURL: 'https://tasks-back-9h2m.onrender.com',
  headers: { Authorization: `Bearer ${import.meta.env.VITE_TASKS_TOKEN}` },
});

export async function fetchedTasks(): Promise<FetchTasksRespons> {
  const { data } = await instance.get<{ data: FetchTasksRespons }>('/tasks');
  return data.data;
  console.log(data);
}

export async function createTask(newTask: NewTask): Promise<Task> {
  const { data } = await instance.post<{ data: Task }>('/tasks', newTask);
  return data.data;
}

export async function deleteTask(id: string): Promise<Task> {
  const { data } = await instance.delete<{ data: Task }>(`/tasks/${id}`);
  return data.data;
}
