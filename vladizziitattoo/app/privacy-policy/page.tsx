import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const PrivacyPolicy: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mt-32")}>
        PrivacyPolicy log
    </div>
  );
};

export default PrivacyPolicy;