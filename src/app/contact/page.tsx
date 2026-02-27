"use client";

import { Mail, MapPin, Phone, Clock, ArrowRight, Rss } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="bg-clean-white min-h-screen pb-32">
            {/* Header */}
            <div className="pt-40 pb-20 md:pt-56 md:pb-28 relative bg-vjti-red overflow-hidden border-b-8 border-vjti-accent">
                <div className="absolute inset-0 bg-dot-matrix-white opacity-20 pointer-events-none mix-blend-overlay"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
                    >
                        Connect with <span className="text-vjti-accent">E-MC²</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl max-w-3xl font-medium text-white/90 leading-snug"
                    >
                        Whether you're looking to collaborate on research, explore our facilities, or inquire about open positions, we want to hear from you.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 max-w-7xl">

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column: Contact Methods & Map */}
                    <div className="w-full lg:w-5/12 space-y-8">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-black/5"
                        >
                            <h2 className="text-3xl font-black text-vjti-red tracking-tight mb-8 drop-shadow-sm">Reach Out</h2>

                            <div className="space-y-8">
                                <div className="flex gap-5 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-2xl bg-vjti-red/5 text-vjti-red flex items-center justify-center shrink-0 group-hover:bg-vjti-accent group-hover:text-white transition-all shadow-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-vjti-red/50 mb-1">Email Us</p>
                                        <a href="mailto:contact@emcc.in" className="text-xl font-bold text-vjti-red group-hover:text-vjti-accent transition-colors">contact@emcc.in</a>
                                        <p className="text-vjti-red/70 font-medium text-sm mt-1">For general inquiries and research proposals.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-vjti-red/5 text-vjti-red flex items-center justify-center shrink-0 shadow-sm">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-vjti-red/50 mb-1">Visit Us</p>
                                        <p className="text-xl font-bold text-vjti-red leading-tight">
                                            E-MC² Lab, <br />
                                            Department of Electrical Engineering, <br />
                                            VJTI Campus, Matunga, <br />
                                            Mumbai, Maharashtra 400019
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-vjti-red/5 text-vjti-red flex items-center justify-center shrink-0 shadow-sm">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-vjti-red/50 mb-1">Lab Hours</p>
                                        <p className="text-xl font-bold text-vjti-red">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-vjti-red/70 font-medium text-sm mt-1">Closed on Institutional Holidays</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Interactive Visual Map Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-vjti-red/5 rounded-[2.5rem] p-4 relative overflow-hidden h-[300px] border border-black/5 shadow-inner group"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
                                alt="VJTI Campus Map Abstract"
                                fill
                                className="object-cover opacity-60 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-vjti-red/80 to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2 pl-6 shadow-xl">
                                <span className="text-white font-bold tracking-widest uppercase text-sm drop-shadow-md">Get Directions</span>
                                <a href="https://maps.google.com/?q=VJTI+Matunga+Mumbai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-vjti-red hover:bg-vjti-accent hover:text-white transition-colors">
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column: Premium Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full lg:w-7/12 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-black/5 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-3 h-3 rounded-full bg-vjti-accent animate-pulse"></div>
                                <span className="text-vjti-accent font-bold uppercase tracking-widest text-sm">Now Accepting Inquiries</span>
                            </div>

                            <h2 className="text-4xl font-black text-vjti-red mb-10 tracking-tight drop-shadow-sm">Send a Message</h2>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="name" className="block text-sm font-bold text-vjti-red/60 uppercase tracking-widest pl-4">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-vjti-red/5 border-2 border-transparent focus:border-vjti-accent rounded-2xl px-6 py-4 outline-none transition-all text-vjti-red font-bold text-lg placeholder-vjti-red/30 shadow-inner"
                                            placeholder="Dr. Alan Turing"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="email" className="block text-sm font-bold text-vjti-red/60 uppercase tracking-widest pl-4">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-vjti-red/5 border-2 border-transparent focus:border-vjti-accent rounded-2xl px-6 py-4 outline-none transition-all text-vjti-red font-bold text-lg placeholder-vjti-red/30 shadow-inner"
                                            placeholder="turing@institute.edu"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="subject" className="block text-sm font-bold text-vjti-red/60 uppercase tracking-widest pl-4">Inquiry Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full bg-vjti-red/5 border-2 border-transparent focus:border-vjti-accent rounded-2xl px-6 py-4 outline-none transition-all text-vjti-red font-bold text-lg appearance-none cursor-pointer shadow-inner"
                                    >
                                        <option>Research Collaboration</option>
                                        <option>Post-Doc / Ph.D. Application</option>
                                        <option>Hardware/Facilities Inquiry</option>
                                        <option>General Information</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="message" className="block text-sm font-bold text-vjti-red/60 uppercase tracking-widest pl-4">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full bg-vjti-red/5 border-2 border-transparent focus:border-vjti-accent rounded-3xl px-6 py-6 outline-none transition-all text-vjti-red font-bold text-lg placeholder-vjti-red/30 resize-none shadow-inner leading-relaxed"
                                        placeholder="How can we help you advance the field?"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-full group relative flex items-center justify-center gap-3 px-8 py-5 bg-vjti-red text-white rounded-full font-black text-lg tracking-widest uppercase hover:bg-vjti-accent transition-all shadow-xl hover:shadow-2xl overflow-hidden"
                                >
                                    <span className="relative z-10">Transmit Message</span>
                                    <Rss className="w-5 h-5 relative z-10 group-hover:scale-125 transition-transform" />

                                    {/* Animated background flare */}
                                    <div className="absolute inset-0 -translate-x-full bg-white/20 group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
