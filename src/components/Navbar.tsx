'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Productos', href: '#products' },
        { name: 'Inspiración', href: '#inspiration' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Técnica', href: '#certifications' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        // Contenedor principal: ancho completo, fondo blanco, sombra
        <nav className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-white shadow-sm">

            {/* Contenedor interno: centrado y ancho limitado para alineación con el resto de la web */}
            <div className="container max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative">

                {/* PARTE 1: Izquierda - Logo 1 */}
                <div className="relative h-8 w-24 md:h-12 md:w-36 flex-shrink-0">
                    <Image
                        src="/images/logo-izq.png"
                        alt="Logo Izquierdo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>

                {/* PARTE 2: Centro - Menú de Navegación (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-700 hover:text-black hover:underline underline-offset-4 transition-colors uppercase tracking-wide whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* PARTE 3: Derecha - Logo 2 + Botón Móvil */}
                <div className="flex items-center gap-4">
                    {/* Logo 2 (Visible siempre o ajustado según diseño. En el prompt dice: 'Mantener los logos... visibles') */}
                    <div className="relative h-10 w-36 md:h-20 md:w-80 flex-shrink-0">
                        <Image
                            src="/images/logo-der-v2.png"
                            alt="Logo Derecho"
                            fill
                            className="object-contain object-right"
                            priority
                        />
                    </div>

                    {/* Botón Hamburguesa (Móvil) */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MENÚ MÓVIL (Overlay) */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-2 duration-300 items-center">
                    <ul className="flex flex-col gap-4 w-full items-center">
                        {navLinks.map((link) => (
                            <li key={link.name} className="w-full text-center">
                                <Link
                                    href={link.href}
                                    className="block text-base font-medium text-gray-800 hover:text-black hover:bg-gray-50 py-2 rounded-md transition-colors uppercase tracking-wide"
                                    onClick={() => setIsMenuOpen(false)} // Cerrar menú al hacer clic
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
