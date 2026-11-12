import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Car, 
  Wrench, 
  ShieldCheck, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { RdwBadge } from './RdwBadge';

interface KentekenCalculatorProps {
  initialService?: string;
}

export const KentekenCalculator: React.FC<KentekenCalculatorProps> = ({ initialService }) => {
  const [kenteken, setKenteken] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['APK Keuring (RDW Erkend)']
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Ochtend (08:00 - 12:00)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const availableServices = [
    { id: 'apk', name: 'APK Keuring (RDW Erkend)', price: 45, estTime: '45 min', tag: 'RDW' },
    { id: 'kleine-beurt', name: 'Kleine Onderhoudsbeurt', price: 149, estTime: '1.5 uur', tag: 'Onderhoud' },
    { id: 'grote-beurt', name: 'Grote Onderhoudsbeurt', price: 295, estTime: '3 uur', tag: 'Grondig' },
    { id: 'apk-combi', name: 'APK + Grote Beurt Combi', price: 320, estTime: '3.5 uur', tag: 'Voordeel' },
    { id: 'diagnose', name: 'Storingsdiagnose / Uitlezen', price: 45, estTime: '30 min', tag: 'Elektronica' },
    { id: 'airco', name: 'Airco Service & Afvullen', price: 89, estTime: '1 uur', tag: 'Klimaat' },
    { id: 'banden', name: 'Bandenwissel (4 wielen)', price: 40, estTime: '30 min', tag: 'Seizoen' },
    { id: 'remmen', name: 'Remmencontrole & Reparatie', price: 0, estTime: '1 uur', tag: 'Veiligheid', customPrice: 'Prijsopgave' },
  ];

  // Format Dutch Kenteken as user types
  const handleKentekenChange = (val: string) => {
    let clean = val.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (clean.length > 8) clean = clean.slice(0, 8);
    setKenteken(clean);
  };

  const toggleService = (srvName: string) => {
    if (selectedServices.includes(srvName)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srvName));
      }
    } else {
      setSelectedServices([...selectedServices, srvName]);
    }
  };

  // Calculate estimated total
  const calculatedTotal = selectedServices.reduce((sum, srvName) => {
    const item = availableServices.find(s => s.name === srvName);
    return sum + (item ? item.price : 0);
  }, 0);

  const hasCustomQuote = selectedServices.some(srvName => {
    const item = availableServices.find(s => s.name === srvName);
    return item?.customPrice;
  });

  const generateWhatsAppMessage = () => {
    const lines = [
      `*Nieuwe Afspraak Aanvraag - Autoservice Hazenberg*`,
      `*Kenteken:* ${kenteken || 'Nog niet ingevuld'}`,
      `*Gekozen Diensten:*`,
      ...selectedServices.map(s => `• ${s}`),
      `*Voorkeursdatum:* ${preferredDate || 'In overleg'} (${preferredTime})`,
      `*Naam:* ${name || 'Niet opgegeven'}`,
      `*Telefoon:* ${phone || 'Niet opgegeven'}`,
      `*E-mail:* ${email || 'Niet opgegeven'}`,
      notes ? `*Opmerkingen:* ${notes}` : '',
      `\nVerstuurd via website Autoservice Hazenberg (Ambacht 8, Grootegast)`
    ].filter(Boolean).join('\n');

    return encodeURIComponent(lines);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Afspraak aanvraag Autoservice Hazenberg - Kenteken ${kenteken || 'auto'}`);
    const body = encodeURIComponent(
      `Beste Dirkjan / Autoservice Hazenberg,\n\nGraag wil ik een afspraak inplannen voor mijn auto:\n\n` +
      `Kenteken: ${kenteken}\n` +
      `Diensten: ${selectedServices.join(', ')}\n` +
      `Voorkeursdatum: ${preferredDate} (${preferredTime})\n\n` +
      `Contactgegevens:\n` +
      `Naam: ${name}\n` +
      `Telefoon: ${phone}\n` +
      `E-mail: ${email}\n` +
      `Opmerkingen: ${notes}\n\n` +
      `Met vriendelijke groet,\n${name}`
    );
    return `mailto:dhazenberg@home.nl?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="afspraak" className="py-20 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Car className="w-4 h-4 text-amber-400" />
            <span>Direct Afspraak Inplannen</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Kenteken Afspraak &amp; Prijsindicatie
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Vul uw kenteken in, selecteer de gewenste werkzaamheden en kies een datum die u uitkomt. U ontvangt snel een bevestiging van Autoservice Hazenberg.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto rounded-3xl bg-slate-900 border border-emerald-500/40 p-8 sm:p-10 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Bedankt voor uw aanvraag!</h3>
              <p className="text-slate-300 text-sm">
                Wij hebben uw gegevens voor kenteken <span className="font-mono font-bold text-amber-400 px-2 py-0.5 bg-slate-950 rounded border border-slate-800">{kenteken || 'Onbekend'}</span> ontvangen.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 text-slate-300">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Geselecteerde diensten:</span>
                <span className="font-semibold text-white">{selectedServices.join(', ')}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Voorkeursdatum:</span>
                <span className="font-semibold text-white">{preferredDate || 'In overleg'} ({preferredTime})</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Naam &amp; Telefoon:</span>
                <span className="font-semibold text-white">{name} • {phone}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold">
                <span className="text-slate-400">Indicatie totaal:</span>
                <span className="text-amber-400">
                  {calculatedTotal > 0 ? `vanaf ca. € ${calculatedTotal},-` : 'Op aanvraag'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Dirkjan Hazenberg neemt spoedig telefonisch of per e-mail contact met u op om de afspraak definitief te bevestigen.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/31655335768?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Stuur Direct via WhatsApp</span>
              </a>

              <a
                href={generateMailtoUrl()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Open in E-mail</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-3 rounded-xl bg-slate-900 text-slate-400 hover:text-white text-xs font-semibold cursor-pointer"
              >
                Nieuwe aanvraag maken
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-8 bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-8 shadow-xl">
              
              {/* Step 1: Dutch License Plate Input */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-white uppercase tracking-wider flex items-center justify-between">
                  <span>1. Uw Kenteken</span>
                  <span className="text-xs font-normal text-slate-400">Niet verplicht, wel handig</span>
                </label>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Authentic Dutch Yellow License Plate */}
                  <div className="relative inline-flex items-center rounded-lg overflow-hidden border-2 border-black shadow-lg bg-[#f5b300]">
                    {/* Blue EU strip */}
                    <div className="w-9 h-14 bg-[#00518f] flex flex-col items-center justify-between py-1 text-white select-none">
                      <div className="w-5 h-5 flex items-center justify-center text-[10px] leading-none">
                        ★
                      </div>
                      <span className="text-[11px] font-black tracking-wider leading-none">
                        NL
                      </span>
                    </div>

                    {/* Plate Input */}
                    <input
                      type="text"
                      value={kenteken}
                      onChange={(e) => handleKentekenChange(e.target.value)}
                      placeholder="XX-123-X"
                      maxLength={8}
                      className="w-48 sm:w-56 h-14 bg-transparent px-3 text-center font-mono text-2xl font-black text-black uppercase tracking-widest placeholder:text-neutral-700/60 focus:outline-none"
                    />
                  </div>

                  <p className="text-xs text-slate-400 max-w-xs leading-tight">
                    Hiermee kunnen wij direct de juiste fabrieksspecificaties, olie en onderdelen voor uw auto opzoeken.
                  </p>
                </div>
              </div>

              {/* Step 2: Service Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-white uppercase tracking-wider">
                  2. Kies Gewenste Werkzaamheden
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableServices.map((srv) => {
                    const isSelected = selectedServices.includes(srv.name);
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.name)}
                        className={`flex items-start justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500 text-white shadow-sm'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">
                              {srv.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-400 font-mono">
                              {srv.tag}
                            </span>
                            <span>Duur ca. {srv.estTime}</span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-xs font-mono font-bold text-amber-400 block">
                            {srv.customPrice ? srv.customPrice : `€ ${srv.price},-`}
                          </span>
                          <span className={`text-[10px] font-bold ${isSelected ? 'text-amber-400' : 'text-slate-600'}`}>
                            {isSelected ? '✓ Gekozen' : '+ Kies'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Date & Time */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-white uppercase tracking-wider">
                  3. Voorkeursdatum &amp; Dagdeel
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                      Gewenste datum:
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full h-11 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                      Voorkeur dagdeel:
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    >
                      <option value="Ochtend (08:00 - 12:00)">Ochtend (08:00 - 12:00)</option>
                      <option value="Middag (12:00 - 17:30)">Middag (12:00 - 17:30)</option>
                      <option value="Zaterdag ochtend (09:00 - 13:00)">Zaterdag ochtend (09:00 - 13:00)</option>
                      <option value="Maakt niet uit">Maakt niet uit (in overleg)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact details */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-white uppercase tracking-wider">
                  4. Uw Contactgegevens
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1 font-medium">
                      Uw Naam *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Bijv. Jan de Vries"
                      className="w-full h-11 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1 font-medium">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="06 - 12345678"
                      className="w-full h-11 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1 font-medium">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="uw@email.nl"
                      className="w-full h-11 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1 font-medium">
                    Eventuele klachten of opmerkingen:
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Bijv. trilling bij remmen, piepend geluid, airco blaast warme lucht..."
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base shadow-xl shadow-amber-500/20 cursor-pointer transition-all"
                >
                  <Send className="w-5 h-5 text-slate-950" />
                  <span>Verstuur Afspraak Aanvraag</span>
                </button>

                <a
                  href={`https://wa.me/31655335768?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Stuur via WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Column: Overview Card & Garage Trust Badges */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Summary Card */}
              <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 space-y-5 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h3 className="text-base font-bold text-white">Overzicht Aanvraag</h3>
                  <span className="text-xs text-amber-400 font-mono font-semibold">
                    {kenteken ? `Kenteken: ${kenteken}` : 'Geen kenteken'}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <span className="text-slate-400 font-semibold block">Geselecteerde diensten:</span>
                  {selectedServices.map((srv, idx) => (
                    <div key={idx} className="flex items-center justify-between text-slate-200">
                      <span className="truncate pr-2">• {srv}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Voorkeursdatum:</span>
                    <span className="text-white font-semibold">{preferredDate || 'In overleg'}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Dagdeel:</span>
                    <span className="text-white font-semibold">{preferredTime}</span>
                  </div>
                </div>

                {/* Price indication */}
                <div className="pt-4 border-t border-slate-800 bg-slate-950/60 -mx-6 -mb-6 p-6 rounded-b-3xl">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Indicatie tarief</span>
                      <span className="text-[10px] text-slate-500">Inclusief btw &amp; montage</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-amber-400">
                        {calculatedTotal > 0 ? `€ ${calculatedTotal},-` : 'Op maat'}
                      </span>
                      {hasCustomQuote && (
                        <span className="block text-[10px] text-slate-400">+ reparatie opgave</span>
                      )}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-3 leading-snug">
                    Vaste prijs vooraf. Mocht er tijdens het werk iets aan het licht komen, dan bellen wij altijd eerst voor overleg.
                  </p>
                </div>

              </div>

              {/* RDW Official Badge Card */}
              <RdwBadge variant="card" />

              {/* Direct Help Card */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Direct iemand spreken?</span>
                </div>
                <p className="text-xs text-slate-300">
                  Heeft u met spoed pech of een acuut storingslampje? Bel direct met onze werkplaats in Grootegast:
                </p>
                <a
                  href="tel:0655335768"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 border border-slate-700 text-sm font-mono font-bold"
                >
                  06 - 55 33 57 68
                </a>
              </div>

            </div>

          </form>
        )}

      </div>
    </section>
  );
};
