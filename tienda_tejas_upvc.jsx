import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const productos = [
  {
    id: 1,
    nombre: "Teja UPVC Onda Alta 3.05 m",
    descripcion: "Cobertura resistente a la corrosión con gran aislamiento térmico.",
    imagen: "https://images.unsplash.com/photo-1584270354949-fef1928fae09?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 2,
    nombre: "Teja UPVC Onda Baja 2.44 m",
    descripcion: "Ideal para proyectos residenciales de bajo peso estructural.",
    imagen: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    id: 3,
    nombre: "Accesorios y Remates",
    descripcion: "Aleros, cumbreras y tapajuntas en UPVC para un sellado perfecto.",
    imagen: "https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?auto=format&fit=crop&w=800&h=600&q=80"
  }
];

export default function TiendaTejasUPVC() {
  const [largo, setLargo] = useState(0);
  const [ancho, setAncho] = useState(0);
  const COBERTURA_TEJA = 0.72; // m² por teja estándar

  const area = largo * ancho;
  const cantidadTejas = Math.ceil(area / COBERTURA_TEJA);

  return (
    <div className="font-sans antialiased text-gray-800 scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-indigo-600">UPVC Tejas</h1>
          <nav className="space-x-6 hidden sm:block">
            <a href="#ventajas" className="hover:text-indigo-600">Ventajas</a>
            <a href="#productos" className="hover:text-indigo-600">Productos</a>
            <a href="#calculadora" className="hover:text-indigo-600">Calculadora</a>
            <a href="#contacto" className="hover:text-indigo-600">Contacto</a>
          </nav>
          <Button asChild className="sm:hidden">
            <a href="#contacto">Cotizar</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 px-4" id="inicio">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Cubiertas durables con <span className="text-yellow-300">Tejas&nbsp;UPVC</span>
          </h2>
          <p className="text-lg mb-8">
            Aislamiento térmico y resistencia superior para tus proyectos residenciales e industriales.
          </p>
          <Button size="lg" asChild>
            <a href="#productos">Ver catálogo</a>
          </Button>
        </motion.div>
      </section>

      {/* Ventajas */}
      <section id="ventajas" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck className="w-8 h-8" />, title: "Anticorrosión", desc: "Soporta ambientes salinos e industriales." },
            { icon: <Truck className="w-8 h-8" />, title: "Livianas", desc: "Facilitan el transporte y la instalación." },
            { icon: <BadgeCheck className="w-8 h-8" />, title: "Garantía 10 años", desc: "Calidad certificada de fábrica." }
          ].map((v, idx) => (
            <Card key={idx} className="p-6 rounded-2xl shadow transition hover:shadow-lg">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                {v.icon}
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p>{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Nuestro catálogo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((p) => (
              <Card key={p.id} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <img src={p.imagen} alt={p.nombre} className="h-48 w-full object-cover" />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold">{p.nombre}</h3>
                  <p className="text-sm text-gray-600">{p.descripcion}</p>
                  <Button asChild className="w-full mt-2">
                    <a href="#contacto">Cotizar</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <section id="calculadora" className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Calculadora de Tejas</h2>
          <p className="text-gray-600">Ingresa las dimensiones de tu cubierta para estimar la cantidad de tejas requeridas.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="number" placeholder="Largo (m)" className="border p-3 rounded-xl" value={largo} onChange={(e) => setLargo(parseFloat(e.target.value) || 0)} />
            <input type="number" placeholder="Ancho (m)" className="border p-3 rounded-xl" value={ancho} onChange={(e) => setAncho(parseFloat(e.target.value) || 0)} />
          </div>
          {area > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-lg font-medium">
              Área cubierta: {area.toFixed(2)} m² · Necesitas <span className="font-bold text-indigo-600">{cantidadTejas}</span> tejas.
            </motion.div>
          )}
          <Button asChild size="lg">
            <a href="#contacto">Solicitar cotización</a>
          </Button>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 bg-indigo-600 text-white text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold tracking-wide">¡Hablemos de tu proyecto!</h2>
          <p className="text-lg">Escríbenos por WhatsApp y recibe asesoría especializada en cubiertas UPVC.</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        © {new Date().getFullYear()} UPVC Tejas — Todos los derechos reservados.
      </footer>
    </div>
  );
}
