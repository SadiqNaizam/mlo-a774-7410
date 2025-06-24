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
            Intelligent Automation for the Modern Enterprise
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Pulse Robot combines cutting-edge AI with human oversight to streamline your workflows, boost productivity, and drive innovation.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <img
          src="/robot-hero.png"
          alt="A futuristic robot assistant"
          width={550}
          height={550}
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;