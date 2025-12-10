'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
    {
        id: 1,
        title: 'Pisos Industriales',
        description: 'Resistencia extrema para alto tránsito.',
        color: 'bg-stone-800',
        height: 'h-[400px] md:h-[600px]',
    },
    {
        id: 2,
        title: 'Revestimientos',
        description: 'Estética y protección para fachadas.',
        color: 'bg-stone-700',
        height: 'h-[400px] md:h-[600px]',
    },
    {
        id: 3,
        title: 'Piscinas',
        description: 'Sistemas completos para natatorios.',
        color: 'bg-blue-900',
        height: 'h-[400px] md:h-[600px]',
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-strufaldi-charcoal mb-4"
                    >
                        Nuestros Productos
                    </motion.h2>
                    <div className="w-24 h-1 bg-strufaldi-red mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl ${cat.color} ${cat.height} cursor-pointer`}
                        >
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black/80 to-transparent group-hover:scale-105 transition-transform duration-700 ease-out"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{cat.title}</h3>
                                        <p className="text-white/80 font-light">{cat.description}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-strufaldi-charcoal transition-all">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
