'use client';

import { CheckCircle, ShieldCheck, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Certifications() {
    const icons = [
        '/images/icons/ICONOS STRUFALDI-02.png',
        '/images/icons/ICONOS STRUFALDI-03.png',
        '/images/icons/ICONOS STRUFALDI-04.png',
        '/images/icons/ICONOS STRUFALDI-07.png',
    ];

    return (
        <section id="technical" className="py-8 sm:py-10 md:py-12 bg-neutral-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* Icons Row - Responsive grid that becomes horizontal on larger screens */}
                <motion.div
                    className="grid grid-cols-2 sm:flex sm:justify-center sm:items-center gap-4 sm:gap-10 md:gap-16 lg:gap-20 mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {icons.map((iconPath, i) => (
                        <motion.div
                            key={i}
                            className="group flex justify-center"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 transition-all duration-300 group-hover:scale-110">
                                <Image
                                    src={iconPath}
                                    alt={`Certificación ${i + 1}`}
                                    fill
                                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-6 sm:mb-8" />

                {/* Catalog Section - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-2"
                >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Catálogo Técnico</h3>
                    <p className="text-white/70 mb-5 sm:mb-6 text-base sm:text-lg leading-relaxed max-w-xl">
                        Descarga nuestro catálogo completo para ver todas las especificaciones técnicas y modelos disponibles.
                    </p>
                    <button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/catalogo/CATALOGO - STRUFALDI.pdf';
                            link.download = 'CATALOGO - STRUFALDI.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        className="bg-strufaldi-red hover:bg-red-700 text-white py-3 sm:py-4 px-8 sm:px-12 rounded-full font-bold transition-all flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-red-900/50 transform hover:scale-105 duration-200 text-sm sm:text-base"
                    >
                        <Download size={20} className="sm:w-6 sm:h-6" />
                        Descargar PDF
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
