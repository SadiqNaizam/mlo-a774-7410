import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('w-full py-12 md:py-24', className)}>
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#4338ca] to-[#f97316]" />
          <div className="relative z-10 flex h-full flex-col items-start justify-between p-8 md:p-12 lg:p-16">
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="h-6 w-6" />
              <span className="text-lg font-bold">Pulse Robot</span>
            </div>

            <div className="w-full text-center py-16 md:py-24">
              <p className="text-xl md:text-2xl font-light text-slate-200">
                Made By
              </p>
              <h1 className="font-serif text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
                AI <span className="font-light">&</span> Human
              </h1>
            </div>

            <div />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
