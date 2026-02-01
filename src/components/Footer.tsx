'use client';

import { Facebook, Instagram, Linkedin, Mail, Phone, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Contenedor Principal: Mobile First (Flex Column Centered) -> Desktop (Grid Left Aligned) */}
                <div className="flex flex-col items-center text-center gap-12 mb-16 md:grid md:grid-cols-2 lg:grid-cols-3 md:text-left md:items-start md:justify-items-start">

                    {/* Brand */}
                    <div className="space-y-6 flex flex-col items-center md:items-start w-full">
                        <div className="relative h-16 w-48">
                            <Image
                                src="/images/logo-izq.png"
                                alt="Ceracor Logo"
                                fill
                                className="object-contain object-center md:object-left"
                            />
                        </div>
                        <p className="text-neutral-400 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                            Empresa de distribución de pisos y revestimientos europeos y latinoamericanos.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="https://www.instagram.com/ceracor.ok" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-strufaldi-red transition-colors" aria-label="Instagram">
                                <Instagram size={20} className="text-white" />
                            </a>
                            <a href="https://www.facebook.com/ceracor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-strufaldi-red transition-colors" aria-label="Facebook">
                                <Facebook size={20} className="text-white" />
                            </a>
                            <a href="https://ar.linkedin.com/company/ceracor-sa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-strufaldi-red transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white uppercase tracking-wider">Explorar</h4>
                        <ul className="space-y-2">
                            <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Productos</a></li>
                            <li><a href="#inspiration" className="text-gray-400 hover:text-white transition-colors">Inspiración</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="w-full">
                        <h3 className="text-lg font-bold mb-6">Contacto</h3>
                        <ul className="space-y-6 text-neutral-400 flex flex-col items-center md:items-start">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                                <Globe className="shrink-0 text-white mt-1" size={24} />
                                <a href="https://ceracor.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ceracor.com.ar</a>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                                <Phone className="shrink-0 text-white mt-1" size={24} />
                                <span>+54 9 3517 50-8482</span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                                <Mail className="shrink-0 text-white mt-1" size={24} />
                                <span>ventas@ceracor.com.ar</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} Ceracor. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
