import React from 'react';
import { motion } from 'motion/react';
import {
  Wrench,
  Wind,
  Zap,
  Sparkles,
  MessageSquareText,
  Layers,
  ShieldCheck,
  Clock,
  Smile,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  Car,
  AlertTriangle,
  HelpCircle,
  ArrowDown
} from 'lucide-react';
import WhatsAppIcon from './components/WhatsAppIcon';

import Header from './components/Header';
import InteractiveDiagnostic from './components/InteractiveDiagnostic';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

import {
  HERO_CONTENT,
  SERVICES_DATA,
  DIFFERENTIALS_DATA,
  STEPS_DATA,
  ADDRESS_TEXT,
  HOURS_TEXT,
  WHATSAPP_FORMATTED,
  getWhatsAppLink,
  GOOGLE_MAPS_LINK
} from './data';
import { IMAGES } from './images';

export default function App() {
  const getServiceIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className={className} />;
      case 'Wind': return <Wind className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      default: return <Wrench className={className} />;
    }
  };

  const getDifferentialIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'MessageSquareText': return <MessageSquareText className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Clock': return <Clock className={className} />;
      case 'Smile': return <Smile className={className} />;
      case 'CheckCircle2': return <CheckCircle2 className={className} />;
      default: return <CheckCircle2 className={className} />;
    }
  };

  const scrollToSintomas = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#sintomas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased overflow-x-hidden selection:bg-[#dc2626] selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        {/* Visual background image representing high-fidelity workshop */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroWorkshop}
            alt="Tork Car Center Joinville Workshop"
            className="w-full h-full object-cover object-center opacity-25 transform scale-102 filter brightness-50"
            referrerPolicy="no-referrer"
          />
          {/* Radial visual twilight blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
        </div>

        {/* Hero content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Brand copy & core buttons */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block py-1 px-3 mb-4 bg-neutral-900 border-l-4 border-[#dc2626] text-[10px] uppercase font-bold tracking-widest text-[#dc2626] rounded-sm"
              >
                Especialista Automotivo em Joinville
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6.5xl font-display font-black tracking-tighter uppercase leading-[0.95] text-white"
              >
                Tudo o que seu carro <br />precisa em <span className="text-neutral-400 italic font-light underline decoration-[#dc2626]/50">um só lugar.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl font-sans italic"
              >
                Mecânica, ar-condicionado, elétrica e estética automotiva com atendimento prático, comunicação clara e foco em resolver o problema do seu carro sem complicação.
              </motion.p>

              {/* Responsive calls buttons with Elegant Dark sharp outline aesthetics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <a
                  href={getWhatsAppLink("Olá Tork! Vi o site de vocês e gostaria de agendar uma revisão para o meu carro.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-black hover:text-white font-bold uppercase text-xs tracking-widest transition-all rounded-sm duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/15 hover:shadow-xl hover:shadow-[#25D366]/25"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>
                <a
                  href="#sintomas"
                  onClick={scrollToSintomas}
                  className="px-8 py-4 bg-transparent border border-neutral-700 hover:bg-neutral-900 text-white font-bold uppercase text-xs tracking-widest transition-all rounded-sm duration-200 text-center"
                >
                  <span>Solicitar Atendimento</span>
                </a>
              </motion.div>

              {/* Bullet info highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-neutral-900 max-w-2xl text-[11px] text-neutral-400 font-mono tracking-wider uppercase"
              >
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 p-3 rounded-sm bg-neutral-900 border border-neutral-800 hover:border-red-600/30 transition-colors"
                >
                  <MapPin className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Petrópolis, R. São Paulo, 4619</span>
                </a>
                <div className="flex items-start gap-2.5 p-3 rounded-sm bg-neutral-900 border border-neutral-800">
                  <Clock className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Segunda a sexta: 08h às 18h</span>
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 p-3 rounded-sm bg-neutral-900 border border-neutral-800 hover:border-red-600/30 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0 fill-current" />
                  <span>WhatsApp: {WHATSAPP_FORMATTED}</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Mini brand badge block or detail graphic of Why Us */}
            <div className="hidden lg:col-span-12 xl:col-span-5 relative flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-8 rounded-sm bg-neutral-900 border border-neutral-800 shadow-2xl relative w-full max-w-sm"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-widest">Premium Service</span>
                </div>
                <div className="h-10 w-10 bg-[#dc2626]/10 border border-[#dc2626]/30 rounded-sm flex items-center justify-center text-[#dc2626] mb-6 font-bold italic font-display">
                  T
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white">Nossa Promessa</h3>
                <p className="text-neutral-400 text-xs mt-3 leading-relaxed font-sans">
                  Instalação certificada e excelência automotiva na região de Joinville com clareza comercial, agilidade pontual e profissionais prontos para diagnosticar e resolver falhas sem enrolações.
                </p>
                <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
                  <span className="text-[#dc2626] font-bold">✓ Joinville - SC</span>
                  <span className="text-neutral-500">Unidade Petrópolis</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Opening Intro Section */}
      <section className="py-20 bg-neutral-950 relative border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden shadow-2xl border border-neutral-800">
                <img
                  src={IMAGES.detailingService}
                  alt="Tork Car Center detailing"
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block py-1 px-3 bg-neutral-900 border-l-4 border-[#dc2626] text-[10px] uppercase font-bold tracking-widest text-[#dc2626] rounded-sm">
                Por que a Tork?
              </div>
              <h2 className="text-3xl md:text-4.5xl font-display font-black text-white italic uppercase tracking-tighter leading-none">
                Seu carro precisa de atenção? A Tork Car Center resolve.
              </h2>
              <div className="space-y-4 text-neutral-305 text-sm md:text-base leading-relaxed font-sans">
                <p>
                  Na Tork Car Center, você encontra para o seu carro serviços automotivos essenciais em um só lugar, com mais praticidade para cuidar do seu veículo no dia a dia.
                </p>
                <p>
                  Seja para manutenção, parte elétrica, ar-condicionado ou estética, o objetivo é simples: entregar uma solution eficiente, com atendimento direto e sem enrolação.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink("Olá Tork! Quero solicitar atendimento diagnóstico para meu carro agora mesmo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-widest transition-all rounded-sm inline-flex items-center gap-2"
                >
                  <span>Quero atendimento agora</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 bg-neutral-950 border-y border-neutral-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-sm border border-neutral-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Visual focus element highlighting friction and pain */}
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <AlertTriangle className="h-24 w-24 text-rose-500" />
            </div>

            <div className="max-w-3xl space-y-6">
              <div className="inline-block py-1 px-3 bg-neutral-950 border-l-4 border-rose-500 text-[10px] uppercase font-bold tracking-widest text-rose-500 rounded-sm">
                O Grande Dilema dos Proprietários
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-black text-white italic uppercase tracking-tighter leading-none">
                Chega de perder tempo levando o carro para vários lugares
              </h2>
              
              <div className="h-1 w-16 bg-rose-500/70 rounded-none" />

              <div className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed">
                <p className="font-medium text-neutral-200">
                  Quem tem carro sabe como isso vira dor de cabeça no cotidiano.
                </p>
                <p>
                  Um lugar para mecânica, outro para elétrica, outro para ar-condicionado, outro para estética. Além do tempo perdido em deslocamentos desnecessários em Joinville, ainda fica aquela constante dúvida sobre onde realmente vão resolver o problema com a devida atenção, responsabilidade técnica e honestidade.
                </p>
                <p className="font-semibold text-[#dc2626] flex items-center gap-2">
                  <span>→</span> A proposta da Tork Car Center é facilitar sua vida e centralizar o cuidado do seu carro em um único lugar seguro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (Service Catalog) */}
      <section id="servicos" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block py-1 px-3 mb-4 bg-neutral-900 border-l-4 border-[#dc2626] text-[10px] uppercase font-bold tracking-widest text-[#dc2626] rounded-sm">
              Soluções Integradas
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic tracking-tighter">
              A solução do seu carro em um lugar
            </h2>
            <p className="text-neutral-400 mt-3 text-sm">
              A Tork Car Center oferece atendimento automotivo pensado para quem busca praticidade, cuidado e mais tranquilidade na hora de resolver o que seu veículo precisa.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-neutral-900 border border-neutral-800/80 rounded-sm overflow-hidden flex flex-col hover:border-[#dc2626]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#dc2626]/5 group"
              >
                {/* Visual card thumbnail preview */}
                <div className="relative h-44 overflow-hidden bg-neutral-950">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-transform duration-505"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-md p-1.5 rounded-sm border border-neutral-800">
                    {getServiceIcon(service.iconName, 'h-4 w-4 text-[#dc2626]')}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-wide text-white group-hover:text-[#dc2626] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-[11px] text-neutral-550 mt-3 italic font-sans border-t border-neutral-950 pt-2.5">
                      {service.longDescription}
                    </p>
                  </div>
                  <div className="pt-5 mt-4 border-t border-neutral-950 flex justify-between items-center text-xs">
                    <span className="text-neutral-500 font-mono">Joinville / SC</span>
                    <a
                      href="#sintomas"
                      onClick={scrollToSintomas}
                      className="text-[#dc2626] font-bold uppercase tracking-wider text-[11px] group-hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Ver sintomas</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Symptom Planner Insertion */}
      <InteractiveDiagnostic />

      {/* Differentials Bento Section */}
      <section id="diferenciais" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block py-1 px-3 mb-4 bg-neutral-900 border-l-4 border-[#dc2626] text-[10px] uppercase font-bold tracking-widest text-[#dc2626] rounded-sm">
              Nossas Prerrogativas
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mt-4 uppercase italic tracking-tighter">
              Por que escolher a Tork Car Center?
            </h2>
            <p className="text-neutral-405 mt-3 text-sm">
              A prioridade de nossa marca é entregar soluções eficientes que facilitem a rotina no cuidado com o automóvel.
            </p>
          </div>

          {/* Differentials grids - 6 items layout with sharp styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIALS_DATA.map((diff, index) => (
              <div
                key={diff.id}
                className="bg-neutral-900 border border-neutral-800/80 rounded-sm p-6 hover:border-red-600/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-10 w-10 rounded-sm bg-[#dc2626]/5 border border-[#dc2626]/20 text-[#dc2626] flex items-center justify-center group-hover:bg-[#dc2626] group-hover:text-white transition-colors duration-300">
                    {getDifferentialIcon(diff.iconName, 'h-5 w-5')}
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-white mt-5 group-hover:text-red-500 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed font-sans">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800 text-center relative overflow-hidden">
        {/* Decorative backdrop light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#dc2626]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-semibold text-red-500 tracking-widest uppercase font-mono">
            Nosso Posicionamento Comercial
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter uppercase italic">
            Mais praticidade para você. Mais cuidado para o seu carro.
          </h2>
          <div className="h-1 w-20 bg-[#dc2626] mx-auto my-6 rounded-none" />
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Na Tork Car Center, o cliente encontra uma proposta simples: resolver o que o carro precisa com mais facilidade, em um só lugar e com atendimento comercial claro.
          </p>
          <p className="text-[#dc2626] text-base md:text-lg font-bold pt-3 italic font-sans uppercase tracking-widest">
            Porque cuidar do veículo não deveria ser complicado.
          </p>
        </div>
      </section>

      {/* Functioning Steps Section */}
      <section id="funcionamento" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block py-1 px-3 mb-4 bg-neutral-900 border-l-4 border-[#dc2626] text-[10px] uppercase font-bold tracking-widest text-[#dc2626] rounded-sm">
              Sem Complicação
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mt-4 uppercase italic tracking-tighter">
              Veja como é simples cuidar de seu carro com a Tork Car Center
            </h2>
            <p className="text-neutral-400 mt-3 text-sm">
              Nosso processo é desenhado em quatro etapas descomplicadas para poupar seu tempo.
            </p>
          </div>

          {/* Steps Timeline Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {STEPS_DATA.map((step, index) => (
              <div key={step.number} className="relative group">
                
                {/* Horizontal progress indicator line for desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] right-[-40%] h-[1px] bg-neutral-800 group-hover:bg-[#dc2626]/30 transition-colors duration-300" />
                )}

                <div className="bg-neutral-900 border border-neutral-800/60 hover:border-neutral-700/80 p-6 rounded-sm h-full transition-all duration-300">
                  <div className="inline-flex items-center justify-center font-mono font-bold text-neutral-800 group-hover:text-[#dc2626] transition-colors text-5xl mb-4 pr-1">
                    0{step.number}
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-20 bg-neutral-905 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Location Copy & actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block py-1 px-3 bg-neutral-900 border-l-4 border-[#dc2626] text-[10px] uppercase font-bold tracking-widest text-[#dc2626] rounded-sm">
                Joinville - SC
              </div>
              <h2 className="text-3xl md:text-4.5xl font-display font-black text-white italic uppercase tracking-tighter">
                Atendimento em Joinville
              </h2>
              
              <div className="space-y-4 text-sm md:text-base border-l-2 border-[#dc2626] pl-4 py-2">
                <p className="text-neutral-100 font-bold uppercase tracking-wider text-xs">
                  Tork Car Center
                </p>
                <p className="text-neutral-400 font-sans text-xs">
                  {ADDRESS_TEXT}
                </p>
                <div className="pt-2 text-xs font-mono text-neutral-400">
                  <span className="font-bold text-red-500 block uppercase text-[10px] tracking-widest">Horário de funcionamento:</span>
                  {HOURS_TEXT}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Ver rota no mapa</span>
                </a>
                <a
                  href={getWhatsAppLink("Olá Tork! Gostaria de agendar uma avaliação na unidade de vocês na rua São Paulo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#25D366] text-[#25D366] bg-neutral-900 hover:bg-[#25D366] hover:text-black font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current shrink-0" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed and Frame */}
            <div className="lg:col-span-7">
              <div className="bg-neutral-950 p-2 rounded-sm border border-neutral-800 shadow-2xl overflow-hidden relative group">
                {/* Embedded Maps point using sandboxed compliant iframe */}
                <iframe
                  title="Tork Car Center Localização"
                  src="https://maps.google.com/maps?q=R.%20S%C3%A3o%20Paulo,%204619%20-%20Petr%C3%B3polis,%20Joinville%20-%20SC&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-none grayscale contrast-[1.1] invert-[0.9] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intermediário CTA */}
      <section className="py-20 bg-neutral-950 relative overflow-hidden">
        {/* Amber glow sphere behind banner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#dc2626]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-2xl md:text-4.5xl font-display font-black text-white italic uppercase tracking-tighter">
            Seu carro está pedindo atenção?
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Fale agora com a Tork Car Center e descubra a melhor solução para o seu veículo.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink("Olá Tork! Meu carro está precisando de atenção. Gostaria de falar com um especialista de vocês.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-black hover:text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 block sm:inline-block text-center shadow-lg shadow-[#25D366]/10"
            >
              <span>Falar com a equipe</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQs Section */}
      <FaqSection />

      {/* Fechamento Final Section banner with high-contrast graphic */}
      <section className="py-24 bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden text-center border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="inline-flex h-12 w-12 rounded-sm bg-[#dc2626]/10 border border-[#dc2626]/20 items-center justify-center text-[#dc2626] mx-auto">
            <Car className="h-6 w-6" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white italic uppercase tracking-tighter">
              Seu carro merece praticidade, cuidado e solução.
            </h2>
            <p className="text-neutral-400 mt-3 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Na Tork Car Center, você encontra atendimento automotivo em um só lugar para resolver com mais facilidade o que o seu veículo precisa.
            </p>
          </div>

          <div className="pt-4">
            <a
              href={getWhatsAppLink("Olá! Gostaria de agendar o atendimento do meu carro via agendamento WhatsApp para resolver com mais facilidade.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-black hover:text-white font-bold uppercase text-xs tracking-widest rounded-sm transition-all duration-200 inline-flex items-center gap-2 shadow-xl shadow-[#25D366]/15 hover:shadow-2xl hover:shadow-[#25D366]/25"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current shrink-0" />
              <span>Agendar atendimento no WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
            Joinville • Estética • Elétrica • Mecânica • Conforto do Ar
          </div>
        </div>
      </section>

      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={getWhatsAppLink("Olá Tork! Acessei o site de vocês e gostaria de agendar uma avaliação automotiva.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        {/* Banner de apoio de texto */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out bg-neutral-900 border border-neutral-800 text-white text-[10px] font-bold uppercase tracking-wider py-2 px-3.5 rounded-full shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 whitespace-nowrap">
          Falar com Especialista
        </span>
        {/* Bolha do botão */}
        <div className="w-14 h-14 bg-[#25D366] text-black hover:text-white hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 relative">
          {/* Animação de pulso radial para guiar o clique */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
          <WhatsAppIcon className="h-7 w-7 fill-current relative z-10" />
        </div>
      </a>
    </div>
  );
}
