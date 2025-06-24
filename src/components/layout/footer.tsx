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
          © {new Date().getFullYear()} Poké-App. Gotta catch 'em all! This template takes inspiration from{' '}
          <a
            href="https://www.pokemon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 transition-colors hover:text-primary"
          >
            The Pokémon Company
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;