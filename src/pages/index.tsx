import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import HeroSection from '../components/hero/herosection';
import SubscriptionForm from '../components/subscription/subscriptionform';
import RobotShowcase from '@/components/showcase/robotshowcase';

/**
 * IndexPage serves as the main landing page for the robot-themed application.
 * It introduces pilots to their journey, allows them to choose a chassis,
 * and subscribe for the latest news on mech combat.
 * This page is composed of a Header, HeroSection, RobotShowcase,
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