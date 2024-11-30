import { ExternalLink } from 'lucide-react';
import { UsersPagination } from './components/UsersPagination';

function App() {
   return (
      <div className='flex flex-col max-w-6xl mx-auto min-h-screen'>
         <main className='flex-1 p-6'>
            <div className='flex flex-col gap-6'>
               <h1 className='bg-zinc-400 text-zinc-950 text-4xl max-sm:text-3xl font-medium p-2 my-2 text-center rounded-lg'>
                  Paginação com React
               </h1>
               <UsersPagination />
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
