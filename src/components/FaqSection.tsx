import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS_DATA, getWhatsAppLink } from '../data';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const contactLink = getWhatsAppLink("Olá! Vi o FAQ no site de vocês e gostaria de agendar uma consulta para o meu veículo.");

  return (
    <section id="faq" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 mb-4 bg-neutral-900 border-l-4 border-[#dc2626] text-[10px] uppercase font-bold tracking-widest text-[#dc2626] rounded-sm">
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mt-4 uppercase italic tracking-tighter">
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-450 mt-3 text-sm">
            Encontre respostas diretas sobre os nossos serviços, localização em Joinville e formas de agendamento na Tork Car Center.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-neutral-900 border border-neutral-800/80 rounded-sm overflow-hidden hover:border-neutral-700/80 transition-all duration-305"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <HelpCircle className="h-5 w-5 text-[#dc2626] shrink-0 mt-0.5" />
                    <span className="text-base font-semibold text-neutral-100 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-sm bg-neutral-800 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-6 pt-0 border-t border-neutral-800/40 text-xs md:text-sm text-neutral-350 leading-relaxed font-sans pr-10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Small box helping users to directly reach out if they didn't find the answer */}
        <div className="mt-12 p-6 rounded-sm bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Não encontrou a resposta que procurava?</h4>
            <p className="text-xs text-neutral-400 mt-1">Estamos prontos para atender você de forma ágil e personalizada.</p>
          </div>
          <a
            href={contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-neutral-800 hover:bg-neutral-750 text-white font-bold text-xs uppercase tracking-widest border border-neutral-700 rounded-sm transition-all duration-200 cursor-pointer"
          >
            <span>Falar com um Especialista</span>
          </a>
        </div>

      </div>
    </section>
  );
}
