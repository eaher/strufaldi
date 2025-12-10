'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h4 className="text-strufaldi-red font-bold uppercase tracking-widest mb-2">Contacto</h4>
                    <h2 className="text-4xl text-strufaldi-charcoal font-bold">Hablemos de tu Proyecto</h2>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                placeholder="Nombre Completo"
                                className="w-full border-b border-gray-300 py-4 text-lg focus:outline-none focus:border-strufaldi-red transition-colors placeholder:text-gray-400 bg-transparent"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                placeholder="Correo Electrónico"
                                className="w-full border-b border-gray-300 py-4 text-lg focus:outline-none focus:border-strufaldi-red transition-colors placeholder:text-gray-400 bg-transparent"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="¿En qué podemos ayudarte?"
                            className="w-full border-b border-gray-300 py-4 text-lg focus:outline-none focus:border-strufaldi-red transition-colors placeholder:text-gray-400 resize-none bg-transparent"
                        ></textarea>
                    </div>

                    <div className="pt-8">
                        <button
                            type="submit"
                            className="w-full bg-strufaldi-red text-white font-bold py-5 hover:bg-red-700 transition-colors tracking-wide uppercase text-sm"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
