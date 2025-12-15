'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const [formType, setFormType] = useState<'individual' | 'pro'>('pro');

    return (
        <section id="hero" className="flex flex-col relative">


            {/* Hero Container */}
            <div className="relative w-full bg-gray-100 lg:h-[900px] flex flex-col lg:block">

                {/* Background Image */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:absolute lg:inset-0 lg:h-full z-0">
                    <Image
                        src="/images/hero.webp"
                        alt="Piscina Strufaldi"
                        fill
                        className="object-cover -z-10"
                        priority
                    />
                    {/* Optional overlay for contrast */}
                    <div className="absolute inset-0 bg-black/10 z-0"></div>
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
                                    Soy Distribuidor
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
                                {/* Row 3: Teléfono (Full Width) */}
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                />

                                {/* Row 4: Población (50%) | Provincia (50%) */}
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        placeholder="Ciudad"
                                        className="w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Provincia"
                                        className="w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all"
                                    />
                                </div>



                                {/* Row 6: Mensaje (Textarea) */}
                                <textarea
                                    rows={3}
                                    placeholder="Mensaje"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-none focus:border-strufaldi-red focus:ring-1 focus:ring-strufaldi-red focus:outline-none placeholder:text-gray-400 text-sm transition-all resize-none"
                                ></textarea>



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
