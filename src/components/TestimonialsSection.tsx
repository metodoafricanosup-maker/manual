import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    age: 32,
    rating: 5,
    text: "Em 30 dias consegui resultados que nunca imaginei. O método realmente funciona!",
    before: "13cm",
    after: "17cm"
  },
  {
    name: "Ricardo S.",
    age: 28,
    rating: 5,
    text: "Estava cético no início, mas os resultados falam por si. Minha autoestima mudou completamente.",
    before: "12cm",
    after: "16cm"
  },
  {
    name: "Bruno L.",
    age: 35,
    rating: 5,
    text: "O melhor investimento que fiz em mim mesmo. Simples, natural e eficaz.",
    before: "14cm",
    after: "18cm"
  }
];

export function TestimonialsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="space-y-6 mt-12"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          O Que Nossos Clientes Dizem
        </h2>
        <p className="text-gray-400">Resultados reais de homens reais</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <Card className="bg-slate-900 border-2 border-slate-800 rounded-lg p-6 h-full">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="space-y-2">
                <p className="text-white font-semibold">{testimonial.name}, {testimonial.age} anos</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400">Antes: {testimonial.before}</span>
                  <span className="text-blue-500">→</span>
                  <span className="text-green-500 font-bold">Depois: {testimonial.after}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
