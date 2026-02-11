import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mt-32 text-white text-2xl outline-1 h-[2200px] w-full")}>
        main
    </div>
  );
};

export default Main;