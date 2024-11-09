import { FC } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../shared/queryClient/queryClient';

import { TodoList } from '../modules/TodoList/TodoList';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
