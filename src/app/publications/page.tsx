"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Copy, Check, ExternalLink, CalendarDays, BookOpen } from "lucide-react";

export default function PublicationsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const publications = [
        {
            id: "pub-1",
            year: 2019,
            title: "Accelerated distributed primal-dual dynamics using adaptive synchronization",
            authors: "PA Bansode, KC Kosaraju, SR Wagh, et al.",
            venue: "IEEE Access",
            doi: "10.1109/ACCESS.2019",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" // Conceptual cybernetic nodes
        },
        {
            id: "pub-2",
            year: 2019,
            title: "Development of dynamic phasor based higher index model for performance enhancement of dual active bridge",
            authors: "M Monika, M Rane, S Wagh, NM Singh, et al.",
            venue: "Electric Power Systems Research",
            doi: "10.1016/j.epsr.2019",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop" // High voltage power lines
        },
        {
            id: "pub-3",
            year: 2019,
            title: "Mitigation of harmonics and unbalanced source voltage condition in standalone microgrid",
            authors: "M Rane, S Wagh",
            venue: "Heliyon",
            doi: "10.1016/j.heliyon.2019",
            image: "https://images.unsplash.com/photo-1548611146-c220cc329fb8?q=80&w=800&auto=format&fit=crop" // Distorted light patterns representing harmonics
        },
        {
            id: "pub-4",
            year: 2018,
            title: "Distributed self triggered control for asymptotic synchronization in inverter based microgrids",
            authors: "A Deshpande, P Bansode, SR Wagh, NM Singh",
            venue: "Int. Journal of Dynamics and Control",
            doi: "10.1007/s40435-018",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" // Circuit board representing control systems
        },
        {
            id: "pub-5",
            year: 2018,
            title: "Bond graph approach for port-controlled Hamiltonian modeling for SST",
            authors: "RV Meshram, SV Khade, SR Wagh, NM Singh",
            venue: "Electric Power Systems Research",
            doi: "10.1016/j.epsr.2018",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" // Abstract data science / mathematical modeling
        }
    ];

    const filteredPublications = publications.filter(pub =>
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCopy = (pub: any) => {
        const citation = `${pub.authors} (${pub.year}). "${pub.title}". ${pub.venue}. DOI: ${pub.doi}`;
        navigator.clipboard.writeText(citation);
        setCopiedId(pub.id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="bg-clean-white min-h-screen pb-32">
            {/* Heavy Header block over dot matrix */}
            <div className="pt-40 pb-16 md:pt-56 md:pb-24 relative bg-dot-matrix">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-vjti-red mb-8 tracking-tighter">
                        Publications
                    </h1>
                    <p className="text-2xl max-w-3xl font-medium text-vjti-red/80 leading-snug">
                        Research articles, conference proceedings, and technological contributions driving the future of electrical engineering.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 max-w-6xl">

                {/* Search Bar */}
                <div className="mb-16 relative shadow-cse rounded-3xl overflow-hidden bg-white group border border-black/5">
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none group-focus-within:text-vjti-accent transition-colors">
                        <Search className="h-7 w-7 text-vjti-red/40" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-16 pr-6 py-6 font-bold text-xl bg-transparent focus:outline-none text-vjti-red placeholder-vjti-red/30 transition-all"
                        placeholder="Search by title, author, or venue..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Visual Publication Cards */}
                <div className="grid grid-cols-1 gap-12">
                    {filteredPublications.map((pub, idx) => (
                        <div
                            key={pub.id}
                            className="group flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-cse hover:shadow-2xl transition-all duration-500 border border-black/5"
                        >
                            {/* Image Section (Top on mobile, Left on desktop) */}
                            <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden bg-vjti-red/5">
                                <Image
                                    src={pub.image}
                                    alt={pub.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent group-hover:opacity-80 transition-opacity duration-500" />

                                {/* Floating Badge Component on Image */}
                                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full">
                                    <BookOpen className="w-4 h-4 fill-vjti-accent text-vjti-accent" />
                                    <span className="text-xs font-bold tracking-widest uppercase">Research Article</span>
                                </div>
                            </div>

                            {/* Content Section (Bottom on mobile, Right on desktop) */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
                                <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-vjti-red/60 uppercase tracking-widest mb-6 border-b border-vjti-red/10 pb-4">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays className="w-5 h-5 text-vjti-accent" />
                                        <span className="text-vjti-red">{pub.year}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-vjti-red">{pub.venue}</span>
                                    </div>
                                </div>

                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-vjti-red mb-6 tracking-tight leading-tight group-hover:text-vjti-accent transition-colors">
                                    {pub.title}
                                </h2>

                                <p className="text-lg font-medium text-vjti-red/80 leading-relaxed mb-8 flex-grow">
                                    {pub.authors}
                                </p>

                                {/* Bottom action row */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-vjti-red/10">
                                    <p className="text-sm font-mono text-vjti-red/50 font-medium">
                                        DOI: {pub.doi}
                                    </p>

                                    <div className="flex gap-4 w-full sm:w-auto">
                                        <button
                                            onClick={() => handleCopy(pub)}
                                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-vjti-red/5 text-vjti-red font-bold tracking-wider uppercase text-xs hover:bg-vjti-accent hover:text-white transition-colors border border-vjti-red/10 hover:border-vjti-accent"
                                            title="Copy Citation"
                                        >
                                            {copiedId === pub.id ? (
                                                <>
                                                    <Check className="w-4 h-4" />
                                                    <span>Copied</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-4 h-4" />
                                                    <span>Cite</span>
                                                </>
                                            )}
                                        </button>
                                        <button
                                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-vjti-red text-white font-bold tracking-wider uppercase text-xs hover:bg-vjti-accent transition-colors shadow-md hover:shadow-lg"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>View Source</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredPublications.length === 0 && (
                        <div className="py-32 text-center bg-vjti-red/5 rounded-[3rem] border border-vjti-red/10">
                            <h3 className="text-2xl font-bold text-vjti-red mb-2">No publications found</h3>
                            <p className="text-lg font-medium text-vjti-red/60">Try adjusting your search terms for "{searchTerm}"</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
