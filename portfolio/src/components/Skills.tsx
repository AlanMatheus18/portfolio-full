import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Users } from 'lucide-react';

const skillCategories = [
    {
        title: "Front-end",
        icon: <Code2 className="w-6 h-6 text-destaque" />,
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Vue.js", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "Back-end",
        icon: <Server className="w-6 h-6 text-destaque" />,
        skills: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "Java", "APIs RESTful", "GraphQL"]
    },
    {
        title: "Bancos de Dados & Infra",
        icon: <Database className="w-6 h-6 text-destaque" />,
        skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "CI/CD", "AWS", "Linux"]
    },
    {
        title: "Soft Skills",
        icon: <Users className="w-6 h-6 text-destaque" />,
        skills: ["Resolução de Problemas", "Comunicação Técnica", "Pensamento Analítico", "Trabalho em Equipe", "Metodologias Ágeis", "Mentoria"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-preto-fosco">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-branco-neve mb-4">Habilidades Técnicas</h2>
                    <div className="h-1 w-20 bg-destaque rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Um conjunto versátil de tecnologias e metodologias para construir produtos robustos de ponta a ponta.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-destaque/40 transition-colors h-full flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-dark-border/50">
                                <div className="bg-preto-fosco p-3 rounded-lg border border-dark-border">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-branco-neve">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2 flex-grow">
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="px-3 py-1.5 bg-preto-fosco border border-dark-border text-gray-300 text-sm rounded-full hover:bg-destaque/10 hover:text-destaque hover:border-destaque/30 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
