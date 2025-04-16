
import React, { useRef, useEffect } from 'react';
import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import { Typed } from 'react-typed';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="font-playfair text-2xl font-bold tracking-tight">LegacyLoom</h1>
          <div className="flex items-center gap-2">
            <ButtonGradient variant="outline" size="sm" className="rounded-full">
              Book a Call
            </ButtonGradient>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f0f0f0,_transparent)]"></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-12 gap-2"
            >
              <span className="h-[1px] w-12 bg-gray-300"></span>
              <span className="text-gray-500 font-medium tracking-widest text-sm uppercase">Luxury Brand Agency</span>
              <span className="h-[1px] w-12 bg-gray-300"></span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center mb-8"
            >
              Your Brand Deserves More Than{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                <Typed
                  strings={['Engagement', 'Legacy']}
                  typeSpeed={100}
                  backSpeed={50}
                  backDelay={2000}
                  loop
                />
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 md:text-lg text-center mb-16 max-w-2xl mx-auto leading-relaxed"
            >
              We transform exceptional brands into cultural phenomena through strategic design and timeless storytelling that resonates beyond trends.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <ButtonGradient size="lg" className="w-full sm:w-auto group">
                Book a Strategy Call
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonGradient>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Trusted By Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-500 mb-12 text-sm tracking-widest uppercase">Trusted By Leading Brands</p>
            <div className="flex flex-wrap justify-center gap-16 opacity-40">
              <div className="w-24 h-10 bg-gray-900 rounded-sm"></div>
              <div className="w-24 h-10 bg-gray-900 rounded-sm"></div>
              <div className="w-24 h-10 bg-gray-900 rounded-sm"></div>
              <div className="w-24 h-10 bg-gray-900 rounded-sm"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Brand Mark */}
      <footer className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gray-400" />
              <span className="text-gray-500 text-sm">Crafting Legacy Since 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
