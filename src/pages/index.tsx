import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import HeroSection from '../components/Hero/HeroSection';
import SubscriptionForm from '../components/Subscription/SubscriptionForm';
import RobotShowcase from '@/components/Showcase/RobotShowcase';

/**
 * IndexPage serves as the main landing page for the Pokémon-themed application.
 * It introduces trainers to their journey, allows them to choose a starter,
 * and subscribe for the latest news on their adventure.
 * This page is composed of a Header, HeroSection, RobotShowcase (re-themed as starters),
 * a SubscriptionForm, and a Footer.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16">
        {/* pt-16 offsets the content to prevent it from being hidden by the fixed header */}
        <HeroSection />
        <RobotShowcase />
        <SubscriptionForm />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;