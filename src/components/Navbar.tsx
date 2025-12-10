'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Productos', href: '#products' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Técnica', href: '#technical' },
    { name: 'Dónde Comprar', href: '#where-to-buy' },
    { name: 'Contacto', href: '#contact' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="relative bg-white border-b border-gray-100 py-4 z-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center justify-between relative">
                        {/* Logo */}
                        <div className="text-2xl font-bold tracking-tighter text-strufaldi-charcoal flex items-center gap-2 z-20">
                            <div className="w-8 h-8 bg-strufaldi-red text-white flex items-center justify-center text-sm font-bold">S</div>
                            STRUFALDI
                        </div>

                        {/* Desktop Navigation - Centered Absolutely */}
                        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-strufaldi-charcoal hover:text-strufaldi-red transition-colors uppercase tracking-wide"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button - Z-index to ensure clickable */}
                        <button
                            className="md:hidden p-2 text-strufaldi-charcoal z-20 ml-auto"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white border-b border-gray-100 md:hidden overflow-hidden absolute top-[72px] left-0 right-0 z-40 shadow-lg"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-strufaldi-charcoal hover:text-strufaldi-red transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
