import React from 'react';
import { Clock, MapPin, Phone, Car, ArrowUp } from 'lucide-react';
import { ADDRESS_TEXT, HOURS_TEXT, WHATSAPP_FORMATTED, getWhatsAppLink, GOOGLE_MAPS_LINK } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 text-neutral-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Column 1: Info and description */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              onClick={handleBackToTop}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-[#dc2626] flex items-center justify-center rounded-sm font-black text-black text-xl italic">
                T
              </div>
              <span className="text-xl font-display font-black tracking-tighter uppercase italic text-white">
                <span className="text-[#dc2626]">TORK</span> <span>CAR CENTER</span>
              </span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mt-3">
              Oferecemos mecânica, ar-condicionado, parte elétrica e estética automotiva em Joinville. Unimos alta competência com uma experiência simples e direta, sem enrolações.
            </p>
          </div>

          {/* Column 2: Quick navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Navegação</h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-neutral-400">
              <li>
                <a href="#servicos" className="hover:text-[#dc2626] transition-colors duration-200">Serviços Especializados</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#dc2626] transition-colors duration-200">Nossos Diferenciais</a>
              </li>
              <li>
                <a href="#sintomas" className="hover:text-[#dc2626] transition-colors duration-200">Painel de Sintomas</a>
              </li>
              <li>
                <a href="#funcionamento" className="hover:text-[#dc2626] transition-colors duration-200">Como Trabalhamos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#dc2626] transition-colors duration-200">Depoimentos</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#dc2626] transition-colors duration-200">Localização</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact quick-access */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Canais de Atendimento</h4>
            <ul className="space-y-3.5 text-xs font-mono">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#dc2626] shrink-0 mt-0.5" />
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-neutral-300 font-sans text-xs leading-snug"
                >
                  {ADDRESS_TEXT}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#dc2626] shrink-0" />
                <span className="text-neutral-300 font-sans text-xs">{HOURS_TEXT}</span>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0 fill-current" />
                <a
                  href={getWhatsAppLink("Olá! Acessei o site de vocês e gostaria de agendar uma revisão do meu veículo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-neutral-300 hover:underline text-xs font-sans"
                >
                  {WHATSAPP_FORMATTED}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-550 uppercase tracking-wider">
          <p>© {currentYear} Tork Car Center Joinville. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Atendimento prático e sem enrolações</span>
            <button
              onClick={handleBackToTop}
              className="p-2.5 rounded-sm bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-neutral-800 cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
