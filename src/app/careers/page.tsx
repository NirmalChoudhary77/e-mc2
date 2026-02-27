import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function CareersPage() {
    const jobs = [
        {
            id: 1,
            title: "Project Assistant (PA) and Research Assistant (RA)",
            date: "16 December, 2024",
            type: "Walk-in-Interview",
            status: "Open",
            department: "E-MC² Lab",
        },
        {
            id: 2,
            title: "Project Assistant (PA), Project Research Assistant (PRA) and Post Doctoral Fellows",
            date: "22 August, 2024",
            type: "Walk-in-Interview",
            status: "Closed",
            department: "E-MC² Lab",
        },
        {
            id: 3,
            title: "Junior Engineer (JE) / Project Assistant (PA)",
            date: "29 February, 2024",
            type: "Walk-in-Interview",
            status: "Closed",
            department: "E-MC² Lab",
        }
    ];

    return (
        <div className="bg-clean-white min-h-screen pb-32">
            {/* Header */}
            <div className="pt-40 pb-16 md:pt-56 md:pb-24 relative bg-dot-matrix">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-vjti-red mb-8 tracking-tighter">
                        Careers & Internships
                    </h1>
                    <p className="text-2xl max-w-3xl font-medium text-vjti-red/80 leading-snug">
                        Join our dynamic team of researchers and engineers pushing the boundaries of autonomous systems and smart grids.
                    </p>
                </div>
            </div>

            {/* Job Board */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-5xl">
                <div className="flex flex-col gap-6">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-black/5 rounded-[2rem] shadow-cse hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="flex-grow pr-8">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${job.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                                        {job.status}
                                    </span>
                                    <span className="text-vjti-accent font-bold uppercase tracking-widest text-xs">
                                        {job.department}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-vjti-red mb-4 tracking-tight group-hover:text-vjti-accent transition-colors">
                                    {job.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-6 text-vjti-red/60 font-medium text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>Posted: {job.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" />
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 md:mt-0 flex-shrink-0">
                                <button className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-vjti-red text-white font-bold tracking-wider uppercase text-sm hover:bg-vjti-accent transition-colors shadow-md group-hover:shadow-lg">
                                    View Details
                                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* General Inquiry */}
                <div className="mt-24 p-12 bg-vjti-red/5 border border-vjti-red/10 rounded-[2rem] text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-vjti-red mb-4 tracking-tight">Don't see a matching position?</h3>
                    <p className="text-vjti-red/70 mb-8 font-medium leading-relaxed">
                        We are always looking for passionate researchers and interns. Send us your CV and a brief cover letter outlining your research interests.
                    </p>
                    <a href="mailto:contact@emcc.in" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-vjti-red text-vjti-red font-bold tracking-wider uppercase text-sm hover:bg-vjti-red hover:text-white transition-colors">
                        Email Your CV
                    </a>
                </div>
            </div>
        </div>
    );
}
