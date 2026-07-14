import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle, ShieldCheck, Instagram, Facebook } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import Logo from './Logo';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'pistola-mulher',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API or direct dispatch
    setIsSubmitted(true);
    
    // Build direct WhatsApp trigger for instant reservation fallback
    setTimeout(() => {
      const courseName =
        formData.course === 'pistola-mulher'
          ? 'Curso de Pistola — Feminino'
          : 'Curso de Pistola — Masculino';

      window.open(
        getWhatsAppUrl(
          `Olá! Enviei um formulário de reserva pelo site e gostaria de agendar:\n\n` +
            `*Nome:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*WhatsApp:* ${formData.phone}\n` +
            `*Treinamento Desejado:* ${courseName}\n` +
            `*Mensagem:* ${formData.message}`
        ),
        '_blank'
      );
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'pistola-mulher',
        message: ''
      });
      setIsSubmitted(false);
    }, 1800);
  };

  return (
    <section id="contato" className="relative z-20 bg-tactical-graphite pt-24 border-t border-white/5 overflow-hidden">
      
      {/* Visual tech grid overlays */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tactical-yellow/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16">
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight max-w-2xl mb-6">
            COMECE SUA CAPACITAÇÃO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-yellow to-white">
              AGENDE HOJE MESMO
            </span>
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl leading-relaxed">
            Preencha o formulário abaixo para pré-reservar sua vaga. Nossa equipe de instrutores entrará em contato via WhatsApp para confirmar seus documentos obrigatórios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Reservation Form column */}
          <div className="lg:col-span-7 bg-tactical-dark border border-white/5 p-8 sm:p-10 rounded-sm relative">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2">Nome Completo</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Amanda Silva"
                        className="w-full bg-tactical-gray border border-white/5 focus:border-tactical-yellow text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-sans placeholder:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2">WhatsApp / Celular</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ex: (11) 99999-9999"
                        className="w-full bg-tactical-gray border border-white/5 focus:border-tactical-yellow text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-sans placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2">E-mail</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: amanda@exemplo.com"
                        className="w-full bg-tactical-gray border border-white/5 focus:border-tactical-yellow text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-sans placeholder:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2">Treinamento Pretendido</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full bg-tactical-gray border border-white/5 focus:border-tactical-yellow text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-sans appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23E1AD01' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                      >
                        <option value="pistola-mulher">Curso de Pistola — Feminino</option>
                        <option value="pistola-homem">Curso de Pistola — Masculino</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2">Mensagem ou Observação Especial</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Fale um pouco sobre seus objetivos (Ex: Sou iniciante, tenho medo de recuo, etc.)"
                      rows={4}
                      className="w-full bg-tactical-gray border border-white/5 focus:border-tactical-yellow text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-sans placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
                    <p className="font-mono text-[10px] text-gray-500 max-w-xs leading-normal">
                      * Seus dados estão 100% protegidos respeitando a LGPD.
                    </p>
                    
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-tactical-yellow to-tactical-gold hover:from-tactical-yellow-hover hover:to-tactical-yellow text-tactical-dark font-display font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      Enviar e Pré-Reservar
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  className="flex flex-col items-center justify-center py-20 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="p-4 bg-tactical-yellow/10 rounded-full border border-tactical-yellow/30 mb-6 text-tactical-yellow">
                    <CheckCircle className="h-12 w-12 animate-bounce" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">SOLICITAÇÃO RECEBIDA!</h3>
                  <p className="text-gray-400 font-sans text-sm max-w-sm mb-6">
                    Estamos processando seus dados. Você será redirecionada para o nosso canal de atendimento tático no WhatsApp em segundos...
                  </p>
                  <div className="w-16 h-1 bg-tactical-yellow rounded-full overflow-hidden">
                    <div className="h-full bg-white animate-[shimmer_1.5s_infinite] w-8" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Details / Corporate Address Column */}
          <div className="lg:col-span-5 space-y-10 pr-2">
            
            {/* Info details */}
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-tactical-gray border border-white/5 rounded-sm text-tactical-yellow mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm uppercase">Sede de Instrução</h4>
                    <p className="text-gray-400 text-xs sm:text-sm font-sans mt-0.5">
                      Clube de Tiro CAVIG – São Cristóvão, Salvador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-tactical-gray border border-white/5 rounded-sm text-tactical-yellow mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm uppercase">WhatsApp</h4>
                    <p className="text-gray-400 text-xs sm:text-sm font-sans mt-0.5">
                      +55 (71) 99130-6291
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-tactical-gray border border-white/5 rounded-sm text-tactical-yellow mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm uppercase">Email de Suporte</h4>
                    <a
                      href="mailto:paulopithon.direito@gmail.com"
                      className="text-gray-400 hover:text-tactical-yellow text-xs sm:text-sm font-sans mt-0.5 transition-colors"
                    >
                      paulopithon.direito@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-tactical-gray border border-white/5 rounded-sm text-tactical-yellow mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm uppercase">Horário Operacional</h4>
                    <p className="text-gray-400 text-xs sm:text-sm font-sans mt-0.5">
                      08:30 às 17:30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Credential badges and Compliance checks */}
            <div className="bg-tactical-dark/30 border border-white/5 p-6 rounded-sm space-y-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-tactical-yellow flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                CONFORMIDADE LEGAL & SEGURANÇA
              </h4>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Nossa academia cumpre rigorosamente as normas regulamentadas pelo Decreto Federal de Armas e as resoluções da Polícia Federal e Comando do Exército (COLOG). Não vendemos armas nem intermediamos negociações informais de armamentos de fogo.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="font-mono text-[9px] text-gray-500 bg-tactical-gray px-2 py-1 rounded-sm border border-white/5">EXÉRCITO REGISTRO: SIGMA-1845</span>
                <span className="font-mono text-[9px] text-gray-500 bg-tactical-gray px-2 py-1 rounded-sm border border-white/5">CRED. PF N° 239/26</span>
              </div>
            </div>

          </div>
        </div>

        {/* Corporate Base Footer Grid */}
        <footer className="mt-24 border-t border-white/5 pt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed max-w-sm">
              Paulo Pithon — policial, instrutor de armamento e tiro, palestrante, formado em
              direito, pós-graduando em neurociência e comportamento humano em combate. Capacitação
              tática e autodefesa para o público feminino com rigor técnico e responsabilidade.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/paulopithon?igsh=MW91NmdtMnh2dTNjaA==" target="_blank" rel="noreferrer" className="p-2 bg-tactical-gray hover:bg-tactical-yellow hover:text-tactical-dark text-gray-400 rounded-full transition-colors border border-white/5">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/share/19HgogHWSt/" target="_blank" rel="noreferrer" className="p-2 bg-tactical-gray hover:bg-tactical-yellow hover:text-tactical-dark text-gray-400 rounded-full transition-colors border border-white/5">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Acesso Rápido</h4>
            <ul className="space-y-2.5 font-mono text-[11px] text-gray-400">
              <li><a href="#inicio" className="hover:text-tactical-yellow transition-colors">Voltar ao Início</a></li>
              <li><a href="#pilares" className="hover:text-tactical-yellow transition-colors">Nossos Pilares</a></li>
              <li><a href="#cursos" className="hover:text-tactical-yellow transition-colors">Vitrine de Cursos</a></li>
              <li><a href="#instrutor" className="hover:text-tactical-yellow transition-colors">Instrutores</a></li>
              <li><a href="#palestras" className="hover:text-tactical-yellow transition-colors">Palestras</a></li>
              <li><a href="#faq" className="hover:text-tactical-yellow transition-colors">Esclarecer Dúvidas</a></li>
            </ul>
          </div>

          {/* Col 3: Safe Storage Notice / Brazilian Legal requirement badge */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-tactical-yellow uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5" />
              AVISO DE RESPONSABILIDADE
            </h4>
            <p className="text-gray-500 font-sans text-xs leading-relaxed italic border-l-2 border-tactical-yellow pl-4">
              "O manuseio de armas de fogo exige responsabilidade, rigor técnico e idoneidade mental comprovada por psicólogo credenciado. Guarde sua arma sempre descarregada, sob chapa e cadeado, em local seguro e totalmente fora do alcance de crianças e adolescentes."
            </p>
          </div>

        </footer>

        {/* Copyright notice at very bottom */}
        <div className="border-t border-white/[0.03] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-600">
          <p>© 2026 Paulo Pithon — Instrutor de Armamento e Tiro. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            Desenvolvido com Rigor Técnico Policial
          </p>
        </div>

      </div>
    </section>
  );
}
