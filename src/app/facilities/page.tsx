"use client";

import Image from "next/image";
import { Cpu, Monitor, Zap, Server, Activity, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FacilitiesPage() {

    const hardware = [
        {
            title: "Typhoon HIL",
            type: "Real-time Simulator",
            desc: "Ultra-high fidelity testing tools for optimizing power electronics and microgrids under various conditions.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
            icon: <Activity className="w-5 h-5" />,
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2", // Large Bento block
            rowSpan: "row-span-2"
        },
        {
            title: "dSPACE 1104",
            type: "Control Prototyping",
            desc: "Rapid control prototyping system for high-performance HIL testing.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
            icon: <Cpu className="w-5 h-5" />,
            colSpan: "col-span-1 lg:col-span-1",
            rowSpan: "row-span-1"
        },
        {
            title: "OPAL-RT 4500",
            type: "HIL Simulator",
            desc: "Delivers fast, accurate simulations with versatile physical device integration.",
            image: "https://images.unsplash.com/photo-1597838816882-443e4dc6f616?q=80&w=800&auto=format&fit=crop",
            icon: <Zap className="w-5 h-5" />,
            colSpan: "col-span-1 lg:col-span-1",
            rowSpan: "row-span-1"
        },
        {
            title: "HPE ProLiant",
            type: "Compute Node",
            desc: "Enterprise-grade server infrastructure designed for extreme reliability.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
            icon: <Server className="w-5 h-5" />,
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2", // Wide Bento Block
            rowSpan: "row-span-1"
        },
        {
            title: "NVIDIA Jetson",
            type: "Edge AI",
            desc: "AI development board enabling efficient deployment of computer vision.",
            image: "https://images.unsplash.com/photo-1591405351990-4726e331f264?q=80&w=800&auto=format&fit=crop",
            icon: <Cpu className="w-5 h-5" />,
            colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
            rowSpan: "row-span-1"
        },
        {
            title: "Embedded Arsenal",
            type: "IoT & Microcontrollers",
            desc: "Banks of STM32 ARM Cortex-M, Arduino Nanos, and Raspberry Pis.",
            image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop",
            icon: <Cpu className="w-5 h-5" />,
            colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
            rowSpan: "row-span-1"
        }
    ];

    const softwareSteps = [
        "MATLAB & Simulink",
        "PSCAD",
        "ETAP",
        "ANSYS",
        "LabVIEW",
        "DigSILENT",
        "Python Data Stack",
        "ROS2"
    ];

    return (
        <div className="bg-clean-white min-h-screen pb-32">
            {/* Header */}
            <div className="pt-40 pb-16 md:pt-56 md:pb-24 relative bg-dot-matrix">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-vjti-red mb-8 tracking-tighter">
                        Facilities
                    </h1>
                    <p className="text-2xl max-w-3xl font-medium text-vjti-red/80 leading-snug">
                        Equipped with industry-standard hardware, software, and simulation environments for cutting-edge power systems research.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 max-w-7xl space-y-32">

                {/* Hardware Bento Grid */}
                <section>
                    <div className="flex items-center justify-between mb-12 bg-vjti-red p-6 md:p-8 rounded-[2rem] shadow-xl border border-black/5">
                        <div className="flex items-center gap-5">
                            <div className="p-4 bg-white/20 text-white rounded-2xl border border-white/20 backdrop-blur-sm">
                                <Server className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Hardware Frameworks</h2>
                                <p className="text-white/80 font-medium">Bespoke testing and prototyping architecture</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
                        {hardware.map((item, idx) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={item.title}
                                className={`relative rounded-[2.5rem] overflow-hidden group shadow-cse hover:shadow-2xl transition-all duration-700 bg-black ${item.colSpan} ${item.rowSpan}`}
                            >
                                {/* Background Image */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-vjti-red/90 group-hover:via-vjti-red/80 transition-colors duration-500"></div>

                                {/* Persistent Title & Badge */}
                                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white">
                                            {item.icon}
                                        </span>
                                        <span className="text-white/90 text-xs font-black tracking-widest uppercase">
                                            {item.type}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white tracking-tight drop-shadow-lg group-hover:-translate-y-4 transition-transform duration-500">
                                        {item.title}
                                    </h3>

                                    {/* Hover Details overlay */}
                                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden transform group-hover:-translate-y-4">
                                        <p className="text-white/90 font-medium leading-relaxed max-w-md border-l-2 border-vjti-accent pl-4 mt-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Software Interactive Ecosystem */}
                <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-black/5 overflow-hidden relative">
                    {/* Decorative Background glowing orbs */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-vjti-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-vjti-red/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/3">
                            <div className="inline-flex items-center justify-center p-4 bg-vjti-red/5 text-vjti-red rounded-2xl mb-6 border border-vjti-red/10">
                                <Monitor className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-vjti-red tracking-tight mb-6 mt-2">
                                Software <br /><span className="text-vjti-accent text-transparent bg-clip-text bg-gradient-to-r from-vjti-red to-vjti-accent">Ecosystem</span>
                            </h2>
                            <p className="text-xl text-vjti-red/70 font-medium leading-relaxed mb-8">
                                A holistic suite of industry-standard computational software for modeling, analytics, and high-fidelity mathematical simulations.
                            </p>
                        </div>

                        {/* Interactive Staggered Software Grid */}
                        <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {softwareSteps.map((sw, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    key={sw}
                                    className="group flex flex-col justify-between p-6 bg-[#f8f9fa] border-2 border-transparent hover:border-vjti-accent rounded-[2rem] hover:shadow-xl transition-all duration-300 cursor-pointer h-32"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="w-2 h-2 rounded-full bg-vjti-red/30 group-hover:bg-vjti-accent transition-colors"></div>
                                        <ChevronRight className="w-5 h-5 text-vjti-red/20 group-hover:text-vjti-accent group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <div className="font-bold text-vjti-red text-lg md:text-xl tracking-tight leading-tight group-hover:text-vjti-accent transition-colors">
                                        {sw}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
