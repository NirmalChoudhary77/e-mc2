import { Hero3D } from "@/components/home/Hero3D";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-cse bg-vjti-red/5">
                <Hero3D />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ABOUT SECTION 
        Sharp color transition with stark typography 
      */}
      <section className="bg-vjti-red text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Huge typography */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-xl">
                Igniting minds and inspiring innovation in Electrical Engineering.
              </h2>
            </div>

            {/* Right: Descriptive text and callouts */}
            <div className="space-y-10">
              <p className="text-xl text-white/80 leading-relaxed font-light">
                The E-MC² Lab was inaugurated in the presence of Dr. Sachin Kore, Director, VJTI. We heartily acknowledge the support of Savex Technologies Pvt. Ltd, represented by Shri. Anil Jagasia, whose generous contribution through the VJTI Alumni Association makes this cutting-edge research possible.
              </p>

              <div className="space-y-6 pt-4 border-t border-white/20">
                <Link href="/publications" className="group flex justify-between items-center w-full">
                  <span className="text-2xl font-bold tracking-tight group-hover:text-cyan transition-colors">Latest Publications</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyan group-hover:border-cyan transition-all">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-vjti-red" />
                  </div>
                </Link>
                <Link href="/people" className="group flex justify-between items-center w-full">
                  <span className="text-2xl font-bold tracking-tight group-hover:text-cyan transition-colors">Meet the Team</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyan group-hover:border-cyan transition-all">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-vjti-red" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        RESEARCH IMPACT & STATISTICS 
      */}
      <section className="py-32 bg-clean-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-vjti-red tracking-tight mb-4">Research Impact</h2>
            <p className="text-xl text-vjti-red/70 max-w-2xl font-medium">Quantifiable metrics demonstrating our commitment to advancing the frontiers of electrical engineering.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Publications", value: "50+" },
              { label: "Industry Partners", value: "12+" },
              { label: "Patents Filed", value: "5+" },
              { label: "Research Scholars", value: "25+" }
            ].map((stat, i) => (
              <div key={i} className="bg-vjti-red/5 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 border border-vjti-red/10">
                <div className="text-5xl md:text-6xl font-black text-vjti-red mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-sm font-bold text-vjti-accent uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ACADEMIC PROGRAMS OFFERED 
      */}
      <section className="py-32 bg-dot-matrix relative border-t border-black/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-vjti-red tracking-tight mb-4">Academic Programs</h2>
              <p className="text-xl text-vjti-red/70 font-medium">Join our rigorous academic environment tailored for aspiring researchers and engineers at every level.</p>
            </div>
            <Link href="/careers" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-vjti-red text-vjti-red rounded-full font-bold text-sm tracking-wider uppercase hover:bg-vjti-red hover:text-white transition-colors">
              View Openings
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Post-Doctoral", desc: "Advanced fellowships focusing on autonomous swarm intelligence." },
              { title: "Ph.D. Research", desc: "Rigorous doctoral programs in robust control and power electronics." },
              { title: "M.Tech Projects", desc: "Master's level thesis projects with industry-standard hardware." },
              { title: "B.Tech Internships", desc: "Capstone internships for undergraduate system integrations." }
            ].map((prog, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 shadow-cse hover:shadow-2xl transition-all duration-300 border border-black/5 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-vjti-red mb-4 group-hover:text-vjti-accent transition-colors tracking-tight">{prog.title}</h3>
                <p className="text-vjti-red/70 font-medium leading-relaxed flex-grow">{prog.desc}</p>
                <div className="w-10 h-10 mt-8 rounded-full bg-vjti-red/5 flex items-center justify-center group-hover:bg-vjti-red transition-colors text-vjti-red group-hover:text-white">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        LAB VIRTUAL TOUR & SHOWCASE 
      */}
      <section className="py-32 bg-vjti-red relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-dot-matrix-white z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Virtual Tour</h2>
              <p className="text-xl text-white/80 font-medium">Step inside the E-MC² Lab and explore our state-of-the-art facilities.</p>
            </div>
            <Link href="/facilities" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white rounded-full font-bold text-sm tracking-wider uppercase hover:bg-white hover:text-vjti-red transition-colors">
              Explore Hardware
            </Link>
          </div>

          <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
              alt="Lab Virtual Tour"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-vjti-red/60 mix-blend-multiply group-hover:bg-vjti-red/40 transition-colors duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/30 text-white font-bold tracking-widest uppercase text-sm group-hover:px-10 transition-all">
                Enter 360° View
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
