import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
    {
        id: 1,
        company: "AI ATENDE",
        role: "Desenvolvedor Full Stack",
        period: "2024 - 2026",
        responsibilities: [
            "Atuação de ponta a ponta no desenvolvimento de software, construindo e mantendo interfaces front-end complexas e arquitetura back-end escalável.",
            "Integração de sistemas e APIs de terceiros para garantir um fluxo de dados seguro, eficiente e automatizado.",
            "Otimização contínua de código e garantia de performance máxima em aplicações web de alto tráfego."
        ],
        impact: "Entrega de soluções integradas que melhoraram significativamente a usabilidade do cliente final e a estabilidade do sistema interno da empresa."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-dark-card border-y border-dark-border">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-branco-neve mb-4">Experiência Profissional</h2>
                    <div className="h-1 w-20 bg-destaque rounded-full mx-auto md:mx-0"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line for Mobile */}
                            <div className="md:hidden absolute left-[11px] top-2 bottom-0 w-0.5 bg-dark-border"></div>

                            <div className="flex flex-col md:flex-row gap-8 items-start">

                                {/* Left Side: Company & Period */}
                                <div className="md:w-1/3 flex-shrink-0 relative">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[37px] md:hidden top-1.5 w-4 h-4 rounded-full bg-destaque shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="hidden md:flex w-12 h-12 rounded-xl bg-preto-fosco border border-dark-border items-center justify-center text-destaque">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-branco-neve">{exp.company}</h3>
                                            <p className="text-destaque font-medium">{exp.period}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="md:w-2/3 bg-preto-fosco border border-dark-border rounded-2xl p-6 md:p-8 hover:border-destaque/30 transition-colors relative">
                                    {/* Timeline Line & Dot for Desktop */}
                                    <div className="hidden md:block absolute top-[40px] -left-[41px] w-[40px] border-t-2 border-dashed border-dark-border"></div>
                                    <div className="hidden md:block absolute top-[35px] -left-[45px] w-3 h-3 rounded-full bg-destaque shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                    <div className="hidden md:block absolute top-[35px] -left-[46px] bottom-[-100px] w-0.5 bg-dark-border z-[-1]"></div>

                                    <h4 className="text-2xl font-bold text-branco-neve mb-6">{exp.role}</h4>

                                    <ul className="space-y-4 mb-8">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-400">
                                                <CheckCircle2 className="w-5 h-5 text-destaque mt-0.5 flex-shrink-0" />
                                                <span className="leading-relaxed">{resp}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-destaque/10 border border-destaque/20 rounded-xl p-5">
                                        <p className="text-sm font-semibold text-destaque uppercase tracking-wider mb-2">Impacto Gerado</p>
                                        <p className="text-branco-neve leading-relaxed">{exp.impact}</p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
