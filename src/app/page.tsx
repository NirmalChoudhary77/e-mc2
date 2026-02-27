"use client";

import { Hero3D } from "@/components/home/Hero3D";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-clean-white min-h-screen">

      {/* 
        HERO SECTION
        Asymmetrical split layout: 
        Left = Typography & CTA on Dot Matrix 
        Right = Hero3D visualization rounded container 
      */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 w-full overflow-hidden">
        <div className="absolute inset-0 bg-dot-matrix z-0 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="w-full lg:w-5/12 max-w-2xl lg:max-w-none">
              <h1 className="text-[3.5rem] leading-[1.05] md:text-6xl lg:text-7xl font-bold text-vjti-red mb-6 tracking-tight">
                Electrical: Modelling, Computation, and Control.
              </h1>
              <p className="text-xl text-vjti-red/80 mb-10 max-w-xl font-medium">
                A state-of-the-art facility at VJTI bridging the gap between theoretical physics and real-world autonomous systems.
              </p>

              <Link
                href="/research"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-vjti-accent text-white rounded-full font-bold text-lg hover:bg-vjti-red transition-colors shadow-lg hover:shadow-xl"
              >
                Our Research
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right 3D Container (MIT Style massive rounded corners) */}
            <div className="w-full lg:w-7/12 h-[50vh] lg:h-[70vh] min-h-[400px]">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-cse bg-vjti-red/5 hover:-translate-y-2 transition-transform duration-700 cursor-pointer">
                <Hero3D />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ABOUT SECTION 
        Sharp color transition with stark typography & Image integration
      */}
      <section className="bg-vjti-red text-white py-32 relative overflow-hidden text-center md:text-left">
        <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 col-span-2">

            {/* Left: Huge typography + NEW IMAGE CONTAINER */}
            <div className="flex flex-col gap-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-xl">
                Igniting minds and inspiring innovation in <span className="text-vjti-accent">Electrical Engineering.</span>
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1600&auto=format&fit=crop"
                  alt="VJTI E-MC2 Lab Innovation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vjti-red to-transparent opacity-80"></div>

                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                  <div className="w-3 h-3 bg-vjti-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(255,184,28,0.5)]"></div>
                  <p className="text-sm font-bold tracking-widest uppercase text-white/90">Pioneering Autonomous Systems</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Descriptive text and callouts */}
            <div className="flex flex-col justify-end space-y-10">
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-light">
                The E-MC² Lab was inaugurated in the presence of Dr. Sachin Kore, Director, VJTI. We heartily acknowledge the support of Savex Technologies Pvt. Ltd, represented by Shri. Anil Jagasia, whose generous contribution through the VJTI Alumni Association makes this cutting-edge research possible.
              </p>

              <div className="space-y-6 pt-4 border-t border-white/20">
                <Link href="/publications" className="group flex justify-between items-center w-full">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-vjti-accent transition-colors">Latest Publications</span>
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-all shadow-sm">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-vjti-red" />
                  </div>
                </Link>
                <Link href="/people" className="group flex justify-between items-center w-full">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-vjti-accent transition-colors">Meet the Team</span>
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-all shadow-sm">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-vjti-red" />
                  </div>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        RESEARCH IMPACT & STATISTICS (Dark Mode Redesign)
      */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-matrix opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">Research <span className="text-vjti-red">Impact</span></h2>
            <p className="text-xl text-white/60 max-w-2xl font-medium mx-auto md:mx-0">Quantifiable metrics demonstrating our commitment to advancing the frontiers of electrical engineering across academia and industry.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Publications", value: "50+" },
              { label: "Industry Partners", value: "12+" },
              { label: "Patents Filed", value: "5+" },
              { label: "Research Scholars", value: "25+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900 rounded-[2rem] p-6 md:p-10 hover:-translate-y-2 transition-transform duration-500 border border-white/5 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-vjti-red rounded-full filter blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter group-hover:scale-110 group-hover:text-vjti-red transition-all origin-left drop-shadow-lg">{stat.value}</div>
                <div className="text-sm md:text-base font-bold text-white/50 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ACADEMIC PROGRAMS OFFERED (Interactive Lift & Glow)
      */}
      <section className="py-32 bg-[#F9F9F9] relative border-y border-black/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-vjti-red tracking-tight mb-6">Academic Programs</h2>
              <p className="text-xl text-vjti-red/70 font-medium leading-relaxed">Join our rigorous academic environment tailored for aspiring researchers, doctoral candidates, and innovative engineers at every level.</p>
            </div>
            <Link href="/careers" className="shrink-0 inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-vjti-red/20 text-vjti-red rounded-full font-bold text-sm tracking-widest uppercase hover:border-vjti-red hover:bg-vjti-red hover:text-white transition-all shadow-sm">
              View Openings
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Post-Doctoral", desc: "Advanced fellowships focusing on autonomous swarm intelligence, secure grids, and hardware integration." },
              { title: "Ph.D. Research", desc: "Rigorous doctoral programs in robust control, quantum-inspired algorithms, and power electronics." },
              { title: "M.Tech Projects", desc: "Master's level thesis projects utilizing our industry-standard multi-DOF robotic frameworks." },
              { title: "B.Tech Internships", desc: "Capstone internships for undergraduate system integrations, sensor fusion, and CAD module building." }
            ].map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-black/5 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-vjti-accent/20 rounded-full filter blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <h3 className="text-3xl font-black text-vjti-red mb-6 group-hover:text-vjti-accent transition-colors tracking-tight leading-tight">{prog.title}</h3>
                <p className="text-vjti-red/70 font-medium leading-relaxed flex-grow text-lg">{prog.desc}</p>
                <div className="w-12 h-12 mt-10 rounded-full bg-vjti-red/5 flex items-center justify-center group-hover:bg-vjti-red transition-all duration-300 text-vjti-red group-hover:text-white shadow-sm group-hover:shadow-md group-hover:scale-110 cursor-pointer">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        LAB VIRTUAL TOUR & SHOWCASE 
      */}
      <section className="py-32 bg-vjti-red relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-dot-matrix-white z-0 pointer-events-none opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">Virtual Tour</h2>
              <p className="text-xl text-white/80 font-medium">Step inside the E-MC² Lab and explore our state-of-the-art facilities firsthand.</p>
            </div>
            <Link href="/facilities" className="shrink-0 inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-vjti-red transition-colors shadow-xl">
              Explore Hardware
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer border-4 border-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
              alt="Lab Virtual Tour"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 mix-blend-overlay opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vjti-red to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-xl px-10 py-5 rounded-full border border-white/30 text-white font-black tracking-widest uppercase text-lg group-hover:px-12 group-hover:bg-white group-hover:text-vjti-red transition-all shadow-2xl">
                Enter 360° View
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
