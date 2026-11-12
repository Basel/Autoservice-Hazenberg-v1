import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Gauge, 
  Cpu, 
  Disc, 
  Wind, 
  BatteryCharging, 
  CircleDot, 
  Check, 
  ChevronRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'keuring' | 'onderhoud' | 'reparatie'>('all');

  const services = [
    {
      id: 'apk',
      title: 'APK Keuring (RDW Erkend)',
      category: 'keuring',
      badge: 'RDW Erkend',
      priceFrom: '€ 45,-',
      priceNote: 'inclusief RDW afmeldkosten & milieumeting',
      icon: ShieldCheck,
      iconColor: 'text-amber-400',
      description: 'Officiële Algemene Periodieke Keuring volgens de strenge RDW-voorschriften. Geschikt voor benzine, diesel, hybride en elektrische personen- en bedrijfswagens.',
      features: [
        'Officiële RDW afmelding & rapport',
        'Viergasmeting / deeltjestest inbegrepen',
        'Controle op verkeersveiligheid en milieu',
        'Kleine gebreken zoals lampjes direct in overleg verholpen',
      ],
      popular: true,
    },
    {
      id: 'grote-beurt',
      title: 'Grote Onderhoudsbeurt',
      category: 'onderhoud',
      badge: 'Fabrieksgarantie behoud',
      priceFrom: 'Op maat',
      priceNote: 'afhankelijk van motortype en fabrieksvoorschrift',
      icon: Wrench,
      iconColor: 'text-sky-400',
      description: 'Grondige inspectie en onderhoudsbeurt volgens de specificaties van uw autofabrikant. Voorkomt dure reparaties en verlengt de levensduur van uw voertuig.',
      features: [
        'Vervangen van motorolie & hoogwaardig oliefilter',
        'Nieuw luchtfilter, interieurfilter & brandstoffilter/bougies',
        'Grondige controle op ruim 60 veiligheidspunten',
        'Demontage en inspectie van remmen en ophanging',
      ],
      popular: true,
    },
    {
      id: 'kleine-beurt',
      title: 'Kleine Onderhoudsbeurt',
      category: 'onderhoud',
      badge: 'Periodiek',
      priceFrom: 'Op maat',
      priceNote: 'inclusief hoogwaardige olie & filter',
      icon: Gauge,
      iconColor: 'text-emerald-400',
      description: 'Essentieel periodiek onderhoud na bijvoorbeeld 15.000 km of 1 jaar. Houdt uw motor soepel en voorkomt slijtage aan draaiende delen.',
      features: [
        'Verse motorolie met exacte viscositeit voor uw motor',
        'Vervanging van het motoroliefilter',
        'Controle van alle vloeistofniveaus en ruitensproeier',
        'Check op bandenspanning, verlichting en accuconditie',
      ],
      popular: false,
    },
    {
      id: 'diagnose',
      title: 'Storingsdiagnose & Uitlezen',
      category: 'reparatie',
      badge: 'High-Tech',
      priceFrom: 'Vanaf € 45,-',
      priceNote: 'inclusief storingsrapport & advies',
      icon: Cpu,
      iconColor: 'text-purple-400',
      description: 'Brandt er een storingslampje (motormanagement, ABS, airbag)? Met onze moderne diagnoseapparatuur sporen we de exacte oorzaak direct op.',
      features: [
        'Uitlezen van alle boordcomputers en sensoren',
        'Wis- en resetfuncties na reparatie',
        'Gericht advies zonder overbodige onderdelen te vervangen',
        'Geschikt voor moderne elektronica en canbus-systemen',
      ],
      popular: false,
    },
    {
      id: 'remmen',
      title: 'Remmen & Wielophanging',
      category: 'reparatie',
      badge: 'Veiligheid',
      priceFrom: 'Op maat',
      priceNote: 'premium kwaliteitsonderdelen',
      icon: Disc,
      iconColor: 'text-rose-400',
      description: 'Uw remmen zijn uw belangrijkste veiligheidssysteem. Wij controleren en vervangen remschijven, remblokken, remklauwen en remvloeistof vakkundig.',
      features: [
        'Controle van remvoeringdikte en schijfslijtage',
        'Remvloeistoftest op kookpunt en vochtgehalte',
        'Inspectie van schokdempers, veren en stuurkogels',
        'Alleen montage van A-merk kwaliteitsonderdelen',
      ],
      popular: false,
    },
    {
      id: 'banden',
      title: 'Banden & Uitlijning',
      category: 'onderhoud',
      badge: 'Grip & Veiligheid',
      priceFrom: 'Scherp tarief',
      priceNote: 'montage, balanceren & ventiel',
      icon: CircleDot,
      iconColor: 'text-cyan-400',
      description: 'Levering, montage en balanceren van alle merken zomer-, winter- en all-season banden. Wij adviseren de juiste band voor uw rijstijl en seizoen.',
      features: [
        'Zomer- en winterbandenwissel',
        'Nauwkeurig dynamisch balanceren tegen trillingen',
        'Bandenreparatie bij spijkers of schroeven',
        'Milieuvriendelijke afvoer van oude banden',
      ],
      popular: false,
    },
    {
      id: 'airco',
      title: 'Airco Service & Reiniging',
      category: 'onderhoud',
      badge: 'Fris & Koel',
      priceFrom: 'Vanaf € 89,-',
      priceNote: 'afvullen koudemiddel & lektest',
      icon: Wind,
      iconColor: 'text-sky-300',
      description: 'Een goed werkende airconditioning voorkomt beslagen ramen in de winter en zorgt voor aangename koelte in de zomer. Voorkom dure aircopompschade.',
      features: [
        'Druktest en vacumeren van het aircosysteem',
        'Afvullen met koudemiddel en speciale compressorolie',
        'Anti-bacteriële geurbehandeling tegen muffe lucht',
        'Vervangen van interieurfilter (pollenfilter)',
      ],
      popular: false,
    },
    {
      id: 'accu-start',
      title: 'Accu & Laadsysteem Check',
      category: 'reparatie',
      badge: 'Startzekerheid',
      priceFrom: 'Gratis accutest',
      priceNote: 'bij aanschaf nieuwe accu',
      icon: BatteryCharging,
      iconColor: 'text-amber-300',
      description: 'Startproblemen? Wij testen uw accu en dynamo met digitale meetapparatuur en monteren direct een krachtige nieuwe kwaliteitsaccu met garantie.',
      features: [
        'Digitale capaciteits- en startstroomtest',
        'Controle van de dynamolaadspanning',
        'Accu’s op voorraad voor traditionele en start-stop auto’s',
        'Garantie op alle gemonteerde accu’s',
      ],
      popular: false,
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="diensten" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Onze Garage Diensten</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Compleet Onderhoud &amp; Reparatie in Grootegast
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Auto Service Hazenberg staat klaar voor elke auto, ongeacht merk of bouwjaar. Van een snelle APK tot een complete revisie: wij werken vakkundig, transparant en met moderne apparatuur.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Alle Diensten ({services.length})
            </button>
            <button
              onClick={() => setActiveTab('keuring')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'keuring'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              APK Keuring (RDW)
            </button>
            <button
              onClick={() => setActiveTab('onderhoud')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'onderhoud'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Onderhoudsbeurten
            </button>
            <button
              onClick={() => setActiveTab('reparatie')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'reparatie'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Reparaties &amp; Diagnose
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl bg-slate-900/90 border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  service.popular
                    ? 'border-amber-500/60 shadow-xl shadow-amber-500/5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950'
                    : 'border-slate-800 hover:border-slate-700 shadow-md'
                }`}
              >
                {/* Popular Ribbon */}
                {service.popular && (
                  <div className="absolute -top-3 right-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                      Veel Gekozen
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner">
                      <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <div className="mt-2 mb-3">
                    <span className="text-xl font-black text-amber-400">
                      {service.priceFrom}
                    </span>
                    <span className="block text-[11px] text-slate-400">
                      {service.priceNote}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-6 text-xs text-slate-300">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 hover:border-amber-500 text-xs font-bold transition-all cursor-pointer group"
                  >
                    <span>Vraag Afspraak Aan</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick Consultation Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Twijfelt u welk onderhoud uw auto nodig heeft?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Bel even met Dirkjan of stuur een bericht. Wij kijken graag met u mee in het onderhoudsboekje.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0655335768"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>06 - 55 33 57 68</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
