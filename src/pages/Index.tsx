
import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Sparkles } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <h1 className="font-playfair text-2xl font-bold">LegacyLoom</h1>
        <ButtonGradient variant="outline" size="sm">
          Contact Us
        </ButtonGradient>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          >
            Your Brand Deserves More Than Engagement—It Deserves Cult
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            We transform exceptional brands into cultural phenomena through strategic design and timeless storytelling.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ButtonGradient size="lg" className="group">
              Book a Strategy Call
              <Phone className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
            </ButtonGradient>
            <ButtonGradient variant="outline" size="lg" className="group">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonGradient>
          </motion.div>
        </div>
      </main>

      {/* Footer Brand Mark */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center gap-2 text-gray-400 text-sm"
        >
          <Sparkles className="h-4 w-4" />
          <span>Crafting Legacy Since 2024</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Index
