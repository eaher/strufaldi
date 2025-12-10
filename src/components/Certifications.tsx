'use client';

import { CheckCircle, ShieldCheck, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
    return (
        <section id="technical" className="py-20 bg-strufaldi-charcoal text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* ISO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 text-strufaldi-red">
                            <CheckCircle size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Norma ISO 9001</h3>
                        <p className="text-white/60">
                            Garantía de calidad en todos nuestros procesos productivos, certificados internacionalmente.
                        </p>
                    </motion.div>

                    {/* Resistencia */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 text-strufaldi-red">
                            <ShieldCheck size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Alta Resistencia</h3>
                        <p className="text-white/60">
                            Productos diseñados para resistir ácidos, abrasión y alto tránsito sin desgaste prematuro.
                        </p>
                    </motion.div>

                    {/* Catalogo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 text-strufaldi-red">
                            <Download size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-6">Catálogo 2025</h3>
                        <button className="bg-strufaldi-red hover:bg-red-700 text-white py-3 px-8 rounded-full font-bold transition-colors flex items-center gap-2 shadow-lg hover:shadow-red-900/20">
                            <Download size={20} />
                            Descargar PDF
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
