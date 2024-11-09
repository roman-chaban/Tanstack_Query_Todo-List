import type { FC } from 'react';

import { TodoDto } from '../../types/todo';

interface TodoListItemProps {
  todo: TodoDto;
}

import styles from '../../assets/styles/app.module.css';

export const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li className={styles.listItem}>
      <h4 className={styles.listItemTitle}>{todo.text}</h4>
    </li>
  );
};
