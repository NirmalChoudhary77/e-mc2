"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample rich dataset with categories and varying aspect ratios (Masonry feel)
const photos = [
    {
        id: 1,
        title: "Typhoon HIL Integration",
        category: "Research",
        date: "Oct 2024",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        aspectRatio: "aspect-[4/3]"
    },
    {
        id: 2,
        title: "Harvard University Visit",
        category: "Collaborations",
        date: "Sep 2024",
        image: "https://images.unsplash.com/photo-1559146199-a65c9f5655a6?q=80&w=600&auto=format&fit=crop",
        aspectRatio: "aspect-[3/4]"
    },
    {
        id: 3,
        title: "Robotics Workshop Session",
        category: "Activities",
        date: "Aug 2024",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        aspectRatio: "aspect-video"
    },
    {
        id: 4,
        title: "Lab Soft Launch",
        category: "Activities",
        date: "Jan 2024",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
        aspectRatio: "aspect-square"
    },
    {
        id: 5,
        title: "SLAC Stanford Delegation",
        category: "Collaborations",
        date: "Nov 2023",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop",
        aspectRatio: "aspect-[4/5]"
    },
    {
        id: 6,
        title: "Drone Swarm Flight Test",
        category: "Research",
        date: "Jun 2023",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
        aspectRatio: "aspect-video"
    },
    {
        id: 7,
        title: "Unisannio Visit",
        category: "Collaborations",
        date: "Apr 2023",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
        aspectRatio: "aspect-[3/2]"
    },
    {
        id: 8,
        title: "Late Night Computations",
        category: "Lab Life",
        date: "Continuous",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        aspectRatio: "aspect-square"
    },
];

const categories = ["All", "Research", "Collaborations", "Activities", "Lab Life"];

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    // Filter photos based on selection
    const filteredPhotos = activeFilter === "All"
        ? photos
        : photos.filter(photo => photo.category === activeFilter);

    return (
        <div className="bg-clean-white min-h-screen pb-32">
            {/* Header */}
            <div className="pt-40 pb-16 md:pt-56 md:pb-24 relative bg-dot-matrix">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-vjti-red mb-8 tracking-tighter">
                        Gallery
                    </h1>
                    <p className="text-2xl max-w-3xl font-medium text-vjti-red/80 leading-snug">
                        A visual journey through the history, international collaborations, and daily life at the E-MC² Lab.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 max-w-7xl">

                {/* 
                    Filter Bar 
                    Sticky pill-shaped navigation for categories
                */}
                <div className="sticky top-28 z-40 mb-12 flex flex-wrap gap-3 p-2 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full shadow-lg w-fit">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 ${activeFilter === cat
                                ? "bg-vjti-red text-white shadow-md shadow-vjti-red/20"
                                : "bg-transparent text-vjti-red/60 hover:text-vjti-red hover:bg-vjti-red/5"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 
                    Interactive Masonry Grid
                    Uses CSS columns for a true masonry stagger, wrapped in AnimatePresence
                */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 md:space-y-6 pb-20 group/gallery">
                    <AnimatePresence mode="popLayout">
                        {filteredPhotos.map((photo) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                                transition={{
                                    opacity: { duration: 0.4 },
                                    layout: { type: "spring", bounce: 0.2, duration: 0.6 }
                                }}
                                key={photo.id}
                                className="break-inside-avoid relative overflow-hidden rounded-3xl shadow-cse cursor-pointer group/card border border-black/5"
                            >
                                <div className={`relative w-full ${photo.aspectRatio} overflow-hidden bg-vjti-red/5`}>
                                    <Image
                                        src={photo.image}
                                        alt={photo.title}
                                        fill
                                        className="object-cover transition-all duration-700 ease-out group-hover/card:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    {/* Vignette Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-out" />

                                    {/* Sliding Data Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-3 py-1 bg-vjti-accent text-vjti-red text-[10px] font-black uppercase tracking-widest rounded-full">
                                                {photo.category}
                                            </span>
                                            <span className="text-white/80 text-xs font-bold tracking-wider">
                                                {photo.date}
                                            </span>
                                        </div>
                                        <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-tight">
                                            {photo.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}
