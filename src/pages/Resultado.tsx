import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Star
} from "lucide-react";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { PurchaseNotification } from "../components/PurchaseNotification";
import antesImg from "@/assets/antes.png";
import depoisImg from "@/assets/depois.png";
import jornalImg from "@/assets/jornal.png";

export default function Resultado() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const urlParams = new URLSearchParams(window.location.search);
  const crescimento = urlParams.get('crescimento') || '3.5';
  const maximo = urlParams.get('maximo') || '17.5';
  const atual = urlParams.get('atual') || '14';

  const loadingSteps = [
    "Analisando seu perfil pessoal...",
    "Calculando seu potencial de crescimento...",
    "Gerando seu plano personalizado...",
    "Finalizando análise..."
  ];

  useEffect(() => {
    const stepDuration = 1500;
    let currentProgress = 0;
    
    const progressInterval = setInterval(() => {
      currentProgress += 2;
      setProgress(Math.min(currentProgress, 100));
      
      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 30);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, stepDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full"
        >
          <Card className="bg-slate-900 border-2 border-slate-800 rounded-lg p-8">
            <div className="text-center space-y-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/50"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white">
                  Processando suas respostas
                </h2>
                <motion.p
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gray-300 text-lg"
                >
                  {loadingSteps[currentStep]}
                </motion.p>
              </div>

              <div className="space-y-2">
                <Progress value={progress} className="h-2 bg-gray-800" />
                <p className="text-gray-400 text-sm">{progress}%</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <PurchaseNotification />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl text-white mb-2">
            Seu Resultado <span className="text-blue-500 font-bold">Personalizado</span>
          </h1>
          <p className="text-gray-400">Baseado no seu potencial de aumento</p>
        </motion.div>

        {/* Card principal do resultado */}
        <Card className="bg-slate-900 border-2 border-slate-800 rounded-lg p-8 md:p-10 text-center overflow-hidden relative">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Você pode aumentar até <span className="text-blue-500 text-4xl md:text-5xl">{crescimento}cm</span> do seu lápis
            </h2>

            <p className="text-gray-300 text-lg">
              Seu lápis tem potencial para crescer em<br/>
              <strong>apenas 30 dias</strong>
            </p>

            {/* Boxes de tamanho */}
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-2">Tamanho atual</p>
                <p className="text-white text-3xl font-bold">{atual}cm</p>
              </div>

              <div className="flex items-center justify-center">
                <ArrowDown className="w-8 h-8 text-blue-500 rotate-[-90deg]" />
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 border-2 border-blue-500 rounded-lg p-4 shadow-lg shadow-blue-500/30">
                <p className="text-blue-100 text-sm mb-2">Seu potencial máximo</p>
                <p className="text-white text-3xl font-bold">{maximo}cm</p>
              </div>
            </div>

            {/* Imagens Antes e Depois */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="relative">
                <img 
                  src={antesImg}
                  alt="Antes"
                  className="rounded-lg border-2 border-blue-500/30 shadow-lg shadow-blue-500/20 w-full"
                />
              </div>
              <div className="relative">
                <img 
                  src={depoisImg}
                  alt="Depois"
                  className="rounded-lg border-2 border-blue-500/30 shadow-lg shadow-blue-500/20 w-full"
                />
              </div>
            </div>

            {/* Barra visual */}
            <div className="max-w-md mx-auto mt-6">
              <div className="flex items-center justify-between bg-slate-800 rounded-lg overflow-hidden h-16">
                <div className="flex-1 bg-slate-700 h-full flex items-center justify-center text-white font-bold">
                  {atual}cm
                </div>
                <div className="w-8 flex items-center justify-center bg-slate-600">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 h-full flex items-center justify-center text-white font-bold">
                  {maximo}cm
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold"><strong>97% das pessoas</strong> conseguem alcançar seu potencial máximo em <strong>30 dias</strong> seguindo nosso protocolo.</p>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Seu protocolo personalizado requer apenas <strong>15 minutos por dia</strong> para resultados efetivos.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Prova Social - Matéria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <img 
            src={jornalImg}
            alt="Matéria comprovando eficácia"
            className="rounded-lg border-2 border-blue-500/30 shadow-xl shadow-blue-500/20 w-full max-w-2xl mx-auto"
          />
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">✅ Método cientificamente comprovado e reconhecido</p>
          </div>
        </motion.div>

        {/* Card de Preço - Plano Plus (Único) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative mt-12"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
            ⭐ MAIS VENDIDO
          </div>
          <Card className="bg-slate-900 border-2 border-blue-500 rounded-lg p-6 shadow-xl shadow-blue-500/20">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">Plano Plus</h3>
              <p className="text-gray-400">Acesso completo ao método</p>
            </div>

            <div className="space-y-3 mb-6">
              {[
                "Protocolo completo do Método Africano",
                "Guia passo a passo com exercícios específicos",
                "Técnicas avançadas de biomecânica",
                "Plano de nutrição especializado",
                "Acesso à comunidade privada",
                "Suporte 24/7 por WhatsApp",
                "Garantia de 7 dias",
                "Atualizações gratuitas vitalícias",
                "Bônus exclusivos"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 border-2 border-green-500 rounded-lg p-6 text-center mb-4">
              <p className="text-green-100 text-sm mb-2">🔥 Oferta Especial - Apenas Hoje</p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-white/70 text-xl line-through">R$ 97,00</span>
                <span className="text-4xl md:text-5xl font-bold text-white">R$ 17,50</span>
              </div>
              <p className="text-green-100 text-sm">Pagamento único - Acesso Vitalício</p>
            </div>

            <a
              href="https://pay.cakto.com.br/35ij337_646326"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="relative w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-6 text-lg rounded-lg shadow-2xl shadow-blue-500/40 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center justify-center">
                  Garantir Minha Vaga Agora
                  <ArrowRight className="ml-2 w-6 h-6" />
                </span>
              </Button>
            </a>

            <p className="text-center text-gray-400 text-xs mt-3">
              Pagamento seguro processado pela Cakto
            </p>
          </Card>
        </motion.div>

        {/* Garantia */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-slate-900 border-2 border-green-500/30 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Garantia de 7 Dias</h3>
                <p className="text-gray-300 leading-relaxed">
                  Se você não ficar satisfeito com os resultados em 7 dias, devolvemos 100% do seu investimento. 
                  Sem perguntas, sem complicações. Você não tem nada a perder!
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Social Proof Final */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center space-y-4 py-8"
        >
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-300 text-lg">
            <strong className="text-white text-2xl">12.847+ homens</strong> já transformaram suas vidas
          </p>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            ⚡ Seu protocolo personalizado foi criado baseado nas suas respostas.<br/>
            Não deixe essa oportunidade passar. Comece agora e veja resultados reais em 30 dias.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
