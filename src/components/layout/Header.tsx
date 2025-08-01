import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 z-10 h-16 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="container flex h-full items-center justify-between">
        <a href="/" className="flex items-center gap-2 mr-4">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-foreground">Pulse Robot</span>
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <Button>Remix</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
