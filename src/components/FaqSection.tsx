import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wanneer en hoe vaak moet mijn auto APK gekeurd worden?',
      a: 'Nieuwe benzineauto’s moeten meestal na 4 jaar voor het eerst gekeurd worden, daarna 2 keer om de 2 jaar, en vervolgens jaarlijks. Voor diesels geldt meestal een eerste keuring na 3 jaar en daarna jaarlijks. U kunt uw auto tot 2 maanden vóór de vervaldatum laten keuren met behoud van de oorspronkelijke keuringsdatum. Vul uw kenteken in onze planner in of bel ons gerust!',
    },
    {
      q: 'Blijft mijn fabrieksgarantie behouden als ik mijn auto bij Hazenberg laat onderhouden?',
      a: 'Ja, absoluut! Volgens de Europese wetgeving (de zogeheten Groepsvrijstelling) behoudt u bij elk onafhankelijk autobedrijf uw volledige fabrieksgarantie, mits het onderhoud volgens de officiële fabrieksvoorschriften en met goedgekeurde onderdelen en vloeistoffen wordt uitgevoerd. En dat is exact wat wij doen.',
    },
    {
      q: 'Wat gebeurt er als er tijdens het onderhoud onverwachte gebreken worden ontdekt?',
      a: 'Wij voeren nooit zomaar extra reparaties uit zonder uw uitdrukkelijke toestemming. Zodra we tijdens een inspectie of beurt slijtage of een defect constateren, bellen we u direct op. We leggen de situatie uit, geven een duidelijke prijsopgave en pas na uw akkoord gaan we aan de slag.',
    },
    {
      q: 'Kan ik wachten op mijn APK-keuring of kleine reparatie?',
      a: 'Zeker! Een standaard APK-keuring duurt gemiddeld 30 tot 45 minuten. U kunt bij ons in de ontvangstruimte aan de Ambacht 8 wachten onder het genot van een verse kop koffie. Wilt u de auto liever laten staan en later op de dag ophalen? Dat is uiteraard ook geen enkel probleem.',
    },
    {
      q: 'Waarom is RDW Erkend belangrijk voor mij als autobezitter?',
      a: 'De erkenning van de Rijksdienst voor het Wegverkeer (RDW) garandeert dat Autoservice Hazenberg beschikt over de juiste keuringsapparatuur, gecertificeerde keurmeesters en strenge kwaliteitscontroles. Wij kunnen APK-rapporten direct officieel registreren en afmelden in het centrale RDW-systeem.',
    },
    {
      q: 'Moet ik vooraf een afspraak maken of kan ik direct langskomen?',
      a: 'Voor APK en grote onderhoudswerkzaamheden raden we aan vooraf een afspraak te maken zodat we de hefbrug voor u reserveren. Heeft u echter een acuut probleem zoals een brandend lampje, een lekke band of een vreemd geluid? Rijd gerust even langs aan de Ambacht 8 in Grootegast of bel 06 - 55 33 57 68!',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Veelgestelde Vragen</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Vragen over Onderhoud of APK?
          </h2>

          <p className="text-slate-300 text-base">
            Hier vindt u antwoorden op de meest gestelde vragen over onze werkwijze en diensten in Grootegast.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-white text-sm sm:text-base hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-amber-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-900">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
