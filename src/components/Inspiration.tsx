'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

// Estilos personalizados para los botones de navegación de Swiper
const swiperStyles = `
  .swiper-button-next, .swiper-button-prev {
    color: white !important;
    background: rgba(0,0,0,0.3);
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    backdrop-filter: blur(4px);
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 20px !important;
    font-weight: bold;
  }
  .swiper-pagination-bullet {
    background: white !important;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: white !important;
  }
`;

export default function Inspiration() {
    // State for modal
    const [selectedCategory, setSelectedCategory] = useState<typeof INSPIRATION_CATEGORIES[0] | null>(null);

    const openModal = (category: typeof INSPIRATION_CATEGORIES[0]) => {
        // Solo abrir modal si la categoría tiene imágenes
        if (category.images.length === 0) {
            return;
        }
        setSelectedCategory(category);
        document.body.style.overflow = 'hidden'; // Locked
    };

    const closeModal = () => {
        setSelectedCategory(null);
        document.body.style.overflow = 'unset'; // Usage restored
    };

    // Zoom correction for high-DPI screens (counteracts global DynamicScaling)
    const [modalZoom, setModalZoom] = useState(1);

    useEffect(() => {
        // Detect current zoom/scale
        const dpr = window.devicePixelRatio || 1;
        if (dpr > 1.2) { // Apply only if significant scaling is detected
            setModalZoom(dpr);
        } else {
            setModalZoom(1);
        }

        const handleResize = () => {
            const currentDpr = window.devicePixelRatio || 1;
            setModalZoom(currentDpr > 1.2 ? currentDpr : 1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Performance: Preload next & prev images
    useEffect(() => {
        // ... (preloading logic if needed, currently unused in this snippet but kept if present)
    }, [selectedCategory]);


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
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-0"
                        style={{
                            zoom: modalZoom as any, // Force typed zoom
                            height: modalZoom > 1 ? '100vh' : '100%', // Ensure full height coverage when zoomed
                        }}
                        onClick={closeModal}
                    >
                        {/* Styles Injection */}
                        <style>{swiperStyles}</style>

                        {/* Modal Content Wrapper */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-full h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-[70] p-2 text-white/70 hover:text-white transition-colors bg-black/40 rounded-full md:bg-transparent"
                                aria-label="Cerrar"
                            >
                                <X size={32} />
                            </button>

                            {/* Swiper Container */}
                            <div className="w-full h-full flex items-center justify-center">
                                <Swiper
                                    modules={[Navigation, Pagination, Keyboard]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    keyboard={{ enabled: true }}
                                    loop={true}
                                    className="w-full h-[95vh] md:h-[98vh]" // Responsive height
                                >
                                    {selectedCategory.images.map((image, index) => (
                                        <SwiperSlide key={index} className="flex items-center justify-center">
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                <Image
                                                    src={`${selectedCategory.basePath}${image}`}
                                                    alt={`${selectedCategory.title} - ${index + 1}`}
                                                    fill
                                                    className="object-contain"
                                                    priority={index === 0}
                                                    quality={90}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Counter/Title - Mobile Only */}
                            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none md:hidden z-20">
                                <h3 className="text-white/80 text-lg font-bold tracking-wider uppercase drop-shadow-md">
                                    {selectedCategory.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}