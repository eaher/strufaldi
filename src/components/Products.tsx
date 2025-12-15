'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const formats = [
    {
        id: 1,
        title: '20x20 cm',
        subtitle: 'FORMATO',
        image: '/images/products/formato-20x20.png',
    },
    {
        id: 2,
        title: '15x15 cm',
        subtitle: 'FORMATO',
        image: '/images/products/formato-15x15.png',
    },
    {
        id: 3,
        title: '10x20 cm',
        subtitle: 'FORMATO',
        image: '/images/products/formato-10x20.png',
    },
    {
        id: 4,
        title: '10x10 cm',
        subtitle: 'FORMATO',
        image: '/images/products/formato-10x10.png',
    },
    {
        id: 5,
        title: '6x24 cm',
        subtitle: 'FORMATO',
        image: '/images/products/formato-6x24.png',
    },
];

export default function Products() {
    return (
        <section id="products" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-strufaldi-charcoal mb-4"
                    >
                        Nuestros Productos
                    </motion.h2>
                    <div className="w-24 h-1 bg-strufaldi-red mx-auto rounded-none"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {formats.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-none h-[400px] cursor-pointer bg-gray-200"
                        >
                            {/* Image with Zoom Effect */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-xs uppercase tracking-widest text-gray-300 font-medium">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
