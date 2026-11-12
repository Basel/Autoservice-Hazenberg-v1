import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface RdwBadgeProps {
  className?: string;
  variant?: 'badge' | 'card' | 'compact' | 'pill';
}

export const RdwBadge: React.FC<RdwBadgeProps> = ({
  className = '',
  variant = 'badge',
}) => {
  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs font-semibold text-slate-200 shadow-sm ${className}`}
      >
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#00518f] text-white text-[9px] font-black tracking-tighter">
          RDW
        </span>
        <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
          RDW Erkend
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 shadow-inner ${className}`}
      >
        <div className="w-8 h-8 rounded bg-gradient-to-br from-[#00518f] to-[#002f5a] p-1 flex flex-col items-center justify-center text-white border border-[#38bdf8]/30">
          <span className="text-[9px] font-black leading-none tracking-tight">RDW</span>
          <span className="text-[6px] tracking-widest uppercase font-semibold text-amber-300">NL</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white tracking-wide">RDW Erkend Bedrijf</span>
          <span className="text-[10px] text-slate-400">Officiële APK &amp; Dienstverlening</span>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-amber-500/30 p-5 shadow-xl ${className}`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-start gap-4">
          {/* Authentic RDW emblem styling */}
          <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-b from-[#005ca9] via-[#004b8a] to-[#003366] p-2 flex flex-col items-center justify-center text-white shadow-lg border-2 border-white/20">
            <span className="text-sm font-black tracking-tight leading-none">RDW</span>
            <div className="w-8 h-0.5 bg-amber-400 my-1 rounded-full" />
            <span className="text-[8px] font-bold uppercase tracking-widest text-amber-300 leading-none">
              Erkend
            </span>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30">
                Gecertificeerd
              </span>
              <span className="text-xs text-slate-400">Ambacht 8, Grootegast</span>
            </div>
            <h4 className="text-base font-bold text-white mt-1">Officieel RDW Erkend Garagebedrijf</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Autoservice Hazenberg voldoet aan alle strikte kwaliteitseisen en keuringseisen van de Rijksdienst voor het Wegverkeer. Wij voeren officiële APK-keuringen uit en melden uw voertuig direct af.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default badge
  return (
    <div
      className={`inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-md backdrop-blur-sm ${className}`}
    >
      <div className="w-9 h-9 rounded-lg bg-gradient-to-b from-[#005ca9] to-[#003870] flex flex-col items-center justify-center text-white shadow border border-white/20 shrink-0">
        <span className="text-xs font-black tracking-tighter leading-none">RDW</span>
        <span className="text-[6px] font-black uppercase text-amber-300 mt-0.5 tracking-wider">Erkend</span>
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-white tracking-wide">RDW Erkend</span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        <span className="text-[11px] text-slate-400 font-medium">Bevoegd voor APK &amp; Onderhoud</span>
      </div>
    </div>
  );
};
