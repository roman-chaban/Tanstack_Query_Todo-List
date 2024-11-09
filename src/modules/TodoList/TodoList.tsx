import { useState, type FC } from 'react';

import { useQuery } from '@tanstack/react-query';

import { TodoListItem } from '../TodoListItem/TodoListItem';

import { getTodosAPI } from '../../shared/getTodos/getTodos';

import { TodoDto } from '../../types/todo';

import { Page } from '../../types/paginated';

import styles from '../../assets/styles/app.module.css';

export const TodoList: FC = () => {
  const [page, setPage] = useState<Page>(1);
  const {
    data: todos,
    error,
    isPending,
  } = useQuery({
    queryKey: ['todos', { page }],
    queryFn: (meta) => getTodosAPI.getTodos({ page }, meta),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) console.warn(error.message);

  return (
    <div>
      <h1>Todo List</h1>
      <ul className={styles.taskList}>
        {todos?.data.map((todo: TodoDto) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <div className={styles.paginationButtons}>
        <button onClick={() => setPage((prevPge) => Math.max(prevPge - 1, 1))}>
          Prev
        </button>
        <button
          onClick={() =>
            setPage((prevPage) => Math.min(prevPage + 1, todos!.pages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
