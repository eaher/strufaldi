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
                <div className="relative h-12 w-32 md:h-14 md:w-40 flex-shrink-0">
                    <Image
                        src="/images/logo-izq.png"
                        alt="Logo Izquierdo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>

                {/* PARTE 2: Centro - Menú de Navegación (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-700 hover:text-black hover:underline underline-offset-4 transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* PARTE 3: Derecha - Logo 2 + Botón Móvil */}
                <div className="flex items-center gap-4">
                    {/* Logo 2 (Visible siempre o ajustado según diseño. En el prompt dice: 'Mantener los logos... visibles') */}
                    <div className="relative h-12 w-30 md:h-14 md:w-40 flex-shrink-0">
                        <Image
                            src="/images/logo-der.png"
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
                <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-2 duration-300">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block text-base font-medium text-gray-800 hover:text-black hover:bg-gray-50 px-4 py-2 rounded-md transition-colors uppercase tracking-wide"
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
