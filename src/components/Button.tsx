import { ReactNode } from 'react';

interface ButtonProps {
   children: ReactNode;
   onClick: () => void;
   title: string;
   isDisabled: boolean;
}

export function Button({ children, onClick, title, isDisabled }: ButtonProps) {
   return (
      <button
         type='button'
         className='bg-zinc-400 border border-zinc-950 text-zinc-950 rounded-lg p-1.5 hover:bg-zinc-300 disabled:bg-zinc-700'
         onClick={onClick}
         disabled={isDisabled}
         title={title}
      >
         {children}
      </button>
   );
}
