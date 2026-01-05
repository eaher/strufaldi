'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Contenedor Principal: Mobile First (Flex Column Centered) -> Desktop (Grid Left Aligned) */}
                <div className="flex flex-col items-center text-center gap-12 mb-16 md:grid md:grid-cols-2 lg:grid-cols-4 md:text-left md:items-start md:justify-items-start">

                    {/* Brand */}
                    <div className="space-y-6 flex flex-col items-center md:items-start w-full">
                        <h2 className="text-3xl font-bold tracking-tighter">STRUFALDI</h2>
                        <p className="text-neutral-400 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                            Líderes en cerámica técnica de alta resistencia para la industria y arquitectura moderna.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-strufaldi-red transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-strufaldi-red transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-strufaldi-red transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full">
                        <h3 className="text-lg font-bold mb-6">Explorar</h3>
                        <ul className="space-y-4 text-neutral-400 flex flex-col items-center md:items-start">
                            <li><Link href="#products" className="py-2 block hover:text-white transition-colors">Productos</Link></li>
                            <li><Link href="#about" className="py-2 block hover:text-white transition-colors">Nosotros</Link></li>
                            <li><Link href="#technical" className="py-2 block hover:text-white transition-colors">Área Técnica</Link></li>
                            <li><Link href="#projects" className="py-2 block hover:text-white transition-colors">Proyectos</Link></li>
                        </ul>
                    </div>

                    {/* Legal / More */}
                    <div className="w-full">
                        <h3 className="text-lg font-bold mb-6">Empresa</h3>
                        <ul className="space-y-4 text-neutral-400 flex flex-col items-center md:items-start">
                            <li><Link href="#" className="py-2 block hover:text-white transition-colors">Distribuidores</Link></li>
                            <li><Link href="#" className="py-2 block hover:text-white transition-colors">Trabaja con nosotros</Link></li>
                            <li><Link href="#" className="py-2 block hover:text-white transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="#" className="py-2 block hover:text-white transition-colors">Términos y Condiciones</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Centrado en móvil con iconos arriba del texto o alineados */}
                    <div className="w-full">
                        <h3 className="text-lg font-bold mb-6">Contacto</h3>
                        <ul className="space-y-6 text-neutral-400 flex flex-col items-center md:items-start">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                                <MapPin className="shrink-0 text-strufaldi-red mt-1" size={24} />
                                <span>Av. Industrial 1234,<br />Buenos Aires, Argentina</span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                                <Phone className="shrink-0 text-strufaldi-red mt-1" size={24} />
                                <span>+54 11 1234 5678</span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
                                <Mail className="shrink-0 text-strufaldi-red mt-1" size={24} />
                                <span>info@strufaldi.com.ar</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} Strufaldi. Todos los derechos reservados.</p>
                    <p className="mt-4 md:mt-0">Design by Antigravity</p>
                </div>
            </div>
        </footer>
    );
}
