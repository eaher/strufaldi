'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
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
            <div className="container max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

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

                {/* PARTE 2: Centro - Menú de Navegación (Oculto en móviles) */}
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

                {/* PARTE 3: Derecha - Logo 2 */}
                <div className="relative h-12 w-24 md:h-14 md:w-32 flex-shrink-0">
                    <Image
                        src="/images/logo-der.png"
                        alt="Logo Derecho"
                        fill
                        className="object-contain object-right"
                        priority
                    />
                </div>

            </div>
        </nav>
    );
}
