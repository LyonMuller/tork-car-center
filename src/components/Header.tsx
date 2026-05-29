import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Car } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_FORMATTED } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Sintomas', href: '#sintomas' },
    { label: 'Como Funciona', href: '#funcionamento' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsAppLink = getWhatsAppLink("Olá Tork! Acessei o site de vocês e gostaria de tirar uma dúvida sobre serviços automotivos.");

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/95 backdrop-blur-md py-4 shadow-xl border-b border-neutral-800/80'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo element */}
          <a
            href="#"
            className="group cursor-pointer flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* High-fidelity Vector Logo */}
            <div className="relative w-40 sm:w-48 lg:w-56 h-auto transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 300 100" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="tork-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff4b4b" />
                    <stop offset="50%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </linearGradient>
                  
                  <linearGradient id="glow-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="20%" stopColor="#dc2626" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ff4b4b" />
                    <stop offset="80%" stopColor="#dc2626" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>

                  <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* TORK Text Path Approximation */}
                {/* Due to the custom racing font, building an exact path makes it look premium */}
                <g transform="skewX(-15) translate(30, 0)">
                  {/* T */}
                  <path d="M10,20 L60,20 L60,35 L42,35 L42,65 L25,65 L25,35 L10,35 Z" fill="url(#tork-grad)" stroke="#ff4b4b" strokeWidth="0.5" />
                  {/* O */}
                  <path d="M60,20 L95,20 C105,20 110,25 110,35 L110,50 C110,60 105,65 95,65 L60,65 C50,65 45,60 45,50 L45,35 C45,25 50,20 60,20 Z M62,35 L62,50 L93,50 L93,35 Z" fill="url(#tork-grad)" stroke="#ff4b4b" strokeWidth="0.5" />
                  {/* R */}
                  <path d="M115,20 L155,20 C165,20 170,25 170,33 C170,40 165,45 155,45 L132,45 L132,65 L115,65 L115,20 Z M132,33 L152,33 L152,35 L132,35 Z M145,45 L170,65 L150,65 L132,48 L132,45 Z" fill="url(#tork-grad)" stroke="#ff4b4b" strokeWidth="0.5" />
                  {/* K */}
                  <path d="M175,20 L192,20 L192,38 L215,20 L235,20 L205,42 L238,65 L215,65 L192,46 L192,65 L175,65 Z" fill="url(#tork-grad)" stroke="#ff4b4b" strokeWidth="0.5" />
                </g>
                
                {/* Horizontal Glow Laser */}
                <rect x="20" y="72" width="260" height="2" fill="url(#glow-line)" filter="url(#neon-glow)" />
                <rect x="100" y="70" width="100" height="6" fill="#ff4b4b" filter="url(#neon-glow)" opacity="0.3" />

                {/* CAR CENTER Text */}
                <text x="150" y="90" fontFamily="monospace, sans-serif" fontSize="14" fontWeight="bold" fill="#ffffff" letterSpacing="6" textAnchor="middle" style={{fontVariant: 'small-caps'}}>
                  CAR CENTER
                </text>
              </svg>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-6 gap-3 lg:gap-4 xl:gap-6 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-[#dc2626] py-2 px-3 hover:bg-neutral-900/50 rounded-sm transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact CTA */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href={`tel:${WHATSAPP_FORMATTED.replace(/\s+/g, '')}`}
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <Phone className="h-3 w-3 text-red-500" />
              {WHATSAPP_FORMATTED}
            </a>
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] text-black hover:bg-[#128C7E] hover:text-white transition-all duration-200 font-bold text-xs uppercase tracking-widest rounded-sm flex items-center gap-2 shadow-lg shadow-[#25D366]/15 hover:shadow-xl hover:shadow-[#25D366]/25"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current shrink-0" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2.5 rounded-sm bg-[#25D366] text-black hover:bg-[#128C7E] hover:text-white transition-colors duration-200 shadow-md shadow-[#25D366]/15"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current shrink-0" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-sm bg-neutral-900 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors duration-200 focus:outline-none border border-neutral-800"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 absolute top-full left-0 right-0 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left w-full py-3 px-4 text-xs font-bold uppercase tracking-widest text-neutral-300 hover:text-[#dc2626] hover:bg-neutral-900/60 rounded-sm transition-all duration-200 flex items-center justify-between border-b border-neutral-900/60"
                >
                  <span>{link.label}</span>
                  <span className="text-neutral-600 group-hover:text-[#dc2626] transition-colors">→</span>
                </button>
              ))}
              <div className="pt-4 px-2 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-neutral-400 py-1.5 font-mono">
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0 fill-current" />
                  <span>{WHATSAPP_FORMATTED}</span>
                </div>
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] text-black hover:bg-[#128C7E] hover:text-white transition-all duration-200 font-bold text-xs uppercase tracking-widest rounded-sm shadow-lg shadow-[#25D366]/10"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
