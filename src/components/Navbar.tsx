import React, { useState } from 'react';
import { AshLogo } from './AshLogo';
import { Phone, MessageSquare, Menu, X, Calendar, MapPin, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      {/* Top micro bar for Grootegast info & quick contact */}
      <div className="hidden lg:block bg-slate-900 border-b border-slate-800/80 text-xs text-slate-300 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Ambacht 8, 9861 AM Grootegast</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Ma - Vr: 08:00 - 17:30 | Za: 09:00 - 13:00</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-slate-400">KvK: 01126376</span>
            <a
              href="mailto:dhazenberg@home.nl"
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              dhazenberg@home.nl
            </a>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Werkplaats geopend
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center group py-2 shrink-0">
          <AshLogo size="sm" />
        </a>

        {/* Desktop Nav Items - all guaranteed on one single clean line */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-xs xl:text-sm font-semibold text-slate-300 whitespace-nowrap">
          <a
            href="#diensten"
            className="hover:text-amber-400 transition-colors"
          >
            Diensten
          </a>
          <a
            href="#werkplaats"
            className="hover:text-amber-400 transition-colors"
          >
            Werkplaats
          </a>
          <a
            href="#over-ons"
            className="hover:text-amber-400 transition-colors"
          >
            Over Ons
          </a>
          <a
            href="#afspraak"
            className="hover:text-amber-400 transition-colors text-amber-400 font-bold"
          >
            Afspraak
          </a>
          <a
            href="#waarom-ons"
            className="hover:text-amber-400 transition-colors"
          >
            Voordelen
          </a>
          <a
            href="#contact"
            className="hover:text-amber-400 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          {/* Direct Phone Call Button */}
          <a
            href="tel:0655335768"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-all hover:border-amber-500/50 shadow-sm whitespace-nowrap"
            title="Bel 06 - 55 33 57 68"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-mono text-xs tracking-wide">06 - 55 33 57 68</span>
          </a>

          {/* Book / Request CTA */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Afspraak Maken</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:0655335768"
            className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30"
            aria-label="Direct bellen"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Menu openen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-5 pt-3 pb-6 space-y-4">
          <div className="grid grid-cols-1 gap-2 text-base font-medium text-slate-200">
            <a
              href="#diensten"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400"
            >
              Onze Diensten &amp; Tarieven
            </a>
            <a
              href="#werkplaats"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400 flex items-center justify-between"
            >
              <span>Onze Werkplaats in Grootegast</span>
              <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                Foto's
              </span>
            </a>
            <a
              href="#over-ons"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400"
            >
              Over Autoservice Hazenberg
            </a>
            <a
              href="#afspraak"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 text-amber-400 font-bold"
            >
              Kenteken Afspraak Planner
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400"
            >
              Contact, Openingstijden &amp; Route
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2.5">
            <a
              href="tel:0655335768"
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Bel Direct: 06 - 55 33 57 68</span>
            </a>

            <a
              href="https://wa.me/31655335768?text=Hallo%20Autoservice%20Hazenberg,%20ik%20wil%20graag%20een%20afspraak%20maken%20voor%20mijn%20auto."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Bericht Sturen</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Online Afspraak Aanvragen</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
