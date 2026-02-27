"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Research", href: "/research" },
    { name: "Publications", href: "/publications" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Activities", href: "/activities" },
    { name: "Team", href: "/people" },
    { name: "Careers", href: "/careers" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isDarkBg = pathname === '/contact' && !scrolled;

    return (
        <nav
            className={cn(
                "fixed top-0 z-[60] w-full transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-gray-100" : "bg-white/95 backdrop-blur-sm sm:bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo area */}
                    <div className="flex items-center relative z-20">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="grid grid-cols-3 gap-1 w-8 h-8">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "rounded-full transition-colors duration-300",
                                            i === 4 || i === 8 || i === 0 ? "bg-vjti-accent" : (isDarkBg ? "bg-white" : "bg-vjti-red")
                                        )}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <span className={cn(
                                    "font-bold leading-none tracking-tight text-xl sm:text-2xl transition-all duration-300",
                                    isDarkBg ? "text-white" : "text-vjti-red"
                                )}>
                                    E-MC² Lab
                                </span>
                                <span className={cn(
                                    "text-xs font-medium tracking-wide transition-all duration-300",
                                    isDarkBg ? "text-white/80" : "text-vjti-red/70"
                                )}>
                                    VJTI Mumbai
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 relative z-20">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-2 py-2 text-sm font-bold uppercase tracking-wider transition-colors"
                                >
                                    <span className={cn(
                                        "relative z-10 transition-colors",
                                        isActive
                                            ? (isDarkBg ? "text-white" : "text-vjti-red")
                                            : (isDarkBg ? "text-white/70 hover:text-white" : "text-vjti-red/70 hover:text-vjti-red")
                                    )}>
                                        {link.name}
                                    </span>

                                    {/* Hover / Active Indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className={cn(
                                                "absolute inset-0 border-b-2 rounded-t-md",
                                                isDarkBg ? "bg-white/10 border-white" : "bg-vjti-red/5 border-vjti-red"
                                            )}
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}

                        {/* Contact CTA Button on Desktop */}
                        <Link
                            href="/contact"
                            className={cn(
                                "ml-4 px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all shadow-sm",
                                isDarkBg
                                    ? "bg-white text-vjti-red hover:bg-vjti-accent hover:text-white"
                                    : "bg-vjti-red text-white hover:bg-vjti-accent"
                            )}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "lg:hidden relative z-20 p-2 rounded-lg transition-colors",
                            isDarkBg ? "text-white hover:bg-white/10" : "text-vjti-red hover:bg-vjti-red/5"
                        )}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden z-10"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-3 rounded-xl font-bold uppercase tracking-wide text-sm transition-colors",
                                        pathname === link.href
                                            ? "bg-vjti-red/5 text-vjti-red border-l-4 border-vjti-red"
                                            : "text-vjti-red/70 border-l-4 border-transparent hover:bg-vjti-red/5 hover:text-vjti-red"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
