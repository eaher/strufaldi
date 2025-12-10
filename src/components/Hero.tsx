'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const [formType, setFormType] = useState<'individual' | 'pro'>('pro');

    return (
        <section id="hero" className="flex flex-col relative">
            {/* Title Strip */}
            <div className="bg-white border-b border-gray-100 py-6 md:py-8 lg:py-10 z-30 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black tracking-tight">
                        Ideas para diseñar tu piscina de gres porcelánico
                    </h1>
                </div>
            </div>

            {/* Hero Container */}
            <div className="relative w-full bg-gray-100 lg:h-[900px] flex flex-col lg:block">

                {/* Background Image */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:absolute lg:inset-0 lg:h-full z-0">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-neutral-500 bg-neutral-300 bg-[url('/placeholder-pool.jpg')] bg-cover bg-center">
                        <span className="sr-only">Imagen de piscina</span>
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>

                {/* Contact Card Positioning Wrapper - Positioned relative to the viewport/full-width Hero container */}
                <div className="relative z-20 w-full lg:h-full pointer-events-auto lg:pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="pointer-events-auto w-full lg:max-w-[450px] mx-auto bg-white shadow-2xl rounded-none overflow-hidden
                         lg:absolute lg:right-[20px] lg:top-0 my-0 lg:my-0 lg:mx-0"
                    >
                        {/* A. Card Header - Red Strip */}
                        <div className="bg-strufaldi-red py-4 px-6">
                            <h2 className="text-white font-bold text-center text-lg tracking-wider uppercase">
                                CONTACTA CON NOSOTROS
                            </h2>
                        </div>

                        <div className="p-6">
                            {/* B. The Selector - Modern Segmented Control */}
                            <div className="bg-gray-100 p-1 rounded-none flex mb-6">
                                <button
                                    type="button"
                                    onClick={() => setFormType('pro')}
                                    className={`flex-1 py-2 text-sm font-medium rounded-none transition-all duration-200 ${formType === 'pro'
                                        ? 'bg-strufaldi-charcoal text-white shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Soy Constructor
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormType('individual')}
                                    className={`flex-1 py-2 text-sm font-medium rounded-none transition-all duration-200 ${formType === 'individual'
                                        ? 'bg-strufaldi-charcoal text-white shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    Quiero Comprar
                                </button>
                            </div>

                            {/* C. Form Fields - Compact Grid */}
                            <form className="space-y-3">
                                {/* Row 1: Nombre (50%) | Apellidos (50%) */}
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        className="w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Apellidos"
                                        className="w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                    />
                                </div>

                                {/* Row 2: Email (100%) */}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                />

                                {/* Row 3: Teléfono (60%) | CP (40%) */}
                                <div className="flex gap-3">
                                    <input
                                        type="tel"
                                        placeholder="Teléfono"
                                        className="w-[60%] px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                    />
                                    <input
                                        type="text"
                                        placeholder="CP"
                                        className="w-[40%] px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                    />
                                </div>

                                {/* Row 4: Población (50%) | Provincia (50%) */}
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        placeholder="Población"
                                        className="w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Provincia"
                                        className="w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                    />
                                </div>

                                {/* Row 5: País (100%) */}
                                <input
                                    type="text"
                                    placeholder="País"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                />

                                {/* Row 6: Mensaje (Textarea) */}
                                <textarea
                                    rows={3}
                                    placeholder="Mensaje"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all resize-none"
                                ></textarea>

                                {/* D. Legal & Submit */}
                                <div className="space-y-2 pt-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            id="contact-phone"
                                            name="contact-preference"
                                            className="w-4 h-4 text-strufaldi-red focus:ring-strufaldi-red accent-strufaldi-red"
                                        />
                                        <label htmlFor="contact-phone" className="text-xs text-gray-600 cursor-pointer">
                                            Sí, prefiero contacto telefónico
                                        </label>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            required
                                            className="mt-0.5 w-4 h-4 text-strufaldi-red border-gray-300 rounded-none focus:ring-strufaldi-red accent-strufaldi-red"
                                        />
                                        <label htmlFor="privacy" className="text-xs text-gray-500 leading-tight cursor-pointer">
                                            Acepto <a href="#" className="underline hover:text-strufaldi-red">política de privacidad</a>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-strufaldi-red text-white font-bold py-3 mt-2 rounded-none uppercase tracking-widest hover:bg-red-700 transition-colors shadow-md text-sm"
                                >
                                    ENVIAR
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
