import React, { useState } from 'react';
import { Camera, ZoomIn, MapPin, X } from 'lucide-react';

export const PhotoShowcase: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const photos = [
    {
      id: 'werkplaats-monteurs',
      src: '/facebook_photos/main_photo.jpg',
      title: 'Vakkundige inspectie op de hefbrug',
      location: 'Ambacht 8, Grootegast',
      tag: 'Werkplaats in actie',
      desc: 'Onze monteurs voeren grondige bodem- en wielophanging-inspecties uit met gerichte verlichting en professionele gereedschapswagens. Let op het geborduurde ASH (Auto Service Hazenberg) logo op de werkkleding.',
      highlight: 'ASH Werkkleding & Hefbrug',
    },
    {
      id: 'bedrijfspand',
      src: '/facebook_photos/profile_or_logo.jpg',
      title: 'Ons bedrijfspand in Grootegast',
      location: 'Ambacht 8, 9861 AM Grootegast',
      tag: 'Locatie & Pand',
      desc: 'Het moderne garagebedrijf aan de Ambacht 8. Voorzien van een royale overheaddeur, overzichtelijke werkplaats, kantoor en ruime parkeergelegenheid voor klanten op het voorterrein.',
      highlight: 'Ambacht 8 Faciliteiten',
    },
    {
      id: 'logo-detail',
      src: '/facebook_photos/logo_chest_closer.png',
      title: 'Het originele ASH embleem',
      location: 'Werkkleding detail',
      tag: 'Origineel Logo',
      desc: 'Het herkenbare ASH (Auto Service Hazenberg) monogram zoals gedragen in onze werkplaats. Bovenin de gestileerde letters A, S en H, met daaronder Autoservice Hazenberg.',
      highlight: 'Logo Replicatie',
    },
  ];

  return (
    <section id="werkplaats" className="py-20 bg-slate-900 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Foto's Uit Onze Werkplaats</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Kijkje Binnen bij Autoservice Hazenberg
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Echte beelden uit de praktijk. Aan de Ambacht 8 in Grootegast beschikken wij over een modern ingerichte werkplaats waar vakmanschap, passie voor autotechniek en klantgerichtheid centraal staan.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div
                className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => setActiveModalImage(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 text-amber-400 text-[11px] font-bold tracking-wide">
                    {photo.tag}
                  </span>
                </div>

                {/* Zoom overlay hint */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-bold shadow-md">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Vergroot</span>
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{photo.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {photo.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">{photo.highlight}</span>
                  <button
                    onClick={() => setActiveModalImage(photo.src)}
                    className="text-amber-400 hover:underline font-semibold"
                  >
                    Bekijk foto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeModalImage}
              alt="Vergrote foto Autoservice Hazenberg"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-4 bg-slate-900 border-t border-slate-800 text-center">
              <p className="text-sm font-semibold text-slate-200">
                Autoservice Hazenberg • Ambacht 8, 9861 AM Grootegast
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
