import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log(formData);
        alert("Mensagem enviada com sucesso! (Simulação)");
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-dark-card border-t border-dark-border relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-destaque/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Left Side: CTAs and Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-branco-neve mb-6 leading-tight">
                            Vamos construir algo <span className="text-destaque">incrível</span> juntos.
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Precisa de alguém para construir sua próxima aplicação de ponta a ponta?
                            Seja para arquitetar um back-end robusto ou criar uma experiência front-end interativa, estou à disposição para conversar.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:seu-email@exemplo.com" className="flex items-center gap-4 text-gray-300 hover:text-destaque transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-preto-fosco border border-dark-border flex items-center justify-center group-hover:border-destaque/50 shadow-sm transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 font-medium">Me mande um email</span>
                                    <span className="text-lg font-semibold">seu-email@exemplo.com</span>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-destaque transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-preto-fosco border border-dark-border flex items-center justify-center group-hover:border-destaque/50 shadow-sm transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 font-medium">Vamos nos conectar</span>
                                    <span className="text-lg font-semibold">linkedin.com/in/seuperfil</span>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-destaque transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-preto-fosco border border-dark-border flex items-center justify-center group-hover:border-destaque/50 shadow-sm transition-all">
                                    <Github className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 font-medium">Veja meus códigos</span>
                                    <span className="text-lg font-semibold">github.com/seuperfil</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-preto-fosco border border-dark-border rounded-2xl p-8 shadow-2xl relative"
                    >
                        {/* Form Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-destaque/5 to-transparent rounded-2xl pointer-events-none" />

                        <h3 className="text-2xl font-bold text-branco-neve mb-6 relative z-10">Envie uma mensagem</h3>

                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-branco-neve focus:outline-none focus:border-destaque focus:ring-1 focus:ring-destaque transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Profissional</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-branco-neve focus:outline-none focus:border-destaque focus:ring-1 focus:ring-destaque transition-all"
                                    placeholder="voce@empresa.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Sua Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-branco-neve focus:outline-none focus:border-destaque focus:ring-1 focus:ring-destaque transition-all resize-none"
                                    placeholder="Como posso te ajudar?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-destaque text-preto-fosco font-bold rounded-xl px-6 py-4 hover:bg-destaque/90 hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                Enviar Mensagem
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
