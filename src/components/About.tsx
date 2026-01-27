'use client';

import Image from 'next/image';
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

                            <div className="relative h-24 w-80 mb-2">
                                <Image
                                    src="/images/logo-der-v2.png"
                                    alt="Strufaldi Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Strufaldi es una empresa brasileña fundada en 1995, especializada en revestimientos cerámicos de pequeño formato, como pastillas y azulejos, conocidos por su diseño innovador, colores vibrantes y alta calidad, ideales para piscinas, fachadas e interiores, con una fuerte presencia en el mercado latinoamericano.
                            </p>

                            <div className="relative h-16 w-48 mb-6">
                                <Image
                                    src="/images/logo-izq.png"
                                    alt="Ceracor Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
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
                            <div className="aspect-[4/3] rounded-lg shadow-2xl relative overflow-hidden group">
                                <Image
                                    src="/images/corpo.png"
                                    alt="Instalaciones Strufaldi"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Decorative element */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-strufaldi-red/20 rounded-full blur-3xl z-20 pointer-events-none mix-blend-multiply"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
