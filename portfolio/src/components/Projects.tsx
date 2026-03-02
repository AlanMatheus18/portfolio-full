import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Monitor } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "AI CRM Solutions",
        problem: "Empresas precisavam de um CRM integrado com IA para automatizar atendimento.",
        stackFront: "React, TailwindCSS, TypeScript",
        stackBack: "Node.js, Express, PostgreSQL, OpenAI API",
        result: "Aumento de 40% na velocidade de resposta a leads e melhor retenção.",
        link: "#"
    },
    {
        id: 2,
        title: "Plataforma E-commerce Headless",
        problem: "Um e-commerce monolítico e lento com péssima experiência móvel.",
        stackFront: "Next.js, Framer Motion, Zustand",
        stackBack: "NestJS, GraphQL, MongoDB, Redis",
        result: "Redução de 60% no tempo de carregamento da página e escalabilidade aprimorada.",
        link: "#"
    },
    {
        id: 3,
        title: "Sistema de Gestão Financeira",
        problem: "Dificuldade na consolidação de dados financeiros em tempo real e geração de relatórios.",
        stackFront: "Vue.js, Vuetify",
        stackBack: "Python, FastAPI, PostgreSQL",
        result: "Processamento de grandes volumes de transações sem gargalos e dashboards dinâmicos.",
        link: "#"
    },
    {
        id: 4,
        title: "API de Agendamento Inteligente",
        problem: "Conflitos frequentes de horários em clínicas médicas e falta de flexibilidade.",
        stackFront: "React Native (App Mobile)",
        stackBack: "Node.js, TypeScript, Docker, Redis",
        result: "Eliminação de conflitos e integração direta com calendários via Webhooks.",
        link: "#"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-preto-fosco">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-branco-neve mb-4">Projetos em Destaque</h2>
                    <div className="h-1 w-20 bg-destaque rounded-full mx-auto md:mx-0 mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Sistemas e aplicações de ponta a ponta desenvolvidos com foco em performance, usabilidade e arquiteturas sólidas.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-destaque/40 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                        >
                            {/* Subtle Gradient Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-destaque/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <h3 className="text-2xl font-bold text-branco-neve mb-3 group-hover:text-destaque transition-colors">
                                {project.title}
                            </h3>

                            <div className="mb-6 flex-grow">
                                <p className="text-gray-400 mb-2">
                                    <span className="font-semibold text-gray-300">Problema:</span> {project.problem}
                                </p>
                                <p className="text-gray-400">
                                    <span className="font-semibold text-destaque">Resultado:</span> {project.result}
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <Monitor className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Front-end</span>
                                        <span className="text-sm text-gray-300">{project.stackFront}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Server className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Back-end</span>
                                        <span className="text-sm text-gray-300">{project.stackBack}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-dark-border/50">
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 text-sm font-medium text-branco-neve hover:text-destaque transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Ver Projeto
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-branco-neve transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    Código Fonte
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
