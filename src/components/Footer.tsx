import React from 'react';
import { AshLogo } from './AshLogo';
import { RdwBadge } from './RdwBadge';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <AshLogo size="md" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Auto Service Hazenberg is een vakkundige autogarage gevestigd aan de Ambacht 8 in Grootegast. Gespecialiseerd in onderhoud, APK-keuringen en reparaties van alle automerken.
            </p>
            <div className="pt-2">
              <RdwBadge variant="pill" />
            </div>
            <p className="text-[11px] text-slate-400">
              Kamer van Koophandel (KvK): <strong className="text-white font-mono">01126376</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Diensten
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#diensten" className="hover:text-amber-400 transition-colors">
                  APK Keuring (RDW)
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-amber-400 transition-colors">
                  Grote Onderhoudsbeurt
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-amber-400 transition-colors">
                  Kleine Onderhoudsbeurt
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-amber-400 transition-colors">
                  Storingsdiagnose
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-amber-400 transition-colors">
                  Banden &amp; Balanceren
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-amber-400 transition-colors">
                  Airco Service
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-amber-400 transition-colors">
                  Remmen &amp; Uitlaat
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Informatie
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#werkplaats" className="hover:text-amber-400 transition-colors">
                  Werkplaats Foto's
                </a>
              </li>
              <li>
                <a href="#over-ons" className="hover:text-amber-400 transition-colors">
                  Over Dirkjan Hazenberg
                </a>
              </li>
              <li>
                <a href="#afspraak" className="hover:text-amber-400 transition-colors text-amber-400">
                  Kenteken Afspraak
                </a>
              </li>
              <li>
                <a href="#waarom-ons" className="hover:text-amber-400 transition-colors">
                  Voordelen &amp; Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Openingstijden &amp; Route
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact &amp; Adres
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Ambacht 8<br />
                  9861 AM Grootegast, Groningen
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="tel:0655335768"
                  className="font-mono font-bold text-white hover:text-amber-400 transition-colors"
                >
                  06 - 55 33 57 68
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:dhazenberg@home.nl"
                  className="text-white hover:text-amber-400 transition-colors break-all"
                >
                  dhazenberg@home.nl
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-slate-300 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Ma - Vr: 08:00 - 17:30<br />
                  Za: 09:00 - 13:00 / op afspraak
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {currentYear} Autoservice Hazenberg (Ambacht 8, Grootegast). Alle rechten voorbehouden.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RDW Erkend Garagebedrijf</span>
            </span>
            <span>•</span>
            <span>KvK 01126376</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
