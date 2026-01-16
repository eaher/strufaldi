'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formType, setFormType] = useState<'individual' | 'pro'>('pro');
    const [contactMethod, setContactMethod] = useState<'whatsapp' | 'call' | 'mail'>('whatsapp');

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
                            Quiero ser Distribuidor
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
                                placeholder="Apellido"
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

                        {/* Selector de Comunicación (Radio Buttons) */}
                        <div className="space-y-2 pt-2">
                            <label className="text-sm text-gray-500 font-medium ml-1">Quiero que me contacten por:</label>
                            <div className="flex gap-6 px-1">
                                {[
                                    { id: 'whatsapp', label: 'WhatsApp' },
                                    { id: 'call', label: 'Llamada' },
                                    { id: 'mail', label: 'Mail' }
                                ].map((option) => (
                                    <label key={option.id} className="flex items-center gap-2 cursor-pointer group">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                value={option.id}
                                                checked={contactMethod === option.id}
                                                onChange={() => setContactMethod(option.id as any)}
                                                className="peer appearance-none w-5 h-5 border border-gray-300 rounded-full checked:border-strufaldi-red checked:border-4 transition-all cursor-pointer"
                                            />
                                        </div>
                                        <span className={`text-sm font-medium transition-colors ${contactMethod === option.id ? 'text-strufaldi-red' : 'text-gray-600 group-hover:text-gray-800'
                                            }`}>
                                            {option.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

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
