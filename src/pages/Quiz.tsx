import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

type QuizAnswers = {
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  q5?: string;
  q6?: string;
  q7?: string;
};

const questions = [
  {
    id: "q1",
    question: "Qual é o tamanho aproximado do seu lápis ereto?",
    options: [
      "Menos de 12 cm",
      "De 12 a 14 cm",
      "De 14 a 16 cm",
      "Mais de 16 cm"
    ]
  },
  {
    id: "q2",
    question: "Com que frequência você se masturba?",
    options: [
      "Mais de uma vez por dia",
      "Todos os dias",
      "De 2 a 4 vezes por semana",
      "Raramente"
    ]
  },
  {
    id: "q3",
    question: "Você já tentou algum método natural para aumentar o lápis?",
    options: [
      "Nunca ouvi falar",
      "Já ouvi falar, mas nunca tentei",
      "Já tentei, mas sem constância",
      "Sim, fiz com disciplina"
    ]
  },
  {
    id: "q4",
    question: "Como é sua dieta diária?",
    options: [
      "Só comida processada",
      "50% processada, 50% saudável",
      "Tento comer bem na maioria das refeições",
      "Dieta natural e equilibrada"
    ]
  },
  {
    id: "q5",
    question: "Quantas horas você dorme por noite?",
    options: [
      "Menos de 5 horas",
      "De 5 a 6 horas",
      "De 6 a 7 horas",
      "8 horas ou mais"
    ]
  },
  {
    id: "q6",
    question: "Qual é a sua idade?",
    options: [
      "Entre 12 e 18 anos",
      "Entre 19 e 27 anos",
      "Entre 28 e 36 anos",
      "Mais de 36 anos"
    ]
  }
];

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [customSize, setCustomSize] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const progress = ((currentQuestion + 1) / 7) * 100;
  const isLastQuestion = currentQuestion === 6;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption && !isLastQuestion) return;
    
    if (isLastQuestion) {
      if (!customSize) return;
      navigate("/resultado");
      return;
    }

    const currentQ = questions[currentQuestion];
    setAnswers({ ...answers, [currentQ.id]: selectedOption || "" });
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Diagnóstico <span className="text-white">Personalizado</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Pergunta {currentQuestion + 1} de 7
          </p>
        </header>

        {/* Progress Bar */}
        <div className="mb-8 px-2">
          <div className="w-full bg-card rounded-full h-2.5">
            <motion.div
              className="bg-primary h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">
            {Math.round(progress)}% completado
          </p>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-xl p-6 sm:p-8 w-full"
          >
            {!isLastQuestion ? (
              <>
                <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8">
                  {questions[currentQuestion].question}
                </h2>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <label key={index} className="block cursor-pointer">
                      <input
                        type="radio"
                        name="answer"
                        className="sr-only peer"
                        checked={selectedOption === option}
                        onChange={() => handleOptionSelect(option)}
                      />
                      <div className="w-full p-4 rounded-lg border border-border text-gray-300 peer-checked:bg-[#1e293b] peer-checked:border-primary peer-checked:text-white transition-colors duration-200 hover:border-primary/50 shadow-lg peer-checked:shadow-primary/30">
                        <span className="flex items-center">
                          <span className="w-5 h-5 mr-4 rounded-full border-2 border-gray-500 flex-shrink-0 peer-checked:border-primary peer-checked:bg-transparent peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-offset-card peer-checked:ring-primary flex items-center justify-center">
                            {selectedOption === option && (
                              <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                            )}
                          </span>
                          {option}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
                  Última pergunta!
                </h2>
                <p className="text-center text-gray-400 mb-8">
                  Qual é o tamanho atual do seu lápis em ereção? (em centímetros)
                </p>
                <div className="max-w-md mx-auto">
                  <div className="relative">
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="Ex: 14.5"
                      value={customSize}
                      onChange={(e) => setCustomSize(e.target.value)}
                      className="w-full bg-[#0b0c12] border-border text-white text-center text-lg py-6 pr-12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      cm
                    </span>
                  </div>
                </div>
              </>
            )}

            {/* Next Button */}
            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleNext}
                disabled={!selectedOption && !isLastQuestion || (isLastQuestion && !customSize)}
                size="lg"
                className="gradient-green hover:opacity-90 text-white font-bold text-lg py-6 px-10 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span className="flex items-center gap-2">
                  {isLastQuestion ? "Ver Meu Resultado Personalizado" : "Próxima"}
                  <ChevronRight className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
