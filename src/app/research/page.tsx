import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResearchPage() {
    const themes = [
        {
            id: "robust-control",
            title: "Robust Control",
            description: "Designing systems that maintain strict performance protocols despite extreme uncertainties.",
            image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
            link: "/research/robust-control"
        },
        {
            id: "autonomous-systems",
            title: "Autonomous Systems",
            description: "Development of advanced non-linear control algorithms for robotics, multi-agent swarms, and quadrotors.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
            link: "/research/autonomous-systems"
        },
        {
            id: "power-systems",
            title: "Power Systems & Microgrids",
            description: "Addressing power quality, harmonic mitigation, and structural microgrid synchronization challenges.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
            link: "/research/power-systems"
        },
        {
            id: "complex-networks",
            title: "Complex Networks Modelling",
            description: "Utilizing bond graphs and Hamiltonian mathematical modelling for evaluating large-scale electrical systems.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            link: "/research/complex-networks"
        },
        {
            id: "simulation",
            title: "Real-time Simulation",
            description: "Leveraging rigorous HIL (Hardware-in-the-Loop) environments for robust physical engineering validation.",
            image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
            link: "/research/simulation"
        }
    ];

    return (
        <div className="bg-clean-white min-h-screen">

            {/* Heavy Header Section matching MIT pattern */}
            <div className="pt-40 pb-20 md:pt-56 md:pb-32 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-vjti-red mb-8 tracking-tighter leading-none">
                        Research <br />Themes
                    </h1>
                    <p className="text-2xl max-w-3xl font-medium text-vjti-red/80 leading-snug">
                        Investigations spanning rigorous mathematical modeling to the deployment of intelligent cyber-physical systems.
                    </p>
                </div>
            </div>

            {/* Content Grid overlaid on Blue Background section */}
            <div className="bg-vjti-red text-white py-32 relative">
                {/* Top Edge Extension for overlap illusion */}
                <div className="absolute top-0 left-0 w-full h-40 bg-clean-white -translate-y-px"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-vjti-red/10"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {themes.map((theme) => (
                            <div
                                key={theme.id}
                                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-cse hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5"
                            >
                                {/* Img Container heavily rounded */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={theme.image}
                                        alt={theme.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-w-width: 768px) 100vw, (max-w-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="p-10 flex flex-col flex-grow text-vjti-red">
                                    <h3 className="text-2xl font-bold mb-4 tracking-tight leading-snug group-hover:text-vjti-accent transition-colors">
                                        {theme.title}
                                    </h3>
                                    <p className="text-vjti-red/70 mb-8 flex-grow leading-relaxed font-medium">
                                        {theme.description}
                                    </p>

                                    {/* Subtle active CTA */}
                                    <Link
                                        href={theme.link}
                                        className="inline-flex items-center text-vjti-accent font-bold uppercase tracking-wider text-sm p-4 -ml-4 rounded-xl hover:bg-vjti-accent/5 transition-colors mt-auto w-max"
                                    >
                                        Learn More
                                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    );
}
