'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Data Structure: Product Showcase
const inspirationProducts = [
    {
        id: 'carmelita',
        name: 'Carmelita',
        mainThumbnail: '/placeholder-pool.jpg',
        galleryImages: [
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
        ]
    },
    {
        id: 'vulcano-gris',
        name: 'Vulcano Grís',
        mainThumbnail: '/placeholder-pool.jpg',
        galleryImages: [
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
        ]
    },
    {
        id: 'pietra-beige',
        name: 'Pietra Beige',
        mainThumbnail: '/placeholder-pool.jpg',
        galleryImages: [
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
        ]
    },
    {
        id: 'basalto-negro',
        name: 'Basalto Negro',
        mainThumbnail: '/placeholder-pool.jpg',
        galleryImages: [
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
            '/placeholder-pool.jpg',
        ]
    },
];

export default function Inspiration() {
    // State for modal
    const [selectedProduct, setSelectedProduct] = useState<typeof inspirationProducts[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (product: typeof inspirationProducts[0]) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeModal = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProduct) return;
        setCurrentImageIndex((prev) =>
            prev === selectedProduct.galleryImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProduct) return;
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedProduct.galleryImages.length - 1 : prev - 1
        );
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-12">
                    <h4 className="text-strufaldi-red font-bold uppercase tracking-widest mb-2 text-sm">Inspiración</h4>
                    <h2 className="text-3xl md:text-5xl text-strufaldi-charcoal font-bold tracking-tight">Usos y Aplicaciones</h2>
                </div>

                {/* Main Grid: 4 Columns desktop, 1 column mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {inspirationProducts.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => openModal(product)}
                            className="group relative aspect-square cursor-pointer overflow-hidden border border-gray-100 rounded-none shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${product.mainThumbnail})` }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-4" size={32} />
                                <h3 className="text-2xl font-bold text-white bg-black/50 px-4 py-2 backdrop-blur-sm uppercase tracking-wider">
                                    {product.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-white rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row h-[80vh] md:h-[600px]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-50 p-2 bg-strufaldi-red text-white hover:bg-red-700 transition-colors rounded-none shadow-lg"
                            >
                                <X size={24} />
                            </button>

                            {/* Carousel Section (Left/Top) */}
                            <div className="relative w-full md:w-3/4 h-2/3 md:h-full bg-gray-100 group">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-all duration-500"
                                    style={{ backgroundImage: `url(${selectedProduct.galleryImages[currentImageIndex]})` }}
                                ></div>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-strufaldi-red text-white backdrop-blur-md rounded-none transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronLeft size={32} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-strufaldi-red text-white backdrop-blur-md rounded-none transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronRight size={32} />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 text-sm rounded-none backdrop-blur-sm">
                                    {currentImageIndex + 1} / {selectedProduct.galleryImages.length}
                                </div>
                            </div>

                            {/* Info Section (Right/Bottom) */}
                            <div className="w-full md:w-1/4 p-8 flex flex-col justify-center bg-white border-l border-gray-100">
                                <h3 className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">Colección</h3>
                                <h2 className="text-3xl font-bold text-strufaldi-charcoal mb-6">{selectedProduct.name}</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Explora la versatilidad de {selectedProduct.name} en diferentes entornos. Desde piscinas de alto rendimiento hasta terrazas elegantes.
                                </p>
                                <div className="mt-auto">
                                    <button
                                        onClick={closeModal}
                                        className="w-full py-3 border-2 border-strufaldi-charcoal text-strufaldi-charcoal hover:bg-strufaldi-charcoal hover:text-white font-bold uppercase tracking-widest transition-all rounded-none text-sm"
                                    >
                                        Cerrar Galería
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
