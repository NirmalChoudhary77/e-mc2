import React from 'react';
import { Activity, Cpu, Radio } from 'lucide-react';

const ResearchPillars = () => {
    const pillars = [
        {
            title: "Mathematical Modelling",
            icon: <Activity className="w-10 h-10 text-[#002147] group-hover:text-amber-600 transition-colors duration-300 ease-out" />,
            desc: "Developing robust mathematical representations of complex physical systems and dynamic environments."
        },
        {
            title: "Advanced Computation",
            icon: <Cpu className="w-10 h-10 text-[#002147] group-hover:text-amber-600 transition-colors duration-300 ease-out" />,
            desc: "High-performance algorithms, real-time edge computing, and large-scale simulations."
        },
        {
            title: "Control Systems",
            icon: <Radio className="w-10 h-10 text-[#002147] group-hover:text-amber-600 transition-colors duration-300 ease-out" />,
            desc: "Feedback mechanisms for autonomous drones, robotics, and decentralized power grids."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg p-8 border-t-4 border-[#002147] shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out flex flex-col cursor-pointer"
                        >
                            <div className="mb-6">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold font-serif text-gray-900 mb-3">{pillar.title}</h3>
                            <p className="text-sm font-sans text-gray-600 leading-relaxed">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchPillars;
