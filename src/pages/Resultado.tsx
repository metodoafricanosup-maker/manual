import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Shield, Clock } from "lucide-react";
import antesImg from "@/assets/antes.png";
import depoisImg from "@/assets/depois.png";
import jornalImg from "@/assets/jornal.png";

export default function Resultado() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
              Seu Resultado <span className="text-primary">Personalizado</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Com base nas suas respostas, identificamos seu perfil e criamos um plano ideal para você
            </p>
          </motion.div>

          {/* Before/After Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Before Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={antesImg}
                  alt="Antes"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* After Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={depoisImg}
                  alt="Depois"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Newspaper Screenshot */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={jornalImg}
                alt="Matéria de jornal"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 sm:p-12 mb-12 border border-primary/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Seu Potencial de Crescimento:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Aumento de 4-7cm</p>
                  <p className="text-gray-400 text-sm">Crescimento natural e permanente</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Resultados em 30 dias</p>
                  <p className="text-gray-400 text-sm">Mudanças visíveis já na primeira semana</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">100% Natural</p>
                  <p className="text-gray-400 text-sm">Sem medicamentos ou cirurgias</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Método Comprovado</p>
                  <p className="text-gray-400 text-sm">Usado por mais de 12.847 homens</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-[#1e293b] rounded-xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-black text-primary mb-2">98.4%</p>
              <p className="text-sm text-gray-400">Taxa de satisfação</p>
            </div>
            
            <div className="bg-[#1e293b] rounded-xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-black text-primary mb-2">15 min</p>
              <p className="text-sm text-gray-400">Por dia apenas</p>
            </div>
            
            <div className="bg-[#1e293b] rounded-xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-black text-primary mb-2">7 dias</p>
              <p className="text-sm text-gray-400">Garantia total</p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Pronto para Transformar sua Vida?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Acesse agora o Método Africano completo e comece hoje mesmo
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://pay.cakto.com.br/35ij337_646326"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md"
              >
                <Button
                  size="lg"
                  className="w-full bg-black hover:bg-gray-900 text-white font-bold text-xl py-8 rounded-xl transition-all duration-300 shadow-2xl shadow-black/50 hover:shadow-black/70"
                >
                  GARANTIR MEU ACESSO AGORA
                </Button>
              </a>
              
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Compra 100% segura e garantida</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              * Resultados podem variar de pessoa para pessoa. O Método Africano é um programa de exercícios naturais e não substitui orientação médica profissional.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
