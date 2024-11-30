import { useState } from 'react';

interface DataItem<T> {
   [key: string]: T;
}

export function usePagination<T, U extends DataItem<T>>(data: U[]) {
   const [page, setPage] = useState(1);

   const totalPages = Math.ceil(data.length / 10);

   function goToFirstPage() {
      setPage(1);
   }

   function goToNextPage() {
      setPage(page + 1);
   }

   function goToPreviousPage() {
      setPage(page - 1);
   }

   function goToLastPage() {
      setPage(totalPages);
   }

   return {
      page,
      totalPages,
      goToFirstPage,
      goToNextPage,
      goToPreviousPage,
      goToLastPage,
   };
}
