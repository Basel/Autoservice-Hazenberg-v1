import React from 'react';
import { Phone, MessageSquare, ShieldCheck, MapPin, CheckCircle2, Calendar, Wrench, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top location chip */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Ambacht 8, Grootegast</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Vakkundig Auto-onderhoud &amp; Reparaties in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Grootegast
              </span>
            </h1>

            {/* Description matching exact prompt */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              <strong className="text-white font-semibold">Auto Service Hazenberg</strong> is een betrouwbare autogarage gevestigd aan de Ambacht 8 in Grootegast. Wij zijn gespecialiseerd in vakkundig onderhoud, APK-keuringen en alle autoreparaties voor ieder automerk.
            </p>

            {/* Core Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>RDW Erkend</strong> &amp; officiële APK-keuringen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Onderhoud volgens fabrieksrichtlijnen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparante prijzen, geen verrassingen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Persoonlijk contact met Dirkjan &amp; monteurs</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>Afspraak Inplannen</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href="tel:0655335768"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 text-white font-bold text-sm transition-all shadow-md group"
              >
                <Phone className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>06 - 55 33 57 68</span>
              </a>

              <a
                href="https://wa.me/31655335768?text=Hallo%20Autoservice%20Hazenberg,%20ik%20wil%20graag%20een%20vraag%20stellen%20over%20onderhoud%20aan%20mijn%20auto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md"
                title="Stuur WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Location & Quick Contact reminder */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Adres:</span>
                <span className="text-slate-200 font-medium">Ambacht 8, 9861 AM Grootegast</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">E-mail:</span>
                <a href="mailto:dhazenberg@home.nl" className="text-amber-400 hover:underline">
                  dhazenberg@home.nl
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Facebook Workshop Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/40 via-sky-500/20 to-amber-500/30 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                
                {/* Real Workshop Photo from Facebook Post */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-slate-950">
                  <img
                    src={`${import.meta.env.BASE_URL}facebook_photos/main_photo.jpg`}
                    alt="Monteurs aan het werk bij Autoservice Hazenberg Grootegast met auto op hefbrug"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badge on image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg">
                      <Wrench className="w-3.5 h-3.5 text-amber-400" />
                      <span>Onze Werkplaats</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                      Ambacht 8
                    </span>
                  </div>

                  {/* Bottom overlay card on image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Vakwerk &amp; Passie
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-amber-400 font-semibold">
                        RDW Erkend
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-snug">
                      Moderne hefbruggen, officiële apparatuur en jarenlange ervaring in diagnose en auto-techniek.
                    </p>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Monteurs met oog voor detail</span>
                      <a href="#werkplaats" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
                        Bekijk foto's →
                      </a>
                    </div>
                  </div>

                </div>

                {/* Building preview teaser bar below */}
                <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-700">
                    <img
                      src={`${import.meta.env.BASE_URL}facebook_photos/profile_or_logo.jpg`}
                      alt="Pand Autoservice Hazenberg Ambacht 8 Grootegast"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">Bedrijfspand aan Ambacht 8</p>
                    <p className="text-[11px] text-slate-400 truncate">9861 AM Grootegast • Ruime inrit &amp; parkeren</p>
                  </div>
                  <a
                    href="#contact"
                    className="px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-xs text-amber-400 font-medium shrink-0 border border-slate-700"
                  >
                    Route
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
