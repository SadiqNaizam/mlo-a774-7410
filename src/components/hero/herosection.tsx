import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('w-full py-12 md:py-24 lg:py-32', className)}>
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Construct Your Ultimate Mech
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Assemble your squad! Combine strategy and engineering to build the most powerful mechs and dominate the arena.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
            <Button size="lg">Begin Assembly</Button>
            <Button variant="outline" size="lg">
              View Blueprints
            </Button>
          </div>
        </div>
        <img
          src="/robots-hero.png"
          alt="A lineup of powerful mechs ready for combat"
          width={550}
          height={550}
          className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;