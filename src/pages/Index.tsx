
import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation - Updated for better aesthetics */}
      <nav className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto py-5 px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-900 to-gray-700">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <h1 className="font-playfair text-2xl font-bold tracking-tight text-gray-900">LegacyLoom</h1>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            <motion.a 
              href="#about" 
              className="text-gray-700 hover:text-black transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#services" 
              className="text-gray-700 hover:text-black transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Services</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#work" 
              className="text-gray-700 hover:text-black transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Work</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
            </motion.a>
            <ButtonGradient 
              variant="outline" 
              size="sm"
              className="ml-2"
            >
              Contact
            </ButtonGradient>
          </div>
        </div>
      </nav>

      {/* Hero Section - Updated with larger text and improved CTAs */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 md:pt-24 md:pb-16">
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

            <div className="text-center space-y-2 mb-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
              >
                Your Brand Deserves
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
              >
                More Than Engagement
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                It Deserves{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                    Cult
                  </span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-20"
            >
              <ButtonGradient 
                size="lg" 
                className="w-full sm:w-auto group shadow-lg shadow-gray-200/40 hover:shadow-xl hover:shadow-gray-300/30 transition-all duration-300"
              >
                Book a Strategy Call
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </ButtonGradient>
              <a 
                href="#services" 
                className="group flex items-center gap-2 px-7 py-4 transition-all border border-transparent hover:border-gray-200 rounded-full hover:bg-white/80 hover:shadow-md"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Brand Credentials */}
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
            <div className="flex gap-8 text-gray-500">
              <a href="#" className="text-sm hover:text-black transition-colors">Instagram</a>
              <a href="#" className="text-sm hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="text-sm hover:text-black transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
