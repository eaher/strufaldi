'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ProductGalleryModal from './ProductGalleryModal';

const PRODUCTS = [
    {
        id: '6x24',
        title: 'Formato 6x24',
        basePath: '/images/products/6x24/',
        // Image for the card
        coverImage: '/images/products/formato-6x24.png',
        images: ['6x24-01.png', '6x24-02.png', '6x24-03.png'],
        description: 'Descripción corta del formato 6x24...'
    },
    {
        id: '10x10',
        title: 'Formato 10x10',
        basePath: '/images/products/10x10/',
        coverImage: '/images/products/formato-10x10.jpg',
        images: ['10x10-01.png', '10x10-02.png', '10x10-03.png', '10x10-04.png', '10x10-05.png', '10x10-06.png', '10x10-07.png', '10x10-08.png', '10x10-09.png'],
        description: 'Descripción corta del formato 10x10...'
    },
    {
        id: '10x20',
        title: 'Formato 10x20',
        basePath: '/images/products/10x20/',
        coverImage: '/images/products/formato-10x20.png',
        images: ['10x20-01.png', '10x20-02.png'],
        description: 'Descripción corta del formato 10x20...'
    },
    {
        id: '15x15',
        title: 'Formato 15x15',
        basePath: '/images/products/15x15/',
        coverImage: '/images/products/formato-15x15.png',
        images: ['15x15-01.png', '15x15-02.png', '15x15-03.png'],
        description: 'Descripción corta del formato 15x15...'
    },
    {
        id: '20x20',
        title: 'Formato 20x20',
        basePath: '/images/products/20x20/',
        coverImage: '/images/products/formato-20x20.png',
        images: ['20x20-01.png', '20x20-02.png', '20x20-03.png'],
        description: 'Descripción corta del formato 20x20...'
    }
];

export default function Products() {
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

    const handleOpenGallery = (id: string) => {
        setSelectedProductId(id);
    };

    const handleCloseGallery = () => {
        setSelectedProductId(null);
    };

    const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId);
    // Construct full image paths for the gallery
    const galleryImages = selectedProduct
        ? selectedProduct.images.map(img => `${selectedProduct.basePath}${img}`)
        : [];

    return (
        <section id="products" className="py-16 bg-white scroll-mt-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-strufaldi-charcoal"
                    >
                        Nuestros Productos
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {PRODUCTS.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-none h-[400px] bg-gray-200"
                        >
                            {/* Image with Zoom Effect */}
                            <Image
                                src={product.coverImage}
                                alt={product.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-center flex flex-col items-center justify-end h-1/2 transition-opacity duration-300">
                                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{product.title}</h3>
                                <p className="text-xs uppercase tracking-widest text-gray-200 font-medium mb-4 drop-shadow-md">FORMATO</p>

                                <button
                                    onClick={() => handleOpenGallery(product.id)}
                                    className="bg-white/90 hover:bg-white text-strufaldi-charcoal text-xs font-bold uppercase tracking-wider py-2 px-6 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                                >
                                    Ver galería
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center mx-auto text-gray-600 leading-relaxed space-y-4 text-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <p>
                            Strufaldi es la marca brasileña de revestimientos cerámicos de pequeño formato que combina la artesanía tradicional con tecnología de punta para crear productos de diseño que superan los estándares más exigentes del mercado.
                        </p>
                        <p>
                            Reconocida por sus piezas únicas y coloridas, ideales para piscinas, baños y paredes, ofreciendo alta calidad y durabilidad. Disponibles en diversos colores y acabados (brillante, mate, biselado) y formatos como 10x10 cm, 20x20 cm y 6x24 cm. Strufaldi ofrece soluciones creativas para espacios con personalidad.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Gallery Modal */}
            <ProductGalleryModal
                isOpen={selectedProductId !== null}
                onClose={handleCloseGallery}
                title={selectedProduct?.title || ''}
                images={galleryImages}
            />
        </section>
    );
}
