import React from 'react';
import { Phone, MessageSquare, Calendar, Navigation } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-2.5 px-3 shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center">
        
        {/* Call */}
        <a
          href="tel:0655335768"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:bg-slate-800 transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold text-white">Bellen</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/31655335768?text=Hallo%20Autoservice%20Hazenberg,%20ik%20wil%20graag%20een%20afspraak%20maken%20voor%20mijn%20auto."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Booking */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black cursor-pointer shadow-md"
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-black">Afspraak</span>
        </button>

        {/* Route */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Ambacht+8,+9861+AM+Grootegast"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 hover:bg-slate-800 transition-colors"
        >
          <Navigation className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold text-white">Route</span>
        </a>

      </div>
    </div>
  );
};
