import data from '../data/users';

import { Table } from './table/Table';
import { TableHeader } from './table/TableHeader';
import { TableCell } from './table/TableCell';
import { TableRow } from './table/TableRow';

import { usePagination } from '../hooks/usePagination';
import { Pagination } from './Pagination';

export function UsersPagination() {
   const {
      page,
      totalPages,
      goToFirstPage,
      goToNextPage,
      goToPreviousPage,
      goToLastPage,
   } = usePagination(data);

   const currentItems = data.slice((page - 1) * 10, page * 10);

   return (
      <>
         <Table>
            <thead>
               <TableRow>
                  <TableHeader>Código</TableHeader>
                  <TableHeader>Nome</TableHeader>
                  <TableHeader>Sobrenome</TableHeader>
                  <TableHeader otherClasses='max-sm:hidden'>E-mail</TableHeader>
               </TableRow>
            </thead>
            <tbody>
               {currentItems.map((item) => {
                  return (
                     <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.firstName}</TableCell>
                        <TableCell>{item.lastName}</TableCell>
                        <TableCell otherClasses='max-sm:hidden'>{item.email}</TableCell>
                     </TableRow>
                  );
               })}
            </tbody>
            <tfoot>
               <tr>
                  <TableCell colSpan={2} otherClasses='text-sm'>
                     {currentItems.length} de {data.length}
                  </TableCell>
                  <TableCell colSpan={2} otherClasses='text-sm text-right'>
                     <div className='flex max-sm:flex-col items-center justify-end gap-4 py-3'>
                        <span>
                           Página {page} de {totalPages}
                        </span>
                     </div>
                  </TableCell>
               </tr>
            </tfoot>
         </Table>
         <Pagination
            pagination={{
               page,
               totalPages,
               goToFirstPage,
               goToNextPage,
               goToPreviousPage,
               goToLastPage,
            }}
         />
      </>
   );
}
