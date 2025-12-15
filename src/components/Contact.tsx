'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formType, setFormType] = useState<'individual' | 'pro'>('pro');

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h4 className="text-strufaldi-red font-bold uppercase tracking-widest mb-2">Contacto</h4>
                    <h2 className="text-4xl text-strufaldi-charcoal font-bold">Hablemos de tu Proyecto</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Selector */}
                    <div className="bg-gray-100 p-1 rounded-none flex mb-8 max-w-md mx-auto">
                        <button
                            type="button"
                            onClick={() => setFormType('pro')}
                            className={`flex-1 py-3 text-sm font-medium rounded-none transition-all duration-200 ${formType === 'pro'
                                ? 'bg-strufaldi-charcoal text-white shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Soy Distribuidor
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormType('individual')}
                            className={`flex-1 py-3 text-sm font-medium rounded-none transition-all duration-200 ${formType === 'individual'
                                ? 'bg-strufaldi-charcoal text-white shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Quiero Comprar
                        </button>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-base transition-all"
                            />
                            <input
                                type="text"
                                placeholder="Apellidos"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-base transition-all"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-base transition-all"
                        />

                        <input
                            type="tel"
                            placeholder="Teléfono"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-base transition-all"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Ciudad"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-base transition-all"
                            />
                            <input
                                type="text"
                                placeholder="Provincia"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-base transition-all"
                            />
                        </div>

                        <textarea
                            rows={4}
                            placeholder="Mensaje"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-base transition-all resize-none"
                        ></textarea>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-strufaldi-red text-white font-bold py-4 rounded-none hover:bg-red-700 transition-colors tracking-widest uppercase shadow-md"
                            >
                                ENVIAR
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
