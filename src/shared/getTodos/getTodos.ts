import { PaginatedResult } from '../../types/paginated';

import { TodoDto } from '../../types/todo';

const BASE_URL = 'http://localhost:3000';

export const getTodosAPI = {
  getTodos: async (
    { page }: { page: number },
    {
      signal,
    }: {
      signal: AbortSignal;
    }
  ): Promise<PaginatedResult<TodoDto> | null> => {
    try {
      const request = await fetch(
        `${BASE_URL}/tasks?_page=${page}&_per_page=4`,
        {
          method: 'GET',
          signal,
        }
      );

      if (!request.ok) {
        throw new Error('Fetching has been failed');
      }

      const data: PaginatedResult<TodoDto> = await request.json();

      return data;
    } catch (error) {
      console.error(
        error instanceof Error
          ? error.message
          : console.error('Request was aborted')
      );
    }
    return null;
  },
};
