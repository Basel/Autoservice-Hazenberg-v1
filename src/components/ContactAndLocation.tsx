import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  MessageSquare, 
  CheckCircle, 
  Building,
  Send
} from 'lucide-react';
import { RdwBadge } from './RdwBadge';

export const ContactAndLocation: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Ambacht+8,+9861+AM+Grootegast';

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Contact &amp; Locatie</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Kom Langs aan de Ambacht 8 in Grootegast
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Heeft u een vraag over onderhoud, wilt u een prijsopgave of wilt u langskomen voor een bak koffie en advies? Neem gerust contact op of rijd even langs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-black text-white tracking-tight flex items-center justify-between">
                <span>Bedrijfsgegevens</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-amber-400 font-mono font-bold">
                  Grootegast
                </span>
              </h3>

              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Vestigingsadres:</span>
                    <strong className="text-white block text-base">Autoservice Hazenberg</strong>
                    <span className="text-slate-200">Ambacht 8</span>
                    <span className="text-slate-300 block">9861 AM Grootegast, Groningen</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Telefoonnummer:</span>
                    <a
                      href="tel:0655335768"
                      className="text-base sm:text-lg font-mono font-black text-white hover:text-amber-400 transition-colors block"
                    >
                      06 - 55 33 57 68
                    </a>
                    <span className="text-xs text-slate-400">Direct contact met de monteur</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">E-mailadres:</span>
                    <a
                      href="mailto:dhazenberg@home.nl"
                      className="text-white hover:text-amber-400 font-semibold transition-colors block break-all"
                    >
                      dhazenberg@home.nl
                    </a>
                    <span className="text-xs text-slate-400">Voor vragen, facturen en offertes</span>
                  </div>
                </div>

                {/* KvK */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Handelsregister:</span>
                    <span className="text-white font-mono font-bold">KvK 01126376</span>
                    <span className="text-xs text-slate-400 block">Ingeschreven te Groningen</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Plan Route in Google Maps</span>
                </a>

                <a
                  href="https://wa.me/31655335768?text=Hallo%20Autoservice%20Hazenberg,%20ik%20heb%20een%20vraag%20over%20mijn%20auto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Opening Hours Card */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Openingstijden Werkplaats</span>
              </h3>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="font-medium">Maandag</span>
                  <span className="font-mono text-white font-bold">08:00 - 17:30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="font-medium">Dinsdag</span>
                  <span className="font-mono text-white font-bold">08:00 - 17:30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="font-medium">Woensdag</span>
                  <span className="font-mono text-white font-bold">08:00 - 17:30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="font-medium">Donderdag</span>
                  <span className="font-mono text-white font-bold">08:00 - 17:30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="font-medium">Vrijdag</span>
                  <span className="font-mono text-white font-bold">08:00 - 17:30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span className="font-medium">Zaterdag</span>
                  <span className="font-mono text-amber-400 font-bold">09:00 - 13:00 / op afspraak</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-slate-400">
                  <span className="font-medium">Zondag</span>
                  <span className="font-mono text-slate-500 font-semibold">Gesloten</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                Brengen of ophalen buiten openingstijden is in overleg altijd mogelijk via onze sleutelkluis of afspraak.
              </p>
            </div>

            <RdwBadge variant="card" />

          </div>

          {/* Right Column: Interactive Map & Building Preview */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Map Container */}
            <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              
              {/* Map View Header */}
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Kaart &amp; Bereikbaarheid Grootegast
                  </span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950">
                <iframe
                  title="Locatie Autoservice Hazenberg Ambacht 8 Grootegast"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.704253164993!2d6.2704253!3d53.2166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9b0e27dc5b497%3A0x6b9d62d08a5a415a!2sAmbacht%208%2C%209861%20AM%20Grootegast!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                  className="w-full h-full border-0 filter grayscale-[20%] contrast-[110%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Map Footer Banner with Building photo */}
              <div className="p-5 bg-slate-950 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-3">
                  <div className="rounded-xl overflow-hidden border border-slate-700 aspect-video sm:aspect-square">
                    <img
                      src="/facebook_photos/profile_or_logo.jpg"
                      alt="Pand Autoservice Hazenberg Grootegast"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="sm:col-span-9 space-y-1">
                  <h4 className="text-sm font-bold text-white">
                    Makkelijk Bereikbaar &amp; Gratis Parkeren
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Gelegen op het rustige bedrijventerrein aan de Ambacht in Grootegast. Goed bereikbaar vanuit Sebaldeburen, Doezum, Lutjegast, Kornhorn en de N980 / A7.
                  </p>
                  <p className="text-[11px] font-mono text-amber-400">
                    Navigatie-adres: Ambacht 8, 9861 AM Grootegast
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Contact Form */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="space-y-1">
                <h3 className="text-xl font-black text-white tracking-tight">
                  Stuur een Direct Bericht
                </h3>
                <p className="text-xs text-slate-300">
                  Wij reageren binnen 24 uur (of sneller tijdens werkuren).
                </p>
              </div>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-sm font-bold text-white">Bericht succesvol klaargezet!</p>
                  <p className="text-xs text-slate-300">
                    Wilt u direct antwoord? U kunt ons ook direct bereiken via WhatsApp of per telefoon: <strong>06 - 55 33 57 68</strong>.
                  </p>
                  <a
                    href={`mailto:dhazenberg@home.nl?subject=${encodeURIComponent(formData.subject || 'Vraag via website')}&body=${encodeURIComponent(formData.message + '\n\nVan: ' + formData.name + ' (' + formData.phone + ')')}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Verstuur via E-mail app</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1 font-medium">
                        Uw Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Naam"
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="06 - 12345678"
                        className="w-full h-11 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1 font-medium">
                        E-mailadres
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="naam@voorbeeld.nl"
                        className="w-full h-11 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1 font-medium">
                        Onderwerp
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Bijv. Vraag over APK of beurt"
                        className="w-full h-11 px-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1 font-medium">
                      Uw Vraag of Bericht *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Vertel ons over uw auto of vraag..."
                      className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <p className="text-[11px] text-slate-500">
                      Of stuur direct een mail naar <a href="mailto:dhazenberg@home.nl" className="text-amber-400">dhazenberg@home.nl</a>
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm cursor-pointer shadow-md transition-all"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Verstuur Bericht</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
