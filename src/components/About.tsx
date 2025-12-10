'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-strufaldi-gray overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-strufaldi-red font-bold uppercase tracking-widest mb-4">Sobre Nosotros</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-strufaldi-charcoal mb-8 leading-tight">
                                Tradición y <br /> Tecnología Cerámica
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Desde hace décadas, Strufaldi se dedica a la producción de cerámica de alta performance. Combinamos la artesanía tradicional con tecnología de punta para crear productos que superan los estándares más exigentes del mercado.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Nuestra misión es ofrecer soluciones duraderas para proyectos que requieren resistencia química, mecánica y térmica, sin sacrificar la estética.
                            </p>
                            <button className="text-strufaldi-charcoal font-bold border-b-2 border-strufaldi-charcoal pb-1 hover:text-strufaldi-red hover:border-strufaldi-red transition-all">
                                Conoce nuestra historia
                            </button>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="aspect-[4/3] bg-stone-300 rounded-lg shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400">
                                    Imagen Corporativa / Fábrica
                                </div>
                                {/* Decorative element */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-strufaldi-red/10 rounded-full blur-3xl"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
