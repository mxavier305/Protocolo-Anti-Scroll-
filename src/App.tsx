/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  Smartphone, 
  Brain, 
  Clock, 
  Zap, 
  Lock, 
  Star, 
  ShieldCheck, 
  ChevronRight,
  ArrowRight,
  MonitorOff,
  BatteryCharging,
  Users,
  Fingerprint
} from 'lucide-react';
import { motion } from 'motion/react';

const CTA_BUY_URL = "#"; // Target URL for purchase

export default function App() {

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-primary selection:text-bg-dark bg-mesh">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-bg-dark" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">PROTOCOLO <span className="text-primary">ANTI-SCROLL</span></span>
          </div>
          <a 
            href={CTA_BUY_URL}
            className="hidden md:flex bg-primary hover:bg-primary-dark text-bg-dark px-5 py-2 rounded-full font-bold text-sm transition-all glow-blue items-center gap-2"
          >
            Acesso Imediato <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-6">
              ⚠️ Seu foco não sumiu. Ele foi roubado.
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-bold leading-[1.1] mb-8">
              Você senta pra fazer algo importante… <span className="text-primary">e acaba no celular sem nem perceber.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Recupere seu foco e controle mental em 21 dias mesmo que hoje sua mente fuja de tudo que exige esforço.
            </p>

            {/* Credibility Elements */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      className="w-8 h-8 rounded-full border-2 border-bg-dark" 
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-left leading-tight">
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="w-3 h-3 fill-primary" />
                    <Star className="w-3 h-3 fill-primary" />
                    <Star className="w-3 h-3 fill-primary" />
                    <Star className="w-3 h-3 fill-primary" />
                    <Star className="w-3 h-3 fill-primary" />
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                    +5.240 pessoas reprogramadas
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-50 grayscale contrast-125">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest italic">
                  <Brain className="w-4 h-4" /> Neurociência Aplicada
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest italic">
                  <ShieldCheck className="w-4 h-4" /> Método Validado
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest italic outline-none">
                  <Fingerprint className="w-4 h-4" /> Testado e Aprovado
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Identification Section */}
      <section className="py-16 bg-card/30 border-y border-white/5 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Video VSL Section */}
          <div className="mb-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video w-full rounded-[32px] overflow-hidden border-4 border-primary/20 glow-blue bg-black group cursor-pointer"
            >
              {/* Placeholder UI for Video */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-bg-dark to-transparent">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-bg-dark border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
              
              {/* Optional: Actual iframe could go here if user provides URL */}
              {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/XXXXX" title="VSL" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </motion.div>
            <p className="mt-6 font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-primary">
              clique para ver: o segredo da dopamina
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> Vídeo Exclusivo para Alunos e Interessados
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Isso soa <span className="text-primary">familiar</span>?
              </h2>
              
              <div className="space-y-8 text-lg md:text-2xl text-slate-300 leading-relaxed">
                <p>
                  Você abre o Instagram <span className="text-primary font-bold">“só 5 minutos”</span>... <br />
                  <span className="text-slate-500">e perde horas.</span>
                </p>

                <p>
                  Tenta focar... <br />
                  <span className="text-slate-500">mas sua mente <span className="text-primary italic">foge</span>.</span>
                </p>

                <div className="py-6">
                  <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-3">E no fundo, você sabe:</p>
                  <p className="text-2xl md:text-4xl text-white font-bold border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-2xl">
                    “Eu tô desperdiçando minha vida.”
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-slate-400">Não é falta de disciplina.</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    Seu cérebro foi <span className="text-primary underline underline-offset-8 decoration-4">viciado</span> pra isso.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Smartphone />, label: "Vício Digital" },
                { icon: <Clock />, label: "Procrastinação" },
                { icon: <Brain />, label: "Falta de Foco" },
                { icon: <Zap />, label: "Ansiedade" }
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl mb-6">O Sequestro da sua <span className="text-primary">Dopamina</span></h2>
          <p className="text-slate-400 leading-relaxed text-lg italic">
            "Você não é preguiçoso. Você está apenas com o sistema de recompensa do seu cérebro quebrado."
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "A Armadilha dos 15 Segundos",
              desc: "O conteúdo curto gera picos de dopamina instantâneos, destruindo sua capacidade de focar em coisas reais.",
              icon: <Smartphone className="w-10 h-10" />
            },
            {
              title: "Efeito Névoa Mental",
              desc: "O excesso de informação inútil cria uma 'névoa' que impede você de pensar com clareza e tomar decisões.",
              icon: <Brain className="w-10 h-10" />
            },
            {
              title: "Paralisia da Perfeição",
              desc: "Ao ver a vida perfeita dos outros o tempo todo, você se sente inferior e para de agir nos seus próprios planos.",
              icon: <Lock className="w-10 h-10" />
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-card p-10 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {item.icon}
              </div>
              <h3 className="text-2xl mb-4 relative z-10">{item.title}</h3>
              <p className="text-slate-400 relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Solution Introduction */}
      <section className="py-16 bg-primary text-bg-dark px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl mb-8 font-display font-bold tracking-tight">Protocolo <span className="text-black">Anti-Scroll</span></h2>
          <p className="text-xl md:text-3xl font-bold mb-16 max-w-3xl mx-auto leading-tight">
            O passo a passo exato pra você parar de perder horas no celular e voltar a ter controle da sua mente — <span className="underline decoration-bg-dark/20">sem depender de força de vontade.</span>
          </p>
          
          <div className="bg-bg-dark/5 backdrop-blur-sm rounded-[40px] p-10 md:p-16 border border-bg-dark/10 inline-block text-left shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3">
              <Zap className="w-8 h-8 fill-bg-dark" /> ⚡ Inclui:
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 text-xl md:text-2xl font-bold group">
                <div className="w-16 h-16 bg-bg-dark text-primary rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform">📲</div>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-6 text-xl md:text-2xl font-bold group">
                <div className="w-16 h-16 bg-bg-dark text-primary rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform">🎯</div>
                <span>Metas diárias simples</span>
              </div>
              <div className="flex items-center gap-6 text-xl md:text-2xl font-bold group">
                <div className="w-16 h-16 bg-bg-dark text-primary rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform">🧠</div>
                <span>Reprogramação do foco em 21 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Phases Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl mb-4">O Caminho da <span className="text-primary">Liberdade</span></h2>
            <p className="text-slate-400">Dividido em 3 fases estratégicas para garantir que você não desista.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />
            
            {[
              {
                phase: "01",
                title: "Desintoxicação",
                desc: "Os primeiros 2 dias focados em remover os gatilhos externos e limpar o excesso de estímulo digital.",
                icon: <MonitorOff />
              },
              {
                phase: "02",
                title: "Reprogramação",
                desc: "Substituição de hábitos vazios por atividades de 'Dopamina Profunda' que geram satisfação real.",
                icon: <Brain />
              },
              {
                phase: "03",
                title: "Blindagem",
                desc: "Criando um sistema anti-recaída para que você use a tecnologia a seu favor, não contra você.",
                icon: <ShieldCheck />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="bg-primary text-bg-dark w-16 h-16 rounded-2xl flex items-center justify-center font-display text-2xl font-bold">
                  {item.phase}
                </div>
                <div className="p-8 bg-card rounded-3xl border border-white/5 h-full">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-16 bg-card/20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-10">O que acontece quando você <br/> <span className="text-primary">domina sua mente?</span></h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Foco inabalável para trabalhar ou estudar horas a fio",
              "Fim da ansiedade ao pegar no celular",
              "Melhoria drástica na qualidade do sono",
              "Mais tempo livre para hobbies e pessoas reais",
              "Autoconfiança ao cumprir o que prometeu a si mesmo",
              "Clareza mental para planejar seu futuro financeiro"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 px-6 bg-mesh">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-4 italic text-primary">Aproveite os Bônus Exclusivos</h2>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-bold">Apenas para quem agir hoje</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🧠 BÔNUS #1: Protocolo Sono Alpha (Desligue sua mente em 10 minutos)",
                desc: "Pare de deitar cansado e acordar pior. Você vai aprender como desligar o cérebro acelerado e acordar com energia real.",
                val: "R$ 67,00",
                icon: <Lock />
              },
              {
                title: "📵 BÔNUS #2: Sistema Blindado Anti-Distração (Minimalismo Digital 2.0)",
                desc: "Transforme seu celular de inimigo em ferramenta. Configuração pronta pra eliminar distrações sem precisar de força de vontade.",
                val: "R$ 47,00",
                icon: <Smartphone />
              },
              {
                title: "🚨 BÔNUS #3: SOS Anti-Recaída (Nunca mais volte ao zero)",
                desc: "Travou? Perdeu o foco? Em minutos você volta pro controle sem cair no ciclo de culpa e procrastinação.",
                val: "R$ 57,00",
                icon: <Zap />
              }
            ].map((bonus, idx) => (
              <div key={idx} className="bg-card p-10 rounded-3xl border border-primary/20 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                      {bonus.icon}
                    </div>
                    <h3 className="text-xl font-bold">{bonus.title}</h3>
                  </div>
                  <p className="text-slate-400 mb-6 flex-grow">{bonus.desc}</p>
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                    <span className="text-sm line-through text-slate-500">Valor real: {bonus.val}</span>
                    <span className="text-primary font-bold">HOJE: GRÁTIS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-bg-dark px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-10 underline decoration-primary/30 underline-offset-8">Resultados Reais</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              {
                name: "Lucas Pereira",
                role: "Programador",
                text: "Eu não conseguia codar por 20 minutos sem abrir o Twitter. Esse protocolo me salvou. Minha produtividade dobrou em uma semana.",
                rating: 5
              },
              {
                name: "Mariana Costa",
                role: "Estudante",
                text: "Sempre me sentia culpada por perder tempo no TikTok. Hoje eu leio 40 páginas por dia sem esforço. É bizarro o quanto o cérebro muda.",
                rating: 5
              },
              {
                name: "Roberto Silva",
                role: "Empreendedor",
                text: "A clareza mental que ganhei vale 10x o valor do protocolo. Recomendo para todo mundo que vive estressado.",
                rating: 5
              },
              {
                name: "Ana Julia",
                role: "Designer",
                text: "Meus níveis de ansiedade caíram drasticamente. Parar de scrolar foi a melhor decisão que tomei no ano.",
                rating: 5
              },
              {
                name: "Henrique",
                role: "Freelancer",
                text: "O guia do sono é sensacional. Acordo descansado de verdade pela primeira vez em anos.",
                rating: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="break-inside-avoid-column bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div className="pt-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-amber-500/80 font-bold text-sm flex items-center justify-center gap-2"
        >
          ⚠️ R$17 por tempo limitado
        </motion.p>
      </div>
      <section className="pb-16 pt-6 px-6 text-center">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-[40px] border-4 border-primary p-12 text-center relative shadow-2xl"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-bg-dark font-bold py-2 px-8 rounded-full text-sm uppercase tracking-widest whitespace-nowrap">
              Investimento Exclusivo
            </div>
            
            <div className="mb-6 space-y-2 text-center">
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Tudo o que você vai receber:</p>
              <ul className="text-[10px] text-slate-400 space-y-1 mb-4 flex flex-col items-center">
                <li className="flex justify-between w-full max-w-[200px]"><span>Protocolo Anti-Scroll</span> <span>R$ 127,00</span></li>
                <li className="flex justify-between w-full max-w-[200px]"><span>Bônus 1: Protocolo Sono Alpha</span> <span>R$ 67,00</span></li>
                <li className="flex justify-between w-full max-w-[200px]"><span>Bônus 2: Sistema Blindado</span> <span>R$ 47,00</span></li>
                <li className="flex justify-between w-full max-w-[200px]"><span>Bônus 3: SOS Anti-Recaída</span> <span>R$ 57,00</span></li>
                <li className="flex justify-between w-full max-w-[200px] font-bold border-t border-white/10 pt-1 text-white/60"><span>SOMA TOTAL:</span> <span>R$ 298,00</span></li>
              </ul>
              <div className="bg-red-500/10 text-red-500 text-[10px] font-bold py-1 px-3 rounded-md inline-block">
                VOCÊ ECONOMIZA: R$ 281,00
              </div>
            </div>

            <p className="text-slate-200 font-bold uppercase tracking-widest text-xs mb-2">Acesso Completo Hoje Por:</p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-2xl font-bold text-primary">R$</span>
              <span className="text-7xl font-display font-bold text-primary">17</span>
              <div className="text-left">
                <span className="block text-2xl font-bold text-primary">,00</span>
                <span className="text-xs text-slate-500 uppercase tracking-tighter">Pagamento Único</span>
              </div>
            </div>

            <a 
              href={CTA_BUY_URL}
              className="w-full bg-primary hover:bg-primary-dark text-bg-dark py-5 rounded-2xl font-bold text-xl transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              SIM, QUERO COMEÇAR AGORA <ChevronRight className="w-6 h-6" />
            </a>

            <p className="mt-8 text-xs text-slate-500 flex items-center justify-center gap-2">
              <Lock className="w-3 h-3" /> Pagamento 100% Seguro & Criptografado
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto bg-card/40 p-8 md:p-12 rounded-[32px] border border-white/5 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          
          {/* Professional Guarantee Badge */}
          <div className="relative flex-shrink-0">
            <div className="w-40 h-40 rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] whitespace-nowrap">
                  Satisfação Garantida • Risco Zero • 
                </span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 bg-primary rounded-full shadow-[0_0_40px_rgba(0,229,255,0.4)] flex flex-col items-center justify-center text-bg-dark">
                <ShieldCheck className="w-10 h-10 mb-1" />
                <span className="text-2xl font-display font-bold leading-none">7</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Dias</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl mb-4">Garantia Blindada de <span className="text-primary">7 Dias</span></h2>
            <p className="text-slate-400 leading-relaxed italic text-lg">
              "Eu confio tanto no meu método que te dou 7 dias de teste completo. Se você não sentir seu cérebro mais leve, focado e produtivo, basta me enviar um único e-mail. Eu devolvo cada centavo do seu investimento imediatamente. O risco é 100% meu."
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display mb-10 max-w-4xl mx-auto leading-tight">
          A próxima vez que você pegar o celular… <br />
          <span className="text-primary italic">ou você controla… ou você é controlado.</span>
        </h2>
        
        <div className="space-y-4 mb-10">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Hoje você decide:</p>
          <p className="text-2xl md:text-4xl text-white font-bold leading-tight">
            Você manda na sua mente <br />
            <span className="text-slate-500 text-lg md:text-2xl font-normal block my-2">ou</span> 
            <span className="text-primary">o algoritmo manda em você?</span>
          </p>
        </div>

        <a 
          href={CTA_BUY_URL}
          className="inline-flex bg-primary hover:bg-primary-dark text-bg-dark px-8 md:px-16 py-6 md:py-8 rounded-3xl font-bold text-xl md:text-3xl transition-all glow-blue items-center gap-4 hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(0,229,255,0.2)]"
        >
          QUERO RETOMAR O CONTROLE DA MINHA VIDA <ArrowRight className="w-8 h-8" />
        </a>
        <p className="mt-6 text-slate-500 text-xs md:text-sm font-medium flex items-center justify-center gap-2">
          🔒 Compra segura | Acesso imediato | Garantia de 7 dias
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-card/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "Preciso deletar minhas redes sociais?", a: "Não. O objetivo é reprogramar seu sistema de recompensa para que você use com moderação e controle, não o contrário." },
              { q: "Tenho déficit de atenção, funciona para mim?", a: "Sim. O protocolo foi projetado justamente para mentes inquietas que sofrem com excesso de informação." },
              { q: "Como recebo o acesso?", a: "Imediatamente no seu e-mail após a confirmação do pagamento." },
              { q: "Posso parcelar?", a: "Sim, em até 5x no cartão ou à vista no PIX." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-card rounded-2xl border border-white/5 p-6 cursor-pointer">
                <summary className="font-bold flex items-center justify-between list-none">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-primary group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Trust Section */}
      <footer className="py-16 px-6 bg-slate-950/50 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 mb-12 text-left">
            {/* Security */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary/80">
                <Lock className="w-4 h-4" />
                <h4 className="font-bold text-sm tracking-tight text-slate-200">🔒 Compra 100% Segura e Protegida</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Você está em um ambiente totalmente seguro. Seus dados são criptografados e protegidos durante toda a compra.
              </p>
            </div>

            {/* Social Proof */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary/80">
                <Users className="w-4 h-4" />
                <h4 className="font-bold text-sm tracking-tight text-slate-200">👥 Mais de 5.000 pessoas já retomaram o controle</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Todos os dias, pessoas comuns estão saindo do vício em celular e recuperando foco, clareza e produtividade com esse método.
              </p>
            </div>

            {/* Delivery */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary/80">
                <Zap className="w-4 h-4" />
                <h4 className="font-bold text-sm tracking-tight text-slate-200">⚡ Acesso Imediato</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Após a confirmação do pagamento, você recebe acesso na hora diretamente no seu e-mail.
              </p>
            </div>

            {/* Guarantee */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary/80">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="font-bold text-sm tracking-tight text-slate-200">🛡️ Garantia Incondicional de 7 Dias</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Se por qualquer motivo você não sentir diferença no seu foco e controle…
                <br /><br />
                <span className="text-slate-300">Basta enviar um e-mail e você recebe 100% do seu dinheiro de volta.</span>
                <br />
                Sem perguntas. Sem burocracia.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 text-center">
            <div className="mb-8 space-y-4">
              <h5 className="text-white/40 font-bold uppercase tracking-widest text-[10px]">📄 Aviso Importante</h5>
              <p className="text-slate-600 text-[10px] leading-relaxed max-w-xl mx-auto uppercase tracking-tight">
                Este produto não substitui acompanhamento médico ou psicológico profissional.
                Os resultados podem variar de acordo com a dedicação e aplicação de cada pessoa.
              </p>
            </div>

            <div className="space-y-1">
              <h5 className="text-white/40 font-bold uppercase tracking-widest text-[10px]">🏢 Informações Legais</h5>
              <p className="text-slate-700 text-[11px]">
                © 2024 Protocolo Anti-Scroll | Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
