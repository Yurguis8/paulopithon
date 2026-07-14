import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Pilares', href: '#pilares' },
    { label: 'Produtos', href: '#cursos' },
    { label: 'Instrutores', href: '#instrutor' },
    { label: 'Palestras', href: '#palestras' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getWhatsAppLink = () =>
    getWhatsAppUrl(
      'Olá! Gostaria de obter mais informações sobre os treinamentos táticos e equipamentos de autodefesa do Paulo Pithon.'
    );

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-tactical-dark/95 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-4 sm:py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="header-nav"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center min-w-0 max-w-[60vw] sm:max-w-none">
              <Logo showText={true} className="h-9 w-9 sm:h-12 sm:w-12" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-gray-300 hover:text-tactical-yellow transition-colors relative py-2 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-tactical-yellow transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-tactical-gray px-3 py-1.5 rounded-full border border-white/5">
                <ShieldCheck className="h-3.5 w-3.5 text-tactical-yellow" />
                Espaço Certificado
              </span>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-tactical-yellow to-tactical-gold hover:from-tactical-yellow-hover hover:to-tactical-yellow text-tactical-dark font-display font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-md hover:shadow-tactical-yellow/20 transition-all duration-300"
              >
                <Phone className="h-3.5 w-3.5 fill-current" />
                Atendimento
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-tactical-dark lg:hidden pt-20 sm:pt-24"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            id="mobile-drawer"
          >
            {/* Background pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,173,1,0.05),rgba(255,255,255,0))]" />
            
            <div className="relative z-10 px-6 py-8 flex flex-col h-full justify-between overflow-y-auto">
              <nav className="flex flex-col gap-5">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-2xl font-display font-semibold text-gray-200 hover:text-tactical-yellow transition-colors border-b border-white/5 pb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-4 mt-8 pb-12">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <ShieldCheck className="h-4 w-4 text-tactical-yellow" />
                  Instrutores experientes e de confiança
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-tactical-yellow to-tactical-gold hover:from-tactical-yellow-hover hover:to-tactical-yellow text-tactical-dark font-display font-semibold text-sm uppercase tracking-wider py-4 rounded-sm transition-all shadow-lg"
                >
                  <Phone className="h-4 w-4 fill-current" />
                  Iniciar Conversa no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
