'use client';

import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhereToBuy() {
    return (
        <section id="where-to-buy" className="py-24 bg-strufaldi-gray">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-strufaldi-red mx-auto mb-8 shadow-xl">
                        <MapPin size={40} />
                    </div>

                    <h2 className="text-4xl font-bold text-strufaldi-charcoal mb-6">
                        ¿Dónde Comprar?
                    </h2>
                    <p className="text-gray-600 text-lg mb-10">
                        Contamos con una amplia red de distribuidores en todo el país. Encuentra el punto de venta más cercano a tu ubicación.
                    </p>

                    <button className="bg-strufaldi-charcoal text-white hover:bg-strufaldi-red px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Encuentra tu distribuidor
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
