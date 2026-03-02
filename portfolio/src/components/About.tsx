import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, LayoutTemplate, Settings } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-dark-card border-y border-dark-border">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">

                        {/* Minimalist Avatar Group */}
                        <div className="flex-shrink-0 relative group">
                            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-preto-fosco border-4 border-dark-border flex items-center justify-center overflow-hidden z-10 relative group-hover:border-destaque/50 transition-colors duration-500">
                                <User className="w-20 h-20 text-gray-500 group-hover:text-destaque transition-colors duration-500" />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-destaque/20 blur-2xl -z-10 group-hover:bg-destaque/40 transition-all duration-500"></div>
                        </div>

                        {/* About Content */}
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-branco-neve mb-2">Sobre Mim</h2>
                                <div className="h-1 w-20 bg-destaque rounded-full mx-auto md:mx-0"></div>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Sou um <strong className="text-branco-neve">Desenvolvedor Full Stack</strong> com a missão de transformar problemas complexos em soluções digitais elegantes. Meu foco principal está na construção de aplicações web de ponta a ponta, desenvolvendo desde APIs RESTful escaláveis até interfaces interativas e reativas no Front-end.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="bg-preto-fosco p-4 rounded-xl border border-dark-border">
                                    <p className="text-sm text-gray-400 mb-1">Cargo Atual</p>
                                    <p className="font-semibold text-branco-neve text-lg">Desenvolvedor Full Stack</p>
                                </div>
                                <div className="bg-preto-fosco p-4 rounded-xl border border-dark-border">
                                    <p className="text-sm text-gray-400 mb-1">Experiência</p>
                                    <p className="font-semibold text-branco-neve text-lg">2+ Anos na área</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-dark-border/50">
                                <h3 className="text-xl font-semibold text-branco-neve mb-4">Diferencial Profissional</h3>
                                <p className="text-gray-400">
                                    Visão sistêmica do software, garantindo que a interface do usuário e a lógica do servidor funcionem em perfeita harmonia. Otimizo o fluxo de dados com segurança e foco na <strong className="text-destaque font-medium">performance máxima</strong> e estabilidade para os usuários.
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
