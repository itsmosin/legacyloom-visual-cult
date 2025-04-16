
import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import Typewriter from 'typewriter-effect'

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation - Simplified with only Book a Call */}
      <nav className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="font-playfair text-2xl font-bold tracking-tight">LegacyLoom</h1>
          <div>
            <ButtonGradient 
              variant="default" 
              size="sm"
              className="rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book a Call
            </ButtonGradient>
          </div>
        </div>
      </nav>

      {/* Hero Section - With improved heading and typewriter effect */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f7f5ff,_transparent)]"></div>
        
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
              Your Brand Deserves{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600 inline-block min-h-[60px] md:min-h-[80px]">
                  <Typewriter
                    options={{
                      strings: ['More Than Engagement', 'Legacy'],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 80,
                    }}
                  />
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
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
              <ButtonGradient size="lg" className="w-full sm:w-auto group shadow-xl hover:shadow-2xl">
                Book a Strategy Call
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonGradient>
              <a 
                href="#services" 
                className="group flex items-center gap-2 px-6 py-3 transition-all hover:text-purple-900"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Brand Credentials - Moved up before services section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-purple-600 mb-12 text-sm tracking-widest uppercase font-medium">Trusted By Leading Brands</p>
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
      <footer className="py-8 border-t border-purple-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-gray-500 text-sm">Crafting Legacy Since 2024</span>
            </div>
            <div className="flex gap-8 text-gray-500">
              <a href="#" className="text-sm hover:text-purple-900 transition-colors">Instagram</a>
              <a href="#" className="text-sm hover:text-purple-900 transition-colors">LinkedIn</a>
              <a href="#" className="text-sm hover:text-purple-900 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
