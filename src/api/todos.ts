import { Todo } from '../types/Todos';
import { client } from '../utils/fetchClient';

export const USER_ID = 1139;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodos = ({ title, userId, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, {
    title,
    userId,
    completed,
  });
};

export const deleteTodos = (id: number) => {
  return client.delete(`/todos/${id}`);
};

export const updateTodos = ({ id, title, userId, completed }: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, {
    id,
    title,
    userId,
    completed,
  });
};

export const renameTodos = ({ id, title, userId, completed }: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, {
    id,
    title,
    userId,
    completed,
  });
};