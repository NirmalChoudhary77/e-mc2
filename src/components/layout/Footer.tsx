import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-vjti-red py-20 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-dot-matrix-white z-0 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Col */}
                    <div className="lg:col-span-2">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="grid grid-cols-3 gap-1 w-6 h-6">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="rounded-full bg-white opacity-80" />
                                ))}
                            </div>
                            <span className="text-white font-bold text-2xl tracking-tight">E-MC² Lab</span>
                        </div>
                        <p className="text-white/80 text-lg max-w-sm mb-8 leading-relaxed">
                            Electrical: Modelling, Computation, and Control. Advancing the frontiers of autonomous systems and intelligent power grids.
                        </p>
                        <div className="text-white/60 text-sm">
                            <p>Veermata Jijabai Technological Institute (VJTI)</p>
                            <p>Matunga, Mumbai, Maharashtra 400019</p>
                        </div>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h3 className="text-vjti-accent font-bold tracking-widest uppercase text-sm mb-6">Explore</h3>
                        <ul className="space-y-4">
                            {['Research Themes', 'Publications', 'Our Team', 'Facilities', 'Gallery', 'Activities', 'Careers'].map((item) => {
                                const href = item === 'Our Team' ? '/people' : `/${item.toLowerCase().split(' ')[0]}`;
                                return (
                                    <li key={item}>
                                        <Link
                                            href={href}
                                            className="group inline-flex items-center text-white/90 hover:text-white text-lg font-medium transition-colors"
                                        >
                                            {item}
                                            <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-cyan" />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h3 className="text-vjti-accent font-bold tracking-widest uppercase text-sm mb-6">Connect</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/contact" className="group inline-flex items-center text-white/90 hover:text-white text-lg font-medium transition-colors">
                                    Contact Us
                                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-cyan" />
                                </Link>
                            </li>
                            <li>
                                <a href="https://vjti.ac.in" target="_blank" rel="noreferrer" className="group inline-flex items-center text-white/90 hover:text-white text-lg font-medium transition-colors">
                                    VJTI Main Website
                                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-100 text-white/40 group-hover:text-cyan transition-colors" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm font-medium">
                        &copy; {new Date().getFullYear()} E-MC² Lab, VJTI
                    </p>
                    <div className="flex gap-6 text-sm text-white/50">
                        <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
