import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import HeroSection from '../components/Hero/HeroSection';
import SubscriptionForm from '../components/Subscription/SubscriptionForm';

/**
 * IndexPage serves as the main landing page for the application.
 * It composes the primary sections of the page including the Header, 
 * a prominent Hero section, a SubscriptionForm for user engagement,
 * and a Footer with copyright information.
 * This component follows a standard vertical layout, ensuring content
 * is displayed clearly and logically.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16">
        {/* pt-16 offsets the content to prevent it from being hidden by the fixed header */}
        <HeroSection />
        <SubscriptionForm />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
