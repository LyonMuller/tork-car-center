import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wrench, Wind, Zap, Sparkles, Check, AlertTriangle, Trash2, ShieldCheck, Clock } from 'lucide-react';
import { SERVICES_DATA, getWhatsAppLink } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

export default function InteractiveDiagnostic() {
  const [activeTab, setActiveTab] = useState('mecanica');
  const [selectedSymptoms, setSelectedSymptoms] = useState<Record<string, string[]>>({
    mecanica: [],
    'ar-condicionado': [],
    eletrica: [],
    estetica: [],
  });

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className={className} />;
      case 'Wind': return <Wind className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      default: return <Wrench className={className} />;
    }
  };

  const handleToggleSymptom = (serviceId: string, symptom: string) => {
    setSelectedSymptoms((prev) => {
      const currentList = prev[serviceId] || [];
      const updatedList = currentList.includes(symptom)
        ? currentList.filter((item) => item !== symptom)
        : [...currentList, symptom];
      return { ...prev, [serviceId]: updatedList };
    });
  };

  const handleClearAll = () => {
    setSelectedSymptoms({
      mecanica: [],
      'ar-condicionado': [],
      eletrica: [],
      estetica: [],
    });
  };

  const getSymptomCount = (): number => {
    return (Object.values(selectedSymptoms) as string[][]).reduce((acc: number, curr: string[]) => acc + curr.length, 0);
  };

  const getTotalSelectedForCategory = (id: string) => {
    return selectedSymptoms[id]?.length || 0;
  };

  // Build perfectly formatted Portuguese message for WhatsApp dispatch
  const handleSendWhatsApp = () => {
    let message = `Olá Tork Car Center! Acessei o site de vocês de Joinville e montei uma listagem de sintomas/serviços que meu carro está precisando no momento:\n\n`;
    
    let hasItems = false;
    SERVICES_DATA.forEach((service) => {
      const items = selectedSymptoms[service.id] || [];
      if (items.length > 0) {
        hasItems = true;
        const iconPrefix = service.id === 'mecanica' ? '🔧' : service.id === 'ar-condicionado' ? '❄️' : service.id === 'eletrica' ? '⚡' : '✨';
        message += `${iconPrefix} *${service.title}*:\n`;
        items.forEach((item) => {
          message += `  • ${item}\n`;
        });
        message += `\n`;
      }
    });

    if (!hasItems) {
      message = "Olá Tork Car Center! Acessei o site de vocês de Joinville e gostaria de solicitar um agendamento/orçamento de serviços para o meu veículo.";
    } else {
      message += `Gostaria de agendar uma avaliação prática na unidade de vocês no Petrópolis para corrigir esses pontos.`;
    }

    const link = getWhatsAppLink(message);
    window.open(link, '_blank');
  };

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];
  const totalCount = getSymptomCount();

  return (
    <section id="sintomas" className="py-20 bg-neutral-905 border-y border-neutral-800 relative overflow-hidden">
      {/* Decorative radial lighting representing auto garage diagnostics background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#dc2626]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block py-1 px-3 mb-4 bg-neutral-900 border-l-4 border-[#dc2626] text-[10px] uppercase font-bold tracking-widest text-[#dc2626] rounded-sm">
            Painel de Diagnóstico Rápido
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mt-4 uppercase italic tracking-tighter">
            Seu carro precisa de atenção?
          </h2>
          <p className="text-neutral-450 mt-3 text-sm">
            Selecione as falhas ou serviços desejados abaixo para gerar um resumo imediato e encaminhar diretamente para a nossa equipe no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service selectors and symptoms checkbox section */}
          <div className="lg:col-span-8 bg-neutral-950 rounded-sm border border-neutral-800/80 p-6 md:p-8 shadow-2xl">
            {/* Nav tabs for services */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-neutral-900">
              {SERVICES_DATA.map((service) => {
                const isSelected = activeTab === service.id;
                const count = getTotalSelectedForCategory(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 relative border cursor-pointer ${
                      isSelected
                        ? 'bg-[#dc2626] text-white border-[#dc2626]'
                        : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-850 border-neutral-800'
                    }`}
                  >
                    {getIcon(service.iconName, `h-4 w-4 ${isSelected ? 'text-white' : 'text-[#dc2626]'}`)}
                    <span>{service.title}</span>
                    {count > 0 && (
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm ${
                          isSelected ? 'bg-black text-[#dc2626] font-bold' : 'bg-red-950/40 text-red-500 border border-red-900/20'
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active service description */}
            <div className="my-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                Sinais comuns em: <span className="text-[#dc2626] italic">{activeService.title}</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {activeService.description}
              </p>
            </div>

            {/* Checkbox item listing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-2">
              {activeService.symptoms.map((symptom) => {
                const isChecked = selectedSymptoms[activeService.id]?.includes(symptom);
                return (
                  <button
                    key={symptom}
                    onClick={() => handleToggleSymptom(activeService.id, symptom)}
                    className={`flex items-start text-left gap-3.5 p-4 rounded-sm border text-xs tracking-wide transition-all duration-300 group cursor-pointer ${
                      isChecked
                        ? 'bg-red-950/10 border-[#dc2626]/40 text-white'
                        : 'bg-neutral-900/40 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                  >
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border transition-all duration-200 mt-0.5 ${
                        isChecked
                          ? 'bg-[#dc2626] border-[#dc2626] text-white'
                          : 'border-neutral-700 bg-neutral-950 group-hover:border-neutral-500'
                      }`}
                    >
                      {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <span className="leading-tight">{symptom}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Diagnostic compilation and action callout sidebar */}
          <div className="lg:col-span-4 bg-neutral-950 rounded-sm border border-neutral-800/80 p-6 md:p-8 shadow-2xl relative">
            <h3 className="text-xs font-mono text-neutral-400 tracking-wider uppercase border-b border-neutral-900 pb-4 flex items-center justify-between">
              <span>Painel de Escolhas</span>
              {totalCount > 0 && (
                <button
                  onClick={handleClearAll}
                  className="text-xs text-rose-450 hover:text-rose-400 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                  title="Limpar seleção"
                >
                  <Trash2 className="h-3 w-3" />
                  <span>Limpar</span>
                </button>
              )}
            </h3>

            {/* Active symptoms readout */}
            <div className="mt-6 min-h-[160px]">
              {totalCount === 0 ? (
                <div className="flex flex-col items-center justify-center py-6 text-center text-neutral-505">
                  <AlertTriangle className="h-8 w-8 text-neutral-700 mb-2 stroke-[1.5]" />
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-450">Nenhum sintoma selecionado ainda</p>
                  <p className="text-[11px] text-neutral-600 mt-1 max-w-[200px] mx-auto font-sans leading-relaxed">
                    Navegue pelas abas e marque os problemas que deseja corrigir.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2">
                  {SERVICES_DATA.map((service) => {
                    const items = selectedSymptoms[service.id] || [];
                    if (items.length === 0) return null;
                    return (
                      <div key={service.id} className="text-xs">
                        <h4 className="font-bold uppercase tracking-wider text-[#dc2626] flex items-center gap-1 mr-2 bg-neutral-900 px-2 py-1 rounded-sm border border-neutral-800">
                          {getIcon(service.iconName, 'h-3.5 w-3.5')}
                          <span>{service.title} ({items.length})</span>
                        </h4>
                        <ul className="mt-1.5 pl-4 list-disc space-y-1 text-neutral-300">
                          {items.map((it) => (
                            <li key={it} className="hover:text-white transition-colors">
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Real credibility values */}
            <div className="mt-6 pt-6 border-t border-neutral-900 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-neutral-400">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Avaliação transparente e sem compromisso</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-400">
                <Clock className="h-4 w-4 text-emerald-500" />
                <span>Retorno do orçamento em Joinville</span>
              </div>
            </div>

            {/* Lead button */}
            <div className="mt-6">
              <button
                onClick={handleSendWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-black hover:text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 shadow-xl shadow-[#25D366]/15 group cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current shrink-0" />
                <span>Encaminhar no WhatsApp</span>
              </button>
              <p className="text-[10px] text-center text-neutral-500 mt-2.5 font-mono uppercase tracking-wider">
                Sem custos extras • Resposta rápida de segunda a sexta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
