import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { AshLogo } from './AshLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="over-ons" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage & Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden bg-slate-950 border border-slate-700 shadow-2xl">
                <img
                  src="/facebook_photos/main_photo.jpg"
                  alt="Werkplaats monteurs Autoservice Hazenberg Grootegast"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>Ambacht 8, Grootegast</span>
                  </div>
                  <span className="font-mono text-amber-400 font-bold">KVK: 01126376</span>
                </div>
              </div>

              {/* Floating Building Inset */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-52 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-slate-900">
                <img
                  src="/facebook_photos/profile_or_logo.jpg"
                  alt="Pand Autoservice Hazenberg Grootegast"
                  className="w-full h-28 object-cover"
                />
                <div className="p-2 bg-slate-950 text-center">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                    Ons Pand aan Ambacht 8
                  </span>
                </div>
              </div>
            </div>

            {/* Recognition pills */}
            <div className="pt-6 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">RDW Erkend</span>
                  <span className="text-[10px] text-slate-400">Officiële bevoegdheid</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Erkend Leerbedrijf</span>
                  <span className="text-[10px] text-slate-400">Opleiden van vaktalent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Over Onze Autogarage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Betrouwbare Service &amp; Echte Autoliefde in het Westerkwartier
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="p-4 rounded-xl bg-slate-950 border-l-4 border-amber-500 text-white font-medium italic">
                “Auto Service Hazenberg is een auto garage gevestigd in Grootegast. Dit bedrijf is gespecialiseerd in het onderhoud en reparaties van auto's.”
              </p>

              <p>
                Gevestigd aan de <strong>Ambacht 8 in Grootegast</strong>, biedt Autoservice Hazenberg al jarenlang een vertrouwd adres voor autobezitters uit Grootegast, Doezum, Lutjegast, Sebaldeburen en de omliggende regio. Onder leiding van <strong>Dirkjan Hazenberg</strong> combineren we ouderwetse service en eerlijk advies met moderne techniek en apparatuur.
              </p>

              <p>
                Of het nu gaat om een jaarlijkse <strong>APK-keuring</strong>, het wisselen van uw banden, een hardnekkige motorstoring of een complete remrevisie: bij ons staat de klant centraal. Wij overleggen altijd vooraf over de kosten en vervangen nooit zomaar onderdelen zonder uw toestemming.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Kwaliteit Voorop</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Wij werken uitsluitend met hoogwaardige onderdelen en fabrieksoliën die voldoen aan de strenge merkeisen.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Eerlijke Tarieven</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Geen dure overheadkosten zoals bij grote merkdealers, maar een scherpe en eerlijke prijs voor puur vakwerk.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Snel &amp; Flexibel</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Pech of een spoedreparatie? Wij doen er alles aan om u zo snel mogelijk weer veilig de weg op te helpen.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Persoonlijk Contact</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  U spreekt direct met de monteur die aan uw auto sleutelt. Heldere uitleg over wat er moet gebeuren.
                </p>
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="tel:0655335768"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Bel Dirkjan: 06 - 55 33 57 68</span>
              </a>

              <a
                href="mailto:dhazenberg@home.nl"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>dhazenberg@home.nl</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
