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
            Build Your Ultimate Team
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Catch 'em all! Combine strategy and skill to build the most powerful team and rise to the top of the league.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
            <Button size="lg">Start Your Journey</Button>
            <Button variant="outline" size="lg">
              Explore Regions
            </Button>
          </div>
        </div>
        <img
          src="/pokeballs-hero.png"
          alt="A collection of colorful Poké Balls ready for a new trainer"
          width={550}
          height={550}
          className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;