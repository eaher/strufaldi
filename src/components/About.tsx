'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-strufaldi-gray overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-strufaldi-red font-bold uppercase tracking-widest mb-4">Sobre Nosotros</h4>

                            <h2 className="text-4xl md:text-5xl font-bold text-strufaldi-charcoal mb-6 leading-tight">
                                STRUFALDI
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Strufaldi es una empresa brasileña fundada en 1995, especializada en revestimientos cerámicos de pequeño formato, como pastillas y azulejos, conocidos por su diseño innovador, colores vibrantes y alta calidad, ideales para piscinas, fachadas e interiores, con una fuerte presencia en el mercado latinoamericano.
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold text-strufaldi-charcoal mb-6 leading-tight">
                                CERACOR
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Hace más de 14 años que impulsamos proyectos a través de la distribución de pisos y revestimientos de marcas europeas y latinoamericanas, combinando trayectoria, conocimiento técnico y un portfolio de productos premium de diseño.
                            </p>
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
