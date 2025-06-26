import React, { useState, useEffect } from 'react';
import { Button } from './components/button.jsx';
import { Card, CardContent } from './components/card';
import { Badge } from "./components/badge"
import { MessageCircle, Star, Gift, Zap, Crown, Sparkles } from 'lucide-react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  const handleWhatsAppClick = () => {
    // 🔥 CAMBIA ESTE NÚMERO POR EL TUYO
    const phoneNumber = "1234567890"; // Ejemplo: "5491123456789"
    const message = "¡Hola! Quiero obtener mi usuario para el casino online 🎰";
    const whatsappUrl = `https://wa.me/${3413607604}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Logo/Brand */}
          {/* <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 shadow-2xl">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
              BPLAY
            </h1>
            <p className="text-xl text-gray-300 font-light">Casino Online Premium</p>
          </div> */}

          {/* Main Card */}
          <Card className="bg-black/40 backdrop-blur-lg border-yellow-500/30 shadow-2xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 text-lg">
                  <Gift className="w-5 h-5 mr-2" />
                  PROMOCIÓN ESPECIAL
                </Badge>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¡Obtén tu Usuario!
              </h2>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Para acceder a nuestras{" "}
                <span className="text-yellow-400 font-semibold">promociones exclusivas</span> y
                comenzar a ganar, habla con uno de nuestros agentes especializados
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                  <Zap className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-white font-semibold">Registro Rápido</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                  <Star className="w-6 h-6 text-blue-400 mr-2" />
                  <span className="text-white font-semibold">Bonos Exclusivos</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                  <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
                  <span className="text-white font-semibold">Soporte 24/7</span>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400/50"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                QUIERO MI USUARIO!
              </Button>

              <p className="text-sm text-gray-400 mt-4">
                Te conectaremos directamente con WhatsApp
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          {/* <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🎰 Juegos Premium</h3>
              <p className="text-gray-300">
                Accede a los mejores slots, ruleta, blackjack y más juegos exclusivos
              </p>
            </div>
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">💰 Bonos Increíbles</h3>
              <p className="text-gray-300">
                Recibe bonos de bienvenida y promociones especiales para usuarios VIP
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;