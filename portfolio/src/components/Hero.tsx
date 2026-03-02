import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Layout } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-destaque/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-destaque/5 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card border border-dark-border mb-6">
                        <span className="w-2 h-2 rounded-full bg-destaque animate-pulse"></span>
                        <span className="text-sm text-gray-400 font-medium">Disponível para novos projetos</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-branco-neve">
                        Desenvolvimento<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-destaque to-blue-500">
                            Web Full Stack.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
                        Criando experiências digitais completas, do front-end interativo, moderno e escalável ao back-end robusto e seguro.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-destaque text-preto-fosco font-semibold hover:bg-destaque/90 transition-all cursor-pointer shadow-lg shadow-destaque/20"
                        >
                            Ver projetos
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="flex items-center justify-center px-8 py-4 rounded-xl bg-dark-card border border-dark-border text-branco-neve font-medium hover:border-destaque/50 hover:bg-dark-card/80 transition-all cursor-pointer"
                        >
                            Entrar em contato
                        </Link>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="hidden lg:flex justify-center relative"
                >
                    {/* Abstract Architecture Representation */}
                    <div className="relative w-full max-w-lg aspect-square">
                        {/* Front-end layer */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 left-10 right-20 h-48 bg-dark-card/80 backdrop-blur-xl border border-dark-border rounded-2xl p-6 shadow-2xl z-30"
                        >
                            <div className="flex items-center gap-3 mb-6 border-b border-dark-border/50 pb-4">
                                <Layout className="text-destaque w-6 h-6" />
                                <span className="font-semibold text-branco-neve">Interface UI</span>
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 bg-dark-border rounded-md w-3/4"></div>
                                <div className="h-4 bg-dark-border rounded-md w-full"></div>
                                <div className="h-4 bg-dark-border rounded-md w-5/6"></div>
                            </div>
                        </motion.div>

                        {/* API / Logic layer */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-40 left-20 right-10 h-48 bg-preto-fosco/90 backdrop-blur-xl border border-dark-border rounded-2xl p-6 shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-3 mb-6 border-b border-dark-border/50 pb-4">
                                <Code2 className="text-blue-500 w-6 h-6" />
                                <span className="font-semibold text-branco-neve">API RESTful</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full border-2 border-dashed border-dark-border flex items-center justify-center animate-spin-slow">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                </div>
                                <div className="flex-1 space-y-2 justify-center flex flex-col">
                                    <div className="h-2 bg-dark-border rounded-md w-full"></div>
                                    <div className="h-2 bg-dark-border rounded-md w-4/5"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Database layer */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-10 left-32 right-0 h-40 bg-zinc-900/90 backdrop-blur-xl border border-dark-border rounded-2xl p-6 shadow-2xl z-10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="text-purple-500 w-6 h-6" />
                                <span className="font-semibold text-branco-neve">Database</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-12 bg-dark-border/50 rounded-lg"></div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
