/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  Fingerprint,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

const CTA_BUY_URL = "https://pay.lowify.com.br/checkout?product_id=XorCrD"; // Target URL for purchase

export default function App() {

  const scrollToCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('checkout');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-primary selection:text-bg-dark bg-mesh">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-bg-dark" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">PROTOCOLO <span className="text-primary">ANTI-SCROLL</span></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center w-full"
          >
            {/* Hero Image / Visualization - MOVED TO TOP */}
            <div className="relative w-full max-w-4xl mx-auto mb-12 group px-4">
              <div className="absolute inset-0 bg-orange-500/30 blur-[130px] rounded-full -z-10 group-hover:bg-orange-500/50 transition-all duration-1000 opacity-60" />
              <div className="relative z-10 overflow-hidden rounded-2xl md:rounded-[40px] border-2 border-orange-500/50 shadow-[0_0_80px_rgba(249,115,22,0.4),inset_0_0_40px_rgba(249,115,22,0.15)] bg-bg-dark/80 backdrop-blur-2xl transition-all duration-1000 group-hover:shadow-[0_0_120px_rgba(249,115,22,0.6),inset_0_0_60px_rgba(249,115,22,0.25)] group-hover:border-orange-400">
                {/* Visual Texture / Grain for Detail */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10 mix-blend-overlay pointer-events-none z-20" />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-white/5 pointer-events-none z-20" />
                
                <img 
                  src="https://i.ibb.co/p6zDdHMN/image.png" 
                  alt="Protocolo Premium"
                  className="w-full h-auto transition-all duration-1000 group-hover:scale-[1.05] brightness-[1.08] contrast-[1.2] saturate-[1.15] filter drop-shadow-[0_0_30px_rgba(255,94,0,0.4)]"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    transform: 'translate3d(0,0,0)',
                    backfaceVisibility: 'hidden',
                  }}
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Advanced Light Leak / Lens Flare */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent blur-[80px] rotate-45 pointer-events-none z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-transparent to-bg-dark/10 pointer-events-none z-10" />
                
                {/* Tech Overlays for 'High Def' feel */}
                <div className="absolute top-8 right-10 flex flex-col items-end gap-1.5 z-30 hidden md:flex select-none">
                  <div className="px-2 py-0.5 border border-orange-500/50 rounded-sm bg-orange-500/10 backdrop-blur-md">
                    <div className="text-[9px] font-mono text-orange-500 font-black uppercase tracking-[0.5em] leading-none">
                      8K MASTER RECORD
                    </div>
                  </div>
                  <div className="text-[8px] font-mono text-white/40 uppercase tracking-[0.2em]">
                    SENSITIVITY: HIGH-RANGE
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-10 flex flex-col items-start gap-2 z-30 hidden md:flex select-none">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_#f97316]" />
                    <span className="text-[9px] font-mono text-orange-400/80 uppercase tracking-widest font-bold">Dynamic HDR Active</span>
                  </div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
                    Cinematic Rendering / Logic: 0x4F92
                  </div>
                </div>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8 animate-pulse">
              <Zap className="w-4 h-4 fill-primary" /> Alerta: Sua atenção está sendo monetizada
            </span>
            
            <h1 className="text-4xl md:text-8xl font-display font-black leading-[1] mb-8 tracking-tighter">
              A DISTRAÇÃO <br />
              <span className="text-primary italic">TE CUSTA CARO.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed md:leading-[1.6]">
              O protocolo neurológico que reprograma seu cérebro para quebrar o vício em dopamina barata <span className="text-white font-bold">em poucos dias.</span>
            </p>

            {/* Mobile-First Primary CTA */}
            <div className="w-full max-w-md mx-auto mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToCheckout}
                className="w-[90%] md:w-full bg-cta text-bg-dark py-6 md:py-8 rounded-3xl font-black text-xl md:text-2xl transition-all shadow-[0_20px_50px_rgba(255,94,0,0.3)] flex items-center justify-center gap-4 mx-auto"
              >
                QUERO MEU FOCO DE VOLTA <ArrowRight className="w-6 h-6" />
              </motion.button>
              <p className="text-[9px] text-slate-600 mt-3 font-medium opacity-80">
                Acesso imediato após a confirmação
              </p>
              
              <div className="mt-6 flex flex-col items-center gap-4">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3 h-3" /> Acesso imediato • Compra Segura
                </p>
                
                  <div className="flex flex-col items-center pt-4 border-t border-white/5 w-full">
                    <div className="flex items-center justify-center gap-1.5 text-yellow-500 mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-yellow-500" />)}
                      <span className="text-[10px] text-yellow-500/80 font-black ml-1">(4.9/5)</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-slate-400 uppercase font-bold tracking-widest flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-white font-black">+5.240 Alunos</span> Transformados
                    </p>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Identification Section */}
      <section className="pt-12 pb-24 bg-slate-950 border-y border-white/5 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.03),transparent)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">O Diagnóstico</span>
                <h2 className="text-4xl md:text-6xl font-display font-black leading-[1.1]">
                  POR QUE É TÃO <span className="text-primary italic">DIFÍCIL</span> PARAR?
                </h2>
              </div>
              
              <div className="space-y-8 text-lg md:text-xl text-slate-400 leading-relaxed">
                <p className="flex gap-4">
                  <span className="text-primary font-bold">01.</span>
                  <span>Você abre o Instagram <span className="text-white font-bold">"só pra checar uma notificação"</span> e 40 minutos depois ainda está lá.</span>
                </p>

                <p className="flex gap-4">
                  <span className="text-primary font-bold">02.</span>
                  <span>Seu cérebro está viciado em <span className="text-white font-bold italic">micro-recompensas</span> de dopamina que o algoritmo entrega de bandeja.</span>
                </p>

                <div className="p-8 bg-primary/5 border-l-4 border-primary rounded-r-3xl">
                  <p className="text-white font-black italic text-xl md:text-2xl leading-tight">
                    "Eu sinto que minha vida está passando diante dos meus olhos... e eu estou apenas assistindo através de uma tela de 6 polegadas."
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4">A dura realidade:</p>
                  <p className="text-2xl md:text-3xl text-white font-bold">
                    O algoritmo é mais <span className="text-primary">inteligente</span> que sua força de vontade.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="relative">
               <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
               <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <BatteryCharging className="rotate-90" />, title: "Energia Esgotada", desc: "Acordar cansado porque a última coisa que fez foi scrolar." },
                  { icon: <MonitorOff />, title: "Foco Fragmentado", desc: "Não conseguir ler 5 páginas sem pegar no celular." },
                  { icon: <Zap />, title: "Ansiedade Constante", desc: "A sensação de que está sempre perdendo algo importante." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Bridge Section */}
      <section className="py-16 px-6 bg-bg-dark">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xl md:text-3xl text-slate-300 font-medium leading-tight">
                Quantas vezes você prometeu pra si mesmo que ia parar?
              </p>
              <p className="text-xl md:text-3xl text-slate-300 font-medium leading-tight">
                Quantos projetos ficaram pra depois por causa disso?
              </p>
              <p className="text-xl md:text-3xl text-slate-300 font-medium leading-tight">
                Quantas noites você fechou o celular sentindo que desperdiçou mais um dia?
              </p>
            </div>
            
            <div className="flex justify-center py-4">
              <div className="w-12 h-1 bg-primary/20 rounded-full" />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
                Isso não é falta de disciplina. <br/>
                <span className="text-primary italic">É neurociência.</span>
              </h3>

              <motion.p 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration:0.6 }}
                className="text-4xl md:text-7xl font-black text-white/10 uppercase tracking-tighter"
              >
                Seu cérebro foi sequestrado.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl mb-6">O Sequestro do seu <span className="text-primary italic">Sistema de Recompensa</span></h2>
            <p className="text-slate-400 leading-relaxed text-lg max-w-2xl mx-auto">
              Sua dopamina natural foi hackeada por engenheiros do Vale do Silício. O objetivo? Manter você conectado, custe o que custar.
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
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-card p-10 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {item.icon}
              </div>
              <h3 className="text-2xl mb-4 relative z-10">{item.title}</h3>
              <p className="text-slate-400 relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6 italic text-lg lg:text-xl max-w-2xl mx-auto">
            “Existe um motivo psicológico que faz você perder horas no celular sem perceber…”
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-cta text-bg-dark px-10 py-6 rounded-full font-black text-lg md:text-xl uppercase tracking-tighter shadow-[0_0_50px_rgba(255,94,0,0.3)] hover:shadow-[0_0_70px_rgba(255,94,0,0.5)] transition-all"
          >
            QUERO ENTENDER COMO SAIR DISSO
            <ArrowRight className="w-6 h-6 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>

    {/* The Solution Introduction */}
    <section id="solution" className="py-24 bg-bg-dark px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl aspect-square bg-primary/5 blur-[150px] -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-10">
             <Sparkles className="w-4 h-4" /> Apresentando a Saída
          </div>
          
          <h2 className="text-5xl md:text-8xl mb-8 font-display font-black tracking-tight leading-none text-white">
            PROTOCOLO <br /> <span className="text-primary italic">ANTI-SCROLL.</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-medium mb-16 max-w-3xl mx-auto leading-relaxed text-slate-400">
            A única metodologia testada por <span className="text-white font-bold">5.240 alunos</span> capaz de hackear o sistema de recompensa do seu cérebro e devolver sua liberdade em poucos dias.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 border border-white/10 shadow-2xl space-y-8">
              <h3 className="text-2xl font-black flex items-center gap-3 text-white">
                <Brain className="w-6 h-6 text-primary" /> O que você recebe:
              </h3>
              <div className="space-y-6">
                {[
                  "Plano Executável de 7 Dias",
                  "Mecanismos de Bloqueio Neural",
                  "Técnicas de Foco Hiper-Concentrado"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-lg font-bold text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/90 rounded-[40px] p-10 shadow-[0_30px_60px_rgba(0,229,255,0.2)] flex flex-col justify-between items-center text-center">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-bg-dark/50">A Grande Mudança</span>
                <p className="text-3xl md:text-4xl font-black text-bg-dark leading-tight">
                  Recupere +4 horas do seu dia. <span className="text-white italic">Todas as semanas.</span>
                </p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToCheckout}
                className="w-full bg-cta text-bg-dark py-6 rounded-2xl font-black text-xl shadow-xl mt-12 flex items-center justify-center gap-3"
              >
                COMEÇAR O PROTOCOLO <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Phases Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Scientific Foundation Ribbon */}
          <div className="flex flex-wrap justify-center gap-8 mb-20 opacity-50 grayscale contrast-125">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest">Baseado em Neuroplasticidade</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest">Sistema de Dopamina</span>
            </div>
            <div className="flex items-center gap-2">
              <Fingerprint className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest">Metodologia Exclusiva</span>
            </div>
          </div>

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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
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
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-white/5"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-slate-200">{benefit}</span>
              </motion.div>
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
      <section className="py-24 bg-bg-dark px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-[120px] -z-10 rotate-12" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-6xl font-display font-black">RESULTADOS <span className="text-primary underline decoration-primary/30 underline-offset-8">REAIS</span></h2>
            <p className="text-slate-500 uppercase tracking-[0.4em] font-black text-xs">Prova Social • Verificado</p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
            {/* Phone Mockup Container */}
            <div className="relative group">
              {/* Phone Frame */}
              <div className="relative mx-auto border-slate-800 bg-slate-900 border-[12px] rounded-[3rem] h-[640px] w-[320px] shadow-[0_0_100px_rgba(0,229,255,0.1)] transition-shadow duration-500 group-hover:shadow-[0_0_120px_rgba(0,229,255,0.2)]">
                {/* Notch */}
                <div className="w-[140px] h-[30px] bg-slate-800 top-0 left-1/2 -translate-x-1/2 rounded-b-[1.5rem] absolute z-20" />
                
                {/* Screen Content - Scrolling Images */}
                <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-slate-950 relative">
                  <div className="absolute inset-0 overflow-y-auto scrollbar-hide space-y-4 p-4 py-10">
                    {[
                      "https://i.ibb.co/VYPs4p3d/image.png", // Speculative direct link
                      "https://i.ibb.co/GfXTjCb5/image.png",
                      "https://i.ibb.co/4Ry4Mw3C/image.png"
                    ].map((src, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
                      >
                        <img 
                          src={src} 
                          alt={`Resultado ${idx + 1}`}
                          className="w-full h-auto object-cover"
                          onError={(e) => {
                            // Fallback to viewer if direct link fails, though viewer might not show in img
                            const target = e.target as HTMLImageElement;
                            if (idx === 0) target.src = "https://ibb.co/VYPs4p3d";
                            if (idx === 1) target.src = "https://ibb.co/GfXTjCb5";
                            if (idx === 2) target.src = "https://ibb.co/4Ry4Mw3C";
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements around phone */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>

            {/* Testimonial Text / Caption */}
            <div className="max-w-md space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                  <Users className="w-4 h-4" /> Prova Social
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Pessoas comuns, <br />
                  <span className="text-primary italic">resultados reais.</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Essas são conversas de alunos que aplicaram o <span className="text-white font-bold">Protocolo Anti-Scroll</span> e recuperaram o controle da própria vida em tempo recorde.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 p-6 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-primary/20 transition-colors">
                  <div className="text-primary font-black text-3xl mb-1">98.7%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-tight">Taxa de <br/>Aprovação</div>
                </div>
                <div className="bg-card/50 p-6 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-primary/20 transition-colors">
                  <div className="text-primary font-black text-3xl mb-1">+5.2k</div>
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-tight">Alunos <br/>Ativos</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-cta text-bg-dark py-5 rounded-2xl font-bold text-xl transition-all shadow-lg flex items-center justify-center gap-3"
              >
                QUERO ESSES RESULTADOS <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="checkout" className="pt-20 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 border border-amber-500/20"
        >
          <Clock className="w-4 h-4" /> Oferta expira em poucos minutos
        </motion.div>
      </div>
      <section className="pb-24 pt-6 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card rounded-[48px] border-[5px] border-primary p-10 md:p-16 text-center relative shadow-[0_0_100px_rgba(0,229,255,0.15)] overflow-hidden"
          >
            {/* Visual Anchor */}
            <div className="absolute top-0 left-0 w-full h-2 bg-primary group-hover:h-3 transition-all" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
                RECUPERE SUA <br /> <span className="text-primary italic">VIDA HOJE.</span>
              </h3>

              <div className="space-y-4 mb-12">
                {[
                  { label: "Protocolo Anti-Scroll", price: "R$ 127" },
                  { label: "Protocolo Sono Alpha", price: "R$ 67" },
                  { label: "Sistema Blindado", price: "R$ 47" },
                  { label: "SOS Anti-Recaída", price: "R$ 57" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm md:text-base border-b border-white/5 pb-2">
                    <span className="text-slate-400 font-medium">{item.label}</span>
                    <span className="text-slate-500 line-through font-mono">{item.price}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 text-white">
                  <span className="font-black uppercase tracking-widest text-xs">Valor Total Estimado:</span>
                  <span className="font-mono line-through opacity-50 text-xl">R$ 298,00</span>
                </div>
              </div>

              <div className="mb-10 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Investimento Único</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-bold text-slate-500 line-through">R$ 97</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-primary">R$</span>
                    <span className="text-8xl md:text-9xl font-display font-black text-primary leading-none tracking-tighter">19</span>
                    <span className="text-4xl font-black text-primary">,99</span>
                  </div>
                </div>
                <p className="text-primary/60 text-[10px] font-black uppercase tracking-widest mt-2">Pagamento Único via PIX</p>
              </div>

              <a 
                href={CTA_BUY_URL}
                className="block w-full bg-cta hover:bg-cta-dark text-bg-dark py-8 rounded-[32px] font-black text-2xl transition-all shadow-[0_15px_40px_rgba(255,94,0,0.3)] hover:scale-[1.03] active:scale-[0.97] mb-8"
              >
                QUERO ACESSO IMEDIATO
              </a>

              <div className="flex items-center justify-center gap-8 opacity-50 contrast-125 grayscale scale-90">
                <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo.png" className="h-6 object-contain" alt="Pix" />
                <div className="text-[10px] font-black flex items-center justify-center whitespace-nowrap">100% SEGURO</div>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto bg-card/40 p-8 md:p-12 rounded-[32px] border border-white/5 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          
          {/* Professional Guarantee Badge */}
          <div className="relative flex-shrink-0 group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Rotating outer ring */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100">
                <path
                  id="curve"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className="text-[7.5px] font-bold uppercase tracking-[0.25em] fill-primary/60">
                  <textPath xlinkHref="#curve">
                    Garantia Incondicional • Risco Zero • Satisfação Total • 
                  </textPath>
                </text>
              </svg>
              
              {/* Inner Seal */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-full shadow-[0_0_50px_rgba(0,229,255,0.3)] flex flex-col items-center justify-center text-bg-dark border-4 border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
                <ShieldCheck className="w-12 h-12 mb-0.5 relative z-10" />
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-4xl font-display font-black leading-none -mb-1">7</span>
                  <span className="text-xs font-black uppercase tracking-widest">Dias</span>
                </div>
                <div className="absolute bottom-3 text-[7px] font-black uppercase tracking-[0.2em] opacity-40">
                  Seal of Trust
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl mb-4 font-display font-black">Garantia Blindada de <span className="text-primary">7 Dias</span></h2>
            <p className="text-slate-400 leading-relaxed italic text-lg md:text-xl">
              "Eu confio tanto no meu método que te dou 7 dias de teste completo. Se não sentir diferença, um e-mail — e eu devolvo tudo. <span className="text-white font-bold tracking-tight">O risco é 100% meu.</span>"
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
          href="#checkout"
          onClick={scrollToCheckout}
          className="inline-flex bg-cta hover:bg-cta-dark text-bg-dark px-8 md:px-16 py-6 md:py-8 rounded-3xl font-bold text-xl md:text-3xl transition-all glow-orange items-center gap-4 hover:scale-102 active:scale-98 shadow-[0_0_60px_rgba(255,94,0,0.2)]"
        >
          Quero recuperar meu foco hoje <ArrowRight className="w-8 h-8" />
        </a>

        <div className="mt-6 space-y-1 text-slate-500 text-xs md:text-sm flex flex-col items-center opacity-80">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" /> Acesso imediato
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" /> Aplicação em poucos minutos
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" /> Funciona já nos primeiros dias
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" /> Pagamento 100% Seguro & Criptografado
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-card/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "Preciso deletar minhas redes sociais?", a: "Não. O método ensina como usar o celular sem perder o controle da sua atenção." },
              { q: "Tenho dificuldade de foco, funciona para mim?", a: "Sim. O conteúdo foi criado justamente para pessoas que sofrem com distração, procrastinação e excesso de celular." },
              { q: "Como recebo o acesso?", a: "O acesso é enviado automaticamente logo após a confirmação do pagamento." },
              { q: "O acesso é vitalício?", a: "Sim. Você poderá acessar o conteúdo quando quiser." },
              { q: "Em quanto tempo começo a ver resultado?", a: "Muitas pessoas já percebem diferença nos primeiros dias aplicando o método." }
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
                <h4 className="font-bold text-sm tracking-tight text-slate-200">🛡️ Garantia Blindada de 7 Dias</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Se por qualquer motivo você não sentir diferença…
                <br /><br />
                <span className="text-slate-300">Basta enviar um e-mail e você recebe 100% do seu dinheiro de volta. O risco é totalmente nosso.</span>
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

      {/* Added Final Visual Anchor at the very end */}
      <section className="pb-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10 opacity-30" />
            <div className="relative z-10 overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_0_80px_rgba(255,94,0,0.2)] bg-bg-dark/40 backdrop-blur-xl">
              <img 
                src="https://i.ibb.co/p6zDdHMN/image.png" 
                alt="Protocolo Master Visual"
                className="w-full h-auto brightness-[1.08] contrast-[1.2] saturate-[1.15] group-hover:scale-[1.03] transition-transform duration-1000"
                loading="lazy"
                style={{ 
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translate3d(0,0,0)',
                  backfaceVisibility: 'hidden'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-0 right-0 text-center">
                 <p className="text-[10px] text-primary font-black uppercase tracking-[0.5em] opacity-40 mb-2">Final Protocol Visualization</p>
                 <div className="h-px w-24 bg-primary/20 mx-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Live Social Proof Notification */}
      <LiveFeedback />
    </div>
  );
}

function LiveFeedback() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [currentIdx, setCurrentIdx] = React.useState(0);
  
  const notifications = [
    { name: "Marcos S.", city: "São Paulo", time: "2 min atrás" },
    { name: "Jéssica R.", city: "Curitiba", time: "5 min atrás" },
    { name: "Thiago M.", city: "Belo Horizonte", time: "12 min atrás" },
    { name: "Ana P.", city: "Rio de Janeiro", time: "18 min atrás" },
    { name: "Ricardo L.", city: "Porto Alegre", time: "25 min atrás" },
  ];

  React.useEffect(() => {
    const showInterval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
      setCurrentIdx(prev => (prev + 1) % notifications.length);
    }, 12000);

    // Initial show
    const initialShowTimeout = setTimeout(() => setIsVisible(true), 3000);
    const initialHideTimeout = setTimeout(() => setIsVisible(false), 8000);

    return () => {
      clearInterval(showInterval);
      clearTimeout(initialShowTimeout);
      clearTimeout(initialHideTimeout);
    };
  }, [notifications.length]);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      className="fixed bottom-6 left-6 z-[60] bg-white text-bg-dark p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20 hidden md:flex"
    >
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative">
        <Users className="w-5 h-5 text-bg-dark" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
      </div>
      <div className="text-left">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none mb-1">Novo Acesso</p>
        <p className="text-sm font-bold leading-tight">
          {notifications[currentIdx].name} acaba de entrar
        </p>
        <p className="text-[10px] text-slate-400 font-medium">
          {notifications[currentIdx].city} • {notifications[currentIdx].time}
        </p>
      </div>
    </motion.div>
  );
}
