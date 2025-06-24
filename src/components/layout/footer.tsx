import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('w-full border-t bg-background', className)}>
      <div className="container mx-auto py-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mech-Bay. Build them all! This template takes inspiration from classic mecha designs.
        </p>
      </div>
    </footer>
  );
};

export default Footer;