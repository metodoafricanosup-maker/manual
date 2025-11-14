import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const locations = [
  "São Paulo - SP",
  "Rio de Janeiro - RJ",
  "Belo Horizonte - MG",
  "Brasília - DF",
  "Curitiba - PR",
  "Porto Alegre - RS",
  "Salvador - BA",
  "Fortaleza - CE",
  "Recife - PE",
  "Manaus - AM"
];

export function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const showNotification = () => {
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      setLocation(randomLocation);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 4000);
    };

    const interval = setInterval(showNotification, 8000);
    showNotification();

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <div className="bg-slate-900 border-2 border-green-500/50 rounded-lg p-4 shadow-2xl shadow-green-500/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">
                  Alguém de {location}
                </p>
                <p className="text-gray-300 text-xs">
                  acabou de garantir o acesso ao Método Africano!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
