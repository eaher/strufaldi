'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const INSPIRATION_CATEGORIES = [
    {
        title: 'Piscina',
        basePath: '/images/inspiracion/piscina/',
        customCover: '/images/inspiracion/card-piscina.webp',
        images: [
            '124-scaled.webp',
            'KAIMU - HORIZONTAL SIN TIERRA.webp',
            'STRUFALDI - 10X10 - KAIMU- PILETA.webp',
            'STRUFALDI - 10X10 - MALAWI - AMB - PISCINA - SEPTIEMBRE24 - ESTEBAN.webp',
            'STRUFALDI - 10X10 - MALAWI - AMB AGOSTO24 - 2.webp',
            'STRUFALDI - 10X10 - MALAWI - AMBIENTACION - AGOSTO24.webp',
            'STRUFALDI - 10X10 - MAUI - AMBIENTACION - JULIO24.webp',
            'STRUFALDI - 10X10 - PALAU - ABRIL23 - PLACA - copia.webp',
            'STRUFALDI - 10X10 - PALAU - MAYI23 - PLACA.webp',
            'STRUFALDI - 10X10 - PALAU - OCTUBRE22 - BASE - SOLO HISTORIA.webp',
            'STRUFALDI - 10X10 - PALAU - SEPTIEMBRE22 - BASE2 - AMPLIADA.webp',
            'STRUFALDI - 10X10 - SAMOA - ABRIL23 - PLACA.webp',
            'STRUFALDI - 10X10 - SAMOA - MARZO23 - SOLO HISTORIA.webp',
            'STRUFALDI - 10X10 - VIS - AMBIENTACION - JULIO24 - 22.webp',
            'Strufaldi-10x10-Maui-1.webp',
        ],
    },
    {
        title: 'Pared',
        basePath: '/images/inspiracion/pared/',
        customCover: '/images/inspiracion/card-pared.webp',
        images: [
            // Imágenes de NUEVA PARED (agregadas el 2026-02-03)
            'MURO-NEGRO-web-36.webp',
            'MURO-NEGRO-web-5.webp',
            'MURO-NEGRO-web-8.webp',
            'HACER ZOOM.webp',
            'RE ENCUADRAR.webp',
            // Imágenes anteriores
            '31,- STRUFALDI - 6X24 - PALAU BRIGHT - AMB - AGOSTO24.webp',
            'STRUFALADI 10X10 KAIMU - SAVANE 19X120 - LEGNO URBAN - ABRIL24 - AMBIENTACION x.webp',
            'STRUFALDI  6X24 - ARDEA - MAYO24 -  AMB2.webp',
            'STRUFALDI - 10X10 - AMARELO - AMBIENTACIÓN - ABRIL24.webp',
            'STRUFALDI - 10X10 - BLACK - AMB - AGOSTO24.webp',
            'STRUFALDI - 10X10 - CANARIO - AMBIENTACION - DICIEMBRE24.webp',
            'STRUFALDI - 10X10 - KAIMU- JUNIO23 - SOLO HISTORIA - COPIADO.webp',
            'STRUFALDI - 10X10 - LAGUNA - AMB - AGOSTO24 4.webp',
            'STRUFALDI - 10X10 - LARANJA - ABRIL2024 - AMB.webp',
            'STRUFALDI - 10X10 - LARANJA - AMB - ABRIL24.webp',
            'STRUFALDI - 10X10 - PORTLAND - AMBIENTACIÓN - ABRIL24.webp',
            'STRUFALDI - 10X10 - SAMOA - AMB - DIC24.webp',
            'STRUFALDI - 10X10 - SAND - ABRIL24 - AMBIENTACION.webp',
            'STRUFALDI - 10X10 - VERMELHO - AMBIENTACIÓN - JUNIO24.webp',
            'STRUFALDI - 10X10 - VIS - AMBIENTACIÓN - ABRIL24.webp',
            'STRUFALDI - 10X10 - WHITE - AGOSTO24.webp',
            'STRUFALDI - 10X10 - WHITE - AMB - AGOSTO24.webp',
            'STRUFALDI - 10X10 - WHITE - ENERO23 - PLACA.webp',
            'STRUFALDI - 15X15 - BOLOGNA - AMB -.webp',
            'STRUFALDI - 15X15 - CALETTA - OCTUBRE2024.webp',
            'STRUFALDI - 15X15 - MISSENO - AMB - JULIO24 - RETOQUE.webp',
            'STRUFALDI - 15X15 - ROMANA - AMBIENTACION - JULIO24.webp',
            'STRUFALDI - 20X20 - ARGOS - ENERO23 - PLACA.webp',
            'STRUFALDI - 20X20 - BLACK + GELO - AMB - COCINA.webp',
            'STRUFALDI - 20X20 - BLACK MATE - ENERO23 - PLACA.webp',
            'STRUFALDI - 20X20 - GELO - BLACK MATE - PORTLAND - MAILING IMG - SEP24.webp',
            'STRUFALDI - 6X24 - ANCONA BRIGHT SOFT.webp',
            'STRUFALDI - 6X24 - BIANCHE AMBIENTACION.webp',
            'STRUFALDI - 6X24 - BLACK MATE - AMB - AGOSTO24.webp',
            'STRUFALDI - 6X24 - CALETTA - AMBIENTACION - JULIO24.webp',
            'STRUFALDI - 6X24 - CENIZA - AMBIENTACION - SEPTIEMBRE24.webp',
            'STRUFALDI - 6X24 - FIRENZE BRIGHT JULIO24.webp',
            'STRUFALDI - 6X24 - FIRENZE2 AMBIENTACION.webp',
            'STRUFALDI - 6X24 - MISENO - AMBIENTACION - NOVIEMBRE24.webp',
            'STRUFALDI - 6X24 - MOZA - AMB - NOV24.webp',
            'STRUFALDI - 6X24 - PONZA BRIGHT - OCTUBRE24.webp',
            'STRUFALDI - 6X24 - PORTLAND - AMB - NOV24.webp',
            'STRUFALDI - 6X24 - RIMINI BRIGHT.webp',
            'STRUFALDI - 6X24 - SAN REMO AMBIENTACION.webp',
            'STRUFALDI - 6X24 - TALESI - AMB - AGOSTO24.webp',
            'STRUFALDI - ARANCIONE BRIGHT - AMBIENTACION - NOVIEMBRE24.webp',
            'STRUFALDI - LAGUNA + WHITE - BAÑO - AGOSTO23.webp',
            'STRUFALDI - SAMOA 20X20 - AMBIENTACION - DICIEMBRE24.webp',
            'STRUFALDI 10X10 CASTAÑO CLARO - ABRIL24 -AMBIENTACION 2.webp',
            'STRUFALDI BLACK COD 6370.webp',
            'STRUFALDI- 6X24 - ATRANI- MAYO24 - AMB.webp',
            'STRUFALDI- 6X24 - POSITANO - AMB - MAYO24.webp',
        ],
    },
    {
        title: 'Piso',
        basePath: '/images/inspiracion/piso/',
        customCover: '/images/inspiracion/card-piso.webp',
        images: [
            'STRUFALDI - 20X20 - GELO - BLACK MATE - PORTLAND - MAILING IMG - SEP24.webp',
            'STRUFALDI - 20X20 - PORTLAND - ABMIENTACIÓN - ABRIL24.webp',
        ],
    },
];

export default function Inspiration() {
    // State for modal
    const [selectedCategory, setSelectedCategory] = useState<typeof INSPIRATION_CATEGORIES[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (category: typeof INSPIRATION_CATEGORIES[0]) => {
        // Solo abrir modal si la categoría tiene imágenes
        if (category.images.length === 0) {
            return;
        }
        setSelectedCategory(category);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden'; // Locked
    };

    const closeModal = () => {
        setSelectedCategory(null);
        document.body.style.overflow = 'unset'; // Usage restored
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedCategory) return;
        setCurrentImageIndex((prev) =>
            prev === selectedCategory.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedCategory) return;
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedCategory.images.length - 1 : prev - 1
        );
    };

    // Performance: Preload next & prev images
    useEffect(() => {
        if (!selectedCategory) return;

        const images = selectedCategory.images;
        const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
        const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

        const preloadImage = (src: string) => {
            const img = new window.Image();
            img.src = src;
        };

        const nextSrc = `${selectedCategory.basePath}${images[nextIndex]}`;
        const prevSrc = `${selectedCategory.basePath}${images[prevIndex]}`;

        preloadImage(nextSrc);
        preloadImage(prevSrc);

    }, [selectedCategory, currentImageIndex]);


    return (
        <section id="inspiration" className="pt-2 pb-8 bg-white relative scroll-mt-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-12">
                    <h4 className="text-red-700 font-bold uppercase tracking-widest mb-2 text-sm">Inspiración</h4>
                    <h2 className="text-3xl md:text-5xl text-gray-900 font-bold tracking-tight">Usos y Aplicaciones</h2>
                </div>

                {/* Main Grid: 1 column mobile, 3 columns desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {INSPIRATION_CATEGORIES.map((category) => (
                        <div
                            key={category.title}
                            onClick={() => openModal(category)}
                            className="group relative h-80 cursor-pointer overflow-hidden rounded-none shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={category.customCover || `${category.basePath}${category.images[0]}`}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase tracking-wider shadow-black/50 drop-shadow-lg">
                                    {category.title}
                                </h3>
                                <p className="mt-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    Ver Galería
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedCategory && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12"
                >
                    {/* Modal Content Wrapper - Wraps tightly around content */}
                    <div
                        className="relative max-w-full max-h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button - Outside the image context for accessibility on small screens, or corner */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 md:top-0 md:-right-16 z-[60] p-3 text-white/70 hover:text-white transition-colors"
                            aria-label="Cerrar"
                        >
                            <X size={32} />
                        </button>

                        {/* Carousel Image Container - Helper for smooth resizing without black frame */}
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="relative shadow-2xl overflow-hidden rounded-sm"
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center justify-center bg-black/5" // Subtle background just to see bounds if needed, or remove
                            >
                                <Image
                                    src={`${selectedCategory.basePath}${selectedCategory.images[currentImageIndex]}`}
                                    alt={`${selectedCategory.title} Image ${currentImageIndex + 1}`}
                                    width={1920}
                                    height={1080}
                                    className="object-contain max-h-[85vh] w-auto h-auto"
                                    priority
                                    quality={90}
                                />
                            </motion.div>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20 pointer-events-none">
                                <span className="bg-black/60 text-white px-3 py-1 text-xs md:text-sm rounded-full backdrop-blur-sm border border-white/10">
                                    {currentImageIndex + 1} / {selectedCategory.images.length}
                                </span>
                            </div>
                        </motion.div>

                        {/* Navigation Arrows - Outside container for better visibility */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 bg-black/20 backdrop-blur-sm"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={48} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 bg-black/20 backdrop-blur-sm"
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={48} />
                        </button>

                        <h3 className="mt-4 text-white text-xl font-bold tracking-wider uppercase text-center md:hidden">{selectedCategory.title}</h3>

                    </div>
                </div>
            )}
        </section>
    );
}