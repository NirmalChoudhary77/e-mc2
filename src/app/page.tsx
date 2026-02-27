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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 col-span-2 items-center">

            {/* Left: Clean Image placement */}
            <div className="w-full">
              <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
                  alt="VJTI E-MC2 Lab Facilities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Descriptive text and callouts */}
            <div className="flex flex-col space-y-12">
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                The E-MC² Lab was inaugurated in the presence of Dr. Sachin Kore, Director, VJTI. We heartily acknowledge the support of Savex Technologies Pvt. Ltd, represented by Shri. Anil Jagasia, whose generous contribution through the VJTI Alumni Association makes this cutting-edge research possible.
              </p>

              <div className="space-y-0 pt-8 border-t border-white/20">
                <Link href="/publications" className="group flex justify-between items-center w-full py-6 border-b border-white/20">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-white transition-colors">Latest Publications</span>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-vjti-red">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-vjti-red" />
                  </div>
                </Link>
                <Link href="/people" className="group flex justify-between items-center w-full py-6">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-white transition-colors">Meet the Team</span>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-vjti-red">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-vjti-red" />
                  </div>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 
        RESEARCH IMPACT & STATISTICS (Cards with Images)
      */}
      <section className="py-24 bg-gray-50 relative border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 border-b-4 border-vjti-red pb-6 inline-block">
            <h2 className="text-4xl md:text-5xl font-black text-vjti-red tracking-tight">Research Impact</h2>
            <p className="mt-4 text-xl text-gray-700 font-medium max-w-2xl">
              Driving innovation through rigorous academic pursuit, industry collaboration, and real-world technological solutions.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {[
              {
                label: "Publications",
                value: "50+",
                desc: "Our researchers consistently contribute to high-impact peer-reviewed journals and international conference proceedings, disseminating knowledge and driving discourse in advanced engineering fields.",
                image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1600&auto=format&fit=crop"
              },
              {
                label: "Industry Partners",
                value: "12+",
                desc: "We maintain active, synergistic collaborations with leading technology corporations, research organizations, and government bodies to ensure our work translates into practical, scalable solutions.",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
              },
              {
                label: "Patents Filed",
                value: "5+",
                desc: "Protecting our intellectual property is paramount. We have successfully filed multiple patents for innovative technological solutions, securing the rights to our groundbreaking discoveries.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop"
              },
              {
                label: "Research Scholars",
                value: "25+",
                desc: "A dedicated cohort of Master's and Ph.D. candidates form the backbone of our laboratory, driving cutting-edge exploration and pushing the boundaries of what's possible in their respective domains.",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop"
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row min-h-[400px]"
              >
                {/* Image Section - Alternating sides on desktop */}
                <div className={`relative w-full md:w-1/2 h-80 md:h-auto overflow-hidden ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative bg-white">

                  <div className="flex flex-col mb-8">
                    <span className="text-6xl md:text-8xl font-black text-vjti-red tracking-tighter leading-none mb-4">{stat.value}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{stat.label}</h3>
                  </div>

                  <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-lg mb-8">
                    {stat.desc}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ACADEMIC PROGRAMS OFFERED (Interactive Expanding Accordions)
      */}
      <section className="py-32 bg-clean-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-vjti-red tracking-tight leading-[0.9] mb-6">Explore<br />Our Programs.</h2>
            </div>
            <Link href="/careers" className="relative inline-flex group items-center justify-center px-8 py-4 cursor-pointer border-none bg-black text-white rounded-full overflow-hidden">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-vjti-accent rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="relative font-bold text-sm tracking-widest uppercase transition-colors duration-300 group-hover:text-black flex items-center gap-2">
                Join the Lab <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { title: "Post-Doctoral Fellowships", desc: "Advanced research positions focusing on autonomous swarm intelligence, secure grids, and highly complex hardware integration methodologies. Candidates will lead specialized pods.", number: "01" },
              { title: "Ph.D. Research Scholar", desc: "Rigorous doctoral programs specializing in robust control theories, quantum-inspired algorithms, and cutting-edge power electronics for sustainable energy.", number: "02" },
              { title: "M.Tech Thesis Projects", desc: "Master's level thesis projects directly utilizing our industry-standard multi-DOF robotic frameworks and real-time computation grids.", number: "03" },
              { title: "B.Tech Capstone Internships", desc: "Intensive capstone internships for undergraduate system integrations, complex sensor fusion, and foundational CAD module building.", number: "04" }
            ].map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover="hover"
                className="group w-full bg-[#111] rounded-3xl p-8 md:p-10 cursor-pointer overflow-hidden relative"
              >
                {/* Hover Reveal Background */}
                <motion.div
                  variants={{ hover: { height: "100%", opacity: 1 } }}
                  initial={{ height: "0%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 w-full bg-vjti-red z-0"
                ></motion.div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="text-4xl md:text-5xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                    {prog.number}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold text-white mb-0 group-hover:mb-4 transition-all duration-300 tracking-tight">{prog.title}</h3>

                    <motion.div
                      variants={{ hover: { height: "auto", opacity: 1, marginTop: "1rem" } }}
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/90 font-medium leading-relaxed text-lg max-w-4xl">
                        {prog.desc}
                      </p>
                    </motion.div>
                  </div>

                  <div className="shrink-0 mt-6 md:mt-0">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300 group-hover:border-white">
                      <ArrowRight className="w-8 h-8 text-white group-hover:text-vjti-red transition-colors group-hover:rotate-[-45deg] duration-300" />
                    </div>
                  </div>
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
