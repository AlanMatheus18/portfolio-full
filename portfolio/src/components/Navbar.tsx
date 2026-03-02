import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
    { name: 'Sobre', to: 'about' },
    { name: 'Projetos', to: 'projects' },
    { name: 'Experiência', to: 'experience' },
    { name: 'Habilidades', to: 'skills' },
    { name: 'Contato', to: 'contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-preto-fosco/80 backdrop-blur-md border-b border-dark-border py-4 shadow-lg'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <div className="bg-destaque/10 p-2 rounded-lg group-hover:bg-destaque/20 transition-colors">
                        <Terminal className="text-destaque w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-branco-neve">
                        Dev<span className="text-destaque">.</span>FullStack
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-destaque font-medium"
                            className="text-gray-300 hover:text-branco-neve transition-colors cursor-pointer text-sm tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="ml-4 px-5 py-2.5 rounded-full bg-destaque/10 text-destaque border border-destaque/30 hover:bg-destaque hover:text-preto-fosco transition-all duration-300 text-sm font-medium cursor-pointer"
                    >
                        Vamos conversar
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-branco-neve"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-preto-fosco/95 backdrop-blur-xl border-b border-dark-border py-6 flex flex-col items-center gap-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 hover:text-destaque transition-colors cursor-pointer text-lg font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
