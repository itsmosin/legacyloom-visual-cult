
import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { TypeAnimation } from 'react-type-animation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] to-white">
      {/* Simplified Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white/80">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="font-playfair text-2xl font-bold tracking-tight">LegacyLoom</h1>
          <ButtonGradient variant="outline" size="sm" className="rounded-full px-8">
            Book a Call
          </ButtonGradient>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#F2FCE2,_transparent)]"></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center mb-8"
            >
              Your Brand Deserves{" "}
              <div className="h-[80px] md:h-[100px] lg:h-[120px]">
                <TypeAnimation
                  sequence={[
                    'More Than Engagement',
                    2000,
                    'A Cult Following',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600"
                />
              </div>
            </motion.h2>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </motion.div>
      </section>

      {/* Footer Brand Mark */}
      <footer className="py-8 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-gray-400" />
            <span className="text-gray-500 text-sm">Crafting Legacy Since 2024</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
