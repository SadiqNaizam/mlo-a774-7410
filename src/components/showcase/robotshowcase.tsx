import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface RobotShowcaseProps {
  className?: string;
}

const robots = [
  {
    name: 'Vanguard',
    type: 'Assault Class',
    src: '/vanguard-robot.png',
  },
  {
    name: 'Spectre',
    type: 'Recon Class',
    src: '/spectre-robot.png',
  },
  {
    name: 'Aegis',
    type: 'Tank Class',
    src: '/aegis-robot.png',
  },
];

const RobotShowcase: React.FC<RobotShowcaseProps> = ({ className }) => {
  return (
    <section className={cn('w-full py-12 md:py-24 bg-muted/40', className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Select Your Chassis</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Every great pilot begins with a choice. Select your first chassis and begin your build.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {robots.map((robot) => (
            <Card key={robot.name} className="overflow-hidden text-center">
              <CardContent className="p-0">
                <img
                  src={robot.src}
                  alt={`Image of ${robot.name}`}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-contain bg-white transition-transform duration-300 hover:scale-105"
                />
              </CardContent>
              <CardFooter className="flex-col items-center p-4">
                <p className="text-lg font-bold">{robot.name}</p>
                <p className="text-sm text-muted-foreground">{robot.type}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RobotShowcase;