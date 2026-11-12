/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhotoShowcase } from './components/PhotoShowcase';
import { Services } from './components/Services';
import { KentekenCalculator } from './components/KentekenCalculator';
import { AboutSection } from './components/AboutSection';
import { ReviewsAndWhyUs } from './components/ReviewsAndWhyUs';
import { FaqSection } from './components/FaqSection';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    const el = document.getElementById('afspraak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    const el = document.getElementById('afspraak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 pb-16 md:pb-0">
      <div id="top" />

      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section with Facebook workshop photo & direct actions */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Real Workshop Photos & Logo Replicating Showcase */}
        <PhotoShowcase />

        {/* All Services (APK, Onderhoud, Reparatie, Diagnose, etc.) */}
        <Services onSelectService={handleSelectService} />

        {/* Dutch License Plate (Kenteken) Calculator & Appointment Planner */}
        <KentekenCalculator initialService={selectedServiceForBooking} />

        {/* About Dirkjan Hazenberg & History in Grootegast */}
        <AboutSection />

        {/* Reviews, Ratings & 4 Core Pillars */}
        <ReviewsAndWhyUs />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact, Openingstijden & Interactive Map of Ambacht 8 */}
        <ContactAndLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar */}
      <MobileQuickBar onOpenBooking={handleOpenBooking} />
    </div>
  );
}
