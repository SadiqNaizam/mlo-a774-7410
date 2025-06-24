import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type SubscriptionFormValues = z.infer<typeof formSchema>;

interface SubscriptionFormProps {
  className?: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ className }) => {
  const { toast } = useToast();

  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: SubscriptionFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast({
      title: 'Welcome, Pilot!',
      description: "We'll send the latest mech intel your way.",
    });
    form.reset();
  };

  return (
    <section className={cn('w-full py-12 md:py-20', className)}>
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Get the Latest Combat Intel
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Subscribe for news on new schematics, legendary parts, and combat strategies.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8">
            <div className="flex w-full max-w-md mx-auto items-start space-x-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="sr-only">Email address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Email address"
                        {...field} 
                        disabled={form.formState.isSubmitting}
                        className="py-6 text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={form.formState.isSubmitting}
                className="py-6 text-base"
              >
                {form.formState.isSubmitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...</>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SubscriptionForm;