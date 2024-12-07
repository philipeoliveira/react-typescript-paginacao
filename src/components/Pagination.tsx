import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '../components/Button';

interface PaginationProps {
   page: number;
   totalPages: number;
   goToFirstPage: () => void;
   goToNextPage: () => void;
   goToPreviousPage: () => void;
   goToLastPage: () => void;
}

export function Pagination({ pagination }: { pagination: PaginationProps }) {
   const {
      page,
      totalPages,
      goToFirstPage,
      goToNextPage,
      goToPreviousPage,
      goToLastPage,
   } = pagination;

   return (
      <div className='flex justify-center gap-0.5'>
         <Button onClick={goToFirstPage} isDisabled={page === 1} title='Primeira página'>
            <ChevronsLeft size={18} />
         </Button>
         <Button
            onClick={goToPreviousPage}
            isDisabled={page === 1}
            title='Página anterior'
         >
            <ChevronLeft size={18} />
         </Button>
         <Button
            onClick={goToNextPage}
            isDisabled={page === totalPages}
            title='Próxima página'
         >
            <ChevronRight size={18} />
         </Button>
         <Button
            onClick={goToLastPage}
            isDisabled={page === totalPages}
            title='Última página'
         >
            <ChevronsRight size={18} />
         </Button>
      </div>
   );
}
