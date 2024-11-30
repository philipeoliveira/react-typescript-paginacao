import { useState } from 'react';
import {
   ChevronLeft,
   ChevronRight,
   ChevronsLeft,
   ChevronsRight,
   ExternalLink,
} from 'lucide-react';

import { users } from './data/users';

import { Button } from './components/Button';
import { Table } from './components/table/Table';
import { TableHeader } from './components/table/TableHeader';
import { TableCell } from './components/table/TableCell';
import { TableRow } from './components/table/TableRow';

function App() {
   const [page, setPage] = useState(1);

   const totalPages = Math.ceil(users.length / 10);

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

   return (
      <div className='flex flex-col max-w-6xl mx-auto min-h-screen'>
         <main className='flex-1 p-6'>
            <div className='flex flex-col gap-6'>
               <h1 className='bg-zinc-400 text-zinc-950 text-4xl max-sm:text-3xl font-medium p-2 my-2 text-center rounded-lg'>
                  Paginação com React
               </h1>
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
                     {users.slice((page - 1) * 10, page * 10).map((user) => {
                        return (
                           <TableRow key={user.id}>
                              <TableCell>{user.id}</TableCell>
                              <TableCell>{user.firstName}</TableCell>
                              <TableCell>{user.lastName}</TableCell>
                              <TableCell otherClasses='max-sm:hidden'>
                                 {user.email}
                              </TableCell>
                           </TableRow>
                        );
                     })}
                  </tbody>
                  <tfoot>
                     <tr>
                        <TableCell colSpan={2} otherClasses='text-sm'>
                           10 de {users.length}
                        </TableCell>
                        <TableCell colSpan={2} otherClasses='text-sm text-right'>
                           <div className='flex max-sm:flex-col items-center justify-end gap-4 py-3'>
                              <span>
                                 Página {page} de {totalPages}
                              </span>
                              <div className='flex gap-0.5'>
                                 <Button onClick={goToFirstPage} isDisabled={page === 1}>
                                    <ChevronsLeft size={18} />
                                 </Button>
                                 <Button
                                    onClick={goToPreviousPage}
                                    isDisabled={page === 1}
                                 >
                                    <ChevronLeft size={18} />
                                 </Button>
                                 <Button
                                    onClick={goToNextPage}
                                    isDisabled={page === totalPages}
                                 >
                                    <ChevronRight size={18} />
                                 </Button>
                                 <Button
                                    onClick={goToLastPage}
                                    isDisabled={page === totalPages}
                                 >
                                    <ChevronsRight size={18} />
                                 </Button>
                              </div>
                           </div>
                        </TableCell>
                     </tr>
                  </tfoot>
               </Table>
            </div>
         </main>
         <footer>
            <p className='flex gap-1 justify-center light-text dark:dark-text text-sm p-4 border-t border-zinc-400'>
               Desenvolvido por{' '}
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
                  className='flex gap-1'
               >
                  Philipe Oliveira
                  <ExternalLink strokeWidth={1.5} size={16} />
               </a>
            </p>
         </footer>
      </div>
   );
}

export default App;
