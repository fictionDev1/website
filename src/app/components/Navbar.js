'use client';

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // Approximate navbar height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="fixed w-full flex justify-center top-4 md:top-10 z-[100] px-2 md:px-0">
            <nav className="w-full md:w-[95%] z-50 bg-[#D9D9D9]/20 backdrop-blur-md rounded-md">
                <div className="mx-auto px-4 md:px-8 py-3 md:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            <Image
                                src="/fiction-icon-logo.png"
                                alt="Fiction AI"
                                height={30}
                                width={120}
                                className="w-24 md:w-32 lg:w-[150px] h-auto"
                            />
                        </button>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-white hover:text-gray-300 transition font-light text-sm xl:text-base"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('short-films')}
                                className="text-white hover:text-gray-300 transition font-light text-sm xl:text-base whitespace-nowrap"
                            >
                                Short films + micro drama
                            </button>
                            <button
                                onClick={() => scrollToSection('tech')}
                                className="text-white hover:text-gray-300 transition font-light text-sm xl:text-base"
                            >
                                Tech
                            </button>
                            <button
                                onClick={() => scrollToSection('use-cases')}
                                className="text-white hover:text-gray-300 transition font-light text-sm xl:text-base"
                            >
                                Use cases
                            </button>
                        </div>

                        {/* Desktop CTA Button */}
                        <button
                            onClick={() => scrollToSection('waitlist')}
                            className="hidden lg:block px-4 xl:px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition text-sm xl:text-base whitespace-nowrap"
                        >
                            Join the wait list
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-white hover:text-gray-300 transition font-light text-left py-2"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('short-films')}
                                className="text-white hover:text-gray-300 transition font-light text-left py-2"
                            >
                                Short films + micro drama
                            </button>
                            <button
                                onClick={() => scrollToSection('tech')}
                                className="text-white hover:text-gray-300 transition font-light text-left py-2"
                            >
                                Tech
                            </button>
                            <button
                                onClick={() => scrollToSection('use-cases')}
                                className="text-white hover:text-gray-300 transition font-light text-left py-2"
                            >
                                Use cases
                            </button>
                            <button
                                onClick={() => scrollToSection('waitlist')}
                                className="mt-2 px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-100 transition text-center"
                            >
                                Join the wait list
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

