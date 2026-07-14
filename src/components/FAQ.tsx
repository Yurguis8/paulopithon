import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

interface FAQCollapseItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQCollapseItem({ question, answer, isOpen, onToggle }: FAQCollapseItemProps) {
  return (
    <div className="border border-white/5 bg-tactical-dark/50 rounded-sm overflow-hidden transition-colors hover:border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 pr-4">
          <HelpCircle className="h-5 w-5 text-tactical-yellow flex-shrink-0 mt-0.5" />
          <h3 className="font-display font-semibold text-white text-sm sm:text-base leading-snug">
            {question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 p-1.5 bg-tactical-gray border border-white/5 rounded-full text-gray-400"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 border-t border-white/5 font-sans text-xs sm:text-sm text-gray-400 leading-relaxed pl-14 pr-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative z-20 bg-tactical-dark py-24 lg:py-32 overflow-hidden">
      {/* Decorative radar pulses */}
      <div className="absolute right-10 top-1/2 w-80 h-80 bg-tactical-yellow/[0.015] border border-tactical-yellow/5 rounded-full pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-80 h-80 bg-tactical-gold/[0.015] border border-tactical-gold/5 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16">
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight max-w-2xl mb-6">
            DÚVIDAS FREQUENTES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-yellow to-white">
              SOBRE OS TREINAMENTOS
            </span>
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl leading-relaxed">
            Seja em relação à legalidade, segurança ou preparação corporal, nós esclarecemos tudo de forma transparente e direta.
          </p>
        </div>

        {/* Collapsible FAQ list */}
        <div className="space-y-4">
          {FAQS.map((item) => (
            <React.Fragment key={item.id}>
              <FAQCollapseItem
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
