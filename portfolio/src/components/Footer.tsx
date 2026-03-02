import React from 'react';
import { Terminal, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-preto-fosco py-12 border-t border-dark-border">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="flex items-center gap-2 group">
                        <div className="bg-destaque/10 p-2 rounded-lg group-hover:bg-destaque/20 transition-colors">
                            <Terminal className="text-destaque w-5 h-5" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-branco-neve">
                            Dev<span className="text-destaque">.</span>FullStack
                        </span>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {['Sobre', 'Projetos', 'Experiência', 'Habilidades'].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase().replace('ê', 'e')}
                                smooth={true}
                                duration={500}
                                className="text-gray-400 hover:text-destaque transition-colors cursor-pointer text-sm font-medium"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span>Desenvolvido com</span>
                        <Heart className="w-4 h-4 text-destaque" />
                        <span>por Alan Matheus © {new Date().getFullYear()}</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
