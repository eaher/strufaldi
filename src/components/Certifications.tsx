'use client';

import { CheckCircle, ShieldCheck, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
    return (
        <section id="technical" className="py-20 bg-neutral-800 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Icons 2x2 Grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-8 md:gap-12 justify-items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group">
                                <div className="p-4 rounded-full bg-white/5 border border-white/10 text-strufaldi-red group-hover:bg-white/10 transition-colors">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-lg font-bold opacity-50 group-hover:opacity-100 transition-opacity">Icono {i}</h3>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right Side: Catalogo Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center justify-center text-center md:items-start md:text-left pl-0 md:pl-12 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0"
                    >
                        <h3 className="text-2xl font-bold mb-6">Catálogo</h3>
                        <p className="text-white/60 mb-8 max-w-sm">
                            Descarga nuestro catálogo completo para ver todas las especificaciones y modelos disponibles.
                        </p>
                        <button className="bg-strufaldi-red hover:bg-red-700 text-white py-3 px-10 rounded-full font-bold transition-colors flex items-center gap-3 shadow-lg hover:shadow-red-900/20 transform hover:scale-105 duration-200">
                            <Download size={22} />
                            Descargar PDF
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
