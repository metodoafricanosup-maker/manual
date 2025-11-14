import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Clock, ChevronRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-200">
      <main className="flex-grow">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white"
            >
              Método <span className="text-primary">Africano</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl sm:text-2xl font-bold max-w-3xl mx-auto text-gray-300"
            >
              Seu lápis pode crescer até 7cm. E sim — isso é 100% natural e possível em apenas 30 dias.
            </motion.p>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 space-y-6 max-w-3xl mx-auto text-base sm:text-lg text-gray-400"
            >
              <p>
                Você foi enganado: o problema não é o que você tem, mas o que seu corpo bloqueou. Não é genética. Não é idade. É compressão estrutural, causada por estresse, hábitos e alimentação.
              </p>
              <p className="font-bold text-gray-300">
                O Método Africano desbloqueia o crescimento do seu lápis de forma natural, aumentando de maneira segura, rápida e definitiva — sem medicamentos, bombas ou intervenções.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-col items-center"
            >
              <Link to="/quiz">
                <Button
                  size="lg"
                  className="relative gradient-green hover:opacity-90 text-white font-bold text-lg py-6 px-10 rounded-md transition-all duration-300 shadow-2xl shadow-secondary/40 hover:shadow-secondary/60 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative flex items-center gap-2">
                    REVELAR MEU POTENCIAL
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
              <p className="mt-4 text-sm text-gray-400">
                Diagnóstico personalizado em 2 minutos
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl font-black text-primary">4-7 cm</p>
                <p className="mt-2 text-sm text-gray-400">Tamanho do Lápis</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl font-black text-primary">15 min</p>
                <p className="mt-2 text-sm text-gray-400">Por dia</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl font-black text-primary">30 dias</p>
                <p className="mt-2 text-sm text-gray-400">Programa completo</p>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-[#0B1120]" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-[#0B1120]" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-[#0B1120]" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-[#0B1120]" />
                </div>
                <span className="text-gray-400">
                  <strong className="text-white">12.847+</strong> homens já descobriram seu potencial
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-xs text-gray-400 mt-16 pb-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 pt-8">
          <p>© 2025 Método Africano. Todos os direitos reservados.</p>
          <p className="max-w-md">
            Este site não está afiliado a nenhuma empresa farmacêutica ou médica. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </div>
  );
}
