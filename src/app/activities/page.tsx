"use client";

import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ActivitiesPage() {
    const activities = [
        {
            id: 1,
            title: "Robotics Workshop",
            date: "Recent Event",
            location: "E-MC² Lab, VJTI",
            description: "Hands-on collaborative session focusing on practical implementation of kinematic modelling and sensor fusion for autonomous mobile robots.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Guest Lecture by Prof. S. D. V.",
            date: "Recent Event",
            location: "VJTI Main Auditorium",
            description: "An intensive masterclass on advanced computational methods and their intersection with classical control theories in modern grid applications.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "SLAC National Accelerator Laboratory Visit",
            date: "International Collaboration",
            location: "Stanford University, USA",
            description: "Delegation representing E-MC² Lab at the prestigious Stanford SLAC facility to explore high-energy physics applications and grid topology research.",
            image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-clean-white min-h-screen pb-32">
            {/* Header */}
            <div className="pt-40 pb-16 md:pt-56 md:pb-24 relative bg-dot-matrix">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-vjti-red mb-8 tracking-tighter">
                        Activities
                    </h1>
                    <p className="text-2xl max-w-3xl font-medium text-vjti-red/80 leading-snug">
                        Events, workshops, and international outreach programs hosted and attended by our research cohort.
                    </p>
                </div>
            </div>

            {/* Activities Timeline Feed */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-5xl">
                {/* Vertical Timeline Container */}
                <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-vjti-red/20 before:via-vjti-red/20 before:to-transparent">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center bg-white border border-black/5 rounded-[3rem] p-6 shadow-cse hover:shadow-2xl transition-all duration-500 mb-16 relative z-10`}
                        >
                            {/* Image Part */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-video md:aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-vjti-red/5">
                                    <Image
                                        src={activity.image}
                                        alt={activity.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Text Part */}
                            <div className="w-full md:w-1/2 px-4 md:px-8 pb-6 md:pb-0">
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-vjti-red mb-6 tracking-tight leading-tight group-hover:text-vjti-accent transition-colors">
                                            {activity.title}
                                        </h2>
                                        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-vjti-red/60 uppercase tracking-widest mb-6 border-b border-vjti-red/10 pb-4">
                                            <div className="flex items-center gap-2">
                                                <CalendarDays className="w-4 h-4 text-vjti-accent" />
                                                <span>{activity.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{activity.location}</span>
                                            </div>
                                        </div>
                                        <p className="text-lg font-medium text-vjti-red/80 leading-relaxed">
                                            {activity.description}
                                        </p>
                                    </div>
                                    <div>
                                        <button className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-vjti-red text-vjti-red font-bold tracking-wider uppercase text-xs hover:bg-vjti-red hover:text-white transition-colors">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
