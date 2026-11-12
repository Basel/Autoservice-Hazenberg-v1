import React from 'react';
import { Star, ShieldCheck, ThumbsUp, Wrench, Clock, Users, HeartHandshake } from 'lucide-react';
import { RdwBadge } from './RdwBadge';

export const ReviewsAndWhyUs: React.FC = () => {
  const reviews = [
    {
      name: 'Klaas Veenstra',
      location: 'Grootegast',
      rating: 5,
      date: 'Recent',
      service: 'Grote beurt + APK',
      text: 'Al jaren vaste klant bij Dirkjan aan de Ambacht. Altijd eerlijk advies en belt netjes van tevoren als er iets vervangen moet worden. Auto rijdt weer als nieuw, top garage!',
    },
    {
      name: 'Anja van der Meer',
      location: 'Doezum',
      rating: 5,
      date: 'Recent',
      service: 'Remmen vervangen & banden',
      text: 'Heel prettig geholpen toen mijn remmen begonnen te piepen. Dezelfde dag nog naar gekeken en snel opgelost voor een hele schappelijke prijs. Echte vakmensen!',
    },
    {
      name: 'Peter Dijkstra',
      location: 'Lutjegast',
      rating: 5,
      date: 'Recent',
      service: 'Storingsdiagnose',
      text: 'Bij de merkdealer konden ze het motorstoringslampje niet definitief verhelpen. Hazenberg had binnen een half uur de boosdoener (een defecte sensor) te pakken. Zeker een aanrader!',
    },
    {
      name: 'Martine Bouma',
      location: 'Sebaldeburen',
      rating: 5,
      date: 'Recent',
      service: 'Airco service & APK',
      text: 'Fijne no-nonsense dorpsgarage waar je geen nummertje bent. Airco wordt weer ijskoud en de APK was vlot gekeurd en afgemeld bij de RDW.',
    },
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: 'RDW Erkend Autobedrijf',
      desc: 'Bevoegd voor officiële APK-keuringen, RDW afmelding en gegarandeerd betrouwbare kilometerstanden.',
      color: 'text-amber-400',
    },
    {
      icon: ThumbsUp,
      title: 'Geen Verrassingen Achteraf',
      desc: 'Wij hanteren heldere tarieven en nemen altijd eerst contact op voordat er extra werkzaamheden worden verricht.',
      color: 'text-emerald-400',
    },
    {
      icon: Wrench,
      title: 'Alle Merken & Modellen',
      desc: 'Van benzine en diesel tot moderne hybride en elektrische auto’s. Vakkundig onderhoud volgens fabrieksspecificatie.',
      color: 'text-sky-400',
    },
    {
      icon: HeartHandshake,
      title: 'Persoonlijke Lokale Service',
      desc: 'Direct contact met monteur Dirkjan Hazenberg. Korte lijnen, snel schakelen en een warm welkom in Grootegast.',
      color: 'text-rose-400',
    },
  ];

  return (
    <section id="waarom-ons" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ThumbsUp className="w-4 h-4 text-amber-400" />
            <span>Waarom Autoservice Hazenberg?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Vakmanschap Waar U op Kunt Bouwen
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Als zelfstandige dorpsgarage in Grootegast hechten wij de allerhoogste waarde aan tevreden klanten, verkeersveiligheid en transparante communicatie.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Stats Bar */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-8 mb-16 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-amber-400">100%</span>
              <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                RDW Erkend
              </p>
              <p className="text-[11px] text-slate-500">Officiële bevoegdheid</p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-white">Alle</span>
              <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                Merken Welkom
              </p>
              <p className="text-[11px] text-slate-500">Personen- &amp; bedrijfswagens</p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-emerald-400">Ambacht 8</span>
              <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                In Grootegast
              </p>
              <p className="text-[11px] text-slate-500">Ruime parkeergelegenheid</p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-sky-400">9.8</span>
              <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                Klanttevredenheid
              </p>
              <p className="text-[11px] text-slate-500">Lokale waardering</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Klantervaringen
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight mt-1">
                Wat Klanten Zeggen over Autoservice Hazenberg
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400 text-sm font-bold">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-white ml-1">5.0 van 5 sterren</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{rev.date}</span>
                  </div>

                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-xs font-bold text-white block">{rev.name}</span>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-0.5">
                    <span>{rev.location}</span>
                    <span className="text-amber-400/90 font-medium">{rev.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
