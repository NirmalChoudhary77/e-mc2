import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function PeoplePage() {
    return (
        <div className="bg-clean-white min-h-screen pb-32">
            {/* Heavy header block over dot matrix, with extended pt for fixed navbar */}
            <div className="pt-40 pb-16 md:pt-56 md:pb-24 relative bg-dot-matrix flex items-end">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-vjti-red mb-8 tracking-tighter">
                        Our Team
                    </h1>
                    <p className="text-2xl max-w-3xl font-medium text-vjti-red/80 leading-snug">
                        The brilliant minds driving innovation in electrical modelling, computation, and control at VJTI.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24 max-w-6xl">

                {/* Leadership Box */}
                <div className="mb-32 space-y-24">
                    <h2 className="text-3xl font-bold text-vjti-red mb-12 pb-4 border-b-2 border-vjti-red/10 tracking-tight">Lab Leadership & Advisors</h2>

                    {/* Dr. Faruk Kazi */}
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="w-full md:w-1/3 max-w-[320px] shrink-0">
                            <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-vjti-red/5 border border-black/5 shadow-cse">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                                    alt="Dr. Faruk Kazi"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 pt-4">
                            <h3 className="text-4xl md:text-5xl font-bold text-vjti-red mb-4 tracking-tight leading-none">Dr. Faruk Kazi</h3>
                            <p className="text-vjti-accent font-bold uppercase tracking-widest text-sm mb-8">Professor & Dean R&D, VJTI | Key Advisor</p>
                            <div className="text-vjti-red/80 mb-10 text-lg leading-relaxed font-medium space-y-6 max-w-2xl">
                                <p>
                                    Dr. Faruk Kazi serves as the Dean of Research and Development at VJTI and acts as the key advisor and coordinator for the E-MC² Lab and CDRC. His exceptional vision guides the lab's strategic direction in complex network modelling and autonomous systems.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-vjti-red text-white hover:bg-vjti-accent transition-colors font-bold text-sm shadow-md">
                                    <Mail className="w-4 h-4" />
                                    Email
                                </a>
                                <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-vjti-red/10 text-vjti-red hover:border-vjti-accent hover:text-vjti-accent transition-colors font-bold text-sm">
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Dr. Sushama Wagh */}
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="w-full md:w-1/3 max-w-[320px] shrink-0">
                            <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-vjti-red/5 border border-black/5 shadow-cse">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                                    alt="Dr. Sushama R. Wagh"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 pt-4">
                            <h3 className="text-4xl md:text-5xl font-bold text-vjti-red mb-4 tracking-tight leading-none">Dr. Sushama R. Wagh</h3>
                            <p className="text-vjti-accent font-bold uppercase tracking-widest text-sm mb-8">Associate Professor & Head of Department</p>
                            <div className="text-vjti-red/80 mb-10 text-lg leading-relaxed font-medium space-y-6 max-w-2xl">
                                <p>
                                    Dr. Sushama R. Wagh leads the E-MC² Lab's daily research initiatives. With profound expertise in Non-linear & Fractional Order Control, she orchestrates the lab's deep-dives into Power Systems and mathematical modelling.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-vjti-red text-white hover:bg-vjti-accent transition-colors font-bold text-sm shadow-md">
                                    <Mail className="w-4 h-4" />
                                    Email
                                </a>
                                <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-vjti-red/10 text-vjti-red hover:border-vjti-accent hover:text-vjti-accent transition-colors font-bold text-sm">
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Faculty Grid */}
                <div>
                    <h2 className="text-3xl font-bold text-vjti-red mb-12 pb-4 border-b-2 border-vjti-red/10 tracking-tight">E-MC² Faculty & Researchers</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

                        {/* Prof N.M. Singh */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-square w-full max-w-[200px] mb-6 rounded-full overflow-hidden bg-dot-matrix border border-vjti-red/10 mx-auto sm:mx-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                                    alt="Prof. N.M. Singh"
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    sizes="(max-w-width: 768px) 100vw, 25vw"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h4 className="font-bold text-vjti-red text-xl md:text-2xl tracking-tight mb-2 group-hover:text-vjti-accent transition-colors">Prof. N.M. Singh</h4>
                                <p className="text-sm font-bold uppercase tracking-widest text-vjti-red/50 mb-4">Adjunct Professor</p>
                                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                    <a href="#" className="p-2 rounded-full border border-vjti-red/10 text-vjti-red hover:bg-vjti-red hover:text-white hover:border-vjti-red transition-all shadow-sm">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="p-2 rounded-full border border-vjti-red/10 text-vjti-red hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-sm">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Dr S.K. Bhil */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-square w-full max-w-[200px] mb-6 rounded-full overflow-hidden bg-dot-matrix border border-vjti-red/10 mx-auto sm:mx-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
                                    alt="Dr. S.K. Bhil"
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    sizes="(max-w-width: 768px) 100vw, 25vw"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h4 className="font-bold text-vjti-red text-xl md:text-2xl tracking-tight mb-2 group-hover:text-vjti-accent transition-colors">Dr. S.K. Bhil</h4>
                                <p className="text-sm font-bold uppercase tracking-widest text-vjti-red/50 mb-4">Lecturer</p>
                                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                    <a href="#" className="p-2 rounded-full border border-vjti-red/10 text-vjti-red hover:bg-vjti-red hover:text-white hover:border-vjti-red transition-all shadow-sm">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="p-2 rounded-full border border-vjti-red/10 text-vjti-red hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-sm">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
