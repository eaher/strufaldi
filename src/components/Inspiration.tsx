'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const INSPIRATION_CATEGORIES = [
    {
        title: 'Piscina',
        basePath: '/images/inspiracion/piscina/',
        // Ruta específica para la portada de Piscina
        customCover: '/images/inspiracion/card-piscina.png',
        images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    },
    {
        title: 'Piso Pared',
        basePath: '/images/inspiracion/piso-pared/',
        // Ruta específica para la portada de Piso Pared
        customCover: '/images/inspiracion/card-piso-pared.png',
        images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    },
    {
        title: 'Interior',
        basePath: '/images/inspiracion/interior/',
        // Ruta específica para la portada de Interior
        customCover: '/images/inspiracion/card-interior.png',
        images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    },
];

export default function Inspiration() {
    // State for modal
    const [selectedCategory, setSelectedCategory] = useState<typeof INSPIRATION_CATEGORIES[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (category: typeof INSPIRATION_CATEGORIES[0]) => {
        setSelectedCategory(category);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden'; // Locked
    };

    const closeModal = () => {
        setSelectedCategory(null);
        document.body.style.overflow = 'unset'; // Usage restored
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedCategory) return;
        setCurrentImageIndex((prev) =>
            prev === selectedCategory.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedCategory) return;
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedCategory.images.length - 1 : prev - 1
        );
    };

    return (
        <section id="inspiration" className="py-24 bg-white relative">
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
                            {/* LÓGICA DE IMAGEN:
                                1. Busca si existe 'customCover'.
                                2. Si no, intenta cargar la primera imagen de la galería.
                             */}
                            <Image
                                src={category.customCover || `${category.basePath}${category.images[0]}`}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase tracking-wider drop-shadow-md">
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeModal}>
                    {/* Modal Content */}
                    <div
                        className="relative w-full max-w-5xl bg-black rounded-none overflow-hidden shadow-2xl flex flex-col justify-center items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-[60] p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md border border-white/10"
                            aria-label="Cerrar"
                        >
                            <X size={24} />
                        </button>

                        {/* Carousel Image Container */}
                        <div className="relative w-full h-[60vh] md:h-[80vh] bg-black">
                            <Image
                                src={`${selectedCategory.basePath}${selectedCategory.images[currentImageIndex]}`}
                                alt={`${selectedCategory.title} Image ${currentImageIndex + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all border border-white/10"
                                aria-label="Anterior"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all border border-white/10"
                                aria-label="Siguiente"
                            >
                                <ChevronRight size={32} />
                            </button>

                            {/* Image Counter & Title */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center flex-col items-center gap-2 pointer-events-none">
                                <h3 className="text-white text-xl font-bold drop-shadow-md">{selectedCategory.title}</h3>
                                <span className="bg-black/50 text-white px-3 py-1 text-sm rounded-full backdrop-blur-sm border border-white/10">
                                    {currentImageIndex + 1} / {selectedCategory.images.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}