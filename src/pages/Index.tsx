import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion } from "framer-motion"
import { Sparkles, PhoneCall, BookOpen, ArrowRight } from "lucide-react"
import { TypeAnimation } from 'react-type-animation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3EFFF] via-[#E9E3FF] to-white relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute top-1/4 -left-10 w-72 h-72 bg-[#DED3FF]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute bottom-1/4 -right-10 w-96 h-96 bg-[#E5DEFF]/40 rounded-full blur-3xl"
        />
      </div>

      {/* Refined Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto py-4 px-6">
          <div className="bg-white/70 backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center shadow-sm">
            <h1 className="font-playfair text-2xl font-bold tracking-tight text-[#6E59A5]">LegacyLoom</h1>
            <ButtonGradient variant="outline" size="sm" className="rounded-full px-8">
              Book a Call
            </ButtonGradient>
          </div>
        </div>
      </nav>

      {/* Hero Section with Updated Typography */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#D6BCFA,_transparent)]"></div>
        
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
              Transforming Brands into{" "}
              <div className="h-[80px] md:h-[100px] lg:h-[120px]">
                <TypeAnimation
                  sequence={[
                    'Cultural Icons',
                    2000,
                    'Timeless Stories',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]"
                />
              </div>
            </motion.h2>
          </motion.div>
        </div>

        {/* Animated Background Elements - Updated colors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D6BCFA] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#E5DEFF] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#9b87f5] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </motion.div>
      </section>

      {/* Call to Action Section with Poppins Font */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <p className="font-poppins text-[#6E59A5] text-lg md:text-2xl mb-12 italic">
              Where storytelling meets strategy, and brands become legends
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ButtonGradient 
                className="group flex items-center gap-2 rounded-full px-8 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:shadow-lg hover:shadow-purple-200/40"
              >
                <PhoneCall className="w-4 h-4" />
                Book a Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </ButtonGradient>
              
              <ButtonGradient 
                variant="outline"
                className="group flex items-center gap-2 rounded-full px-8 border-[#9b87f5] text-[#7E69AB] hover:bg-purple-50"
              >
                <BookOpen className="w-4 h-4" />
                Explore Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </ButtonGradient>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Section with updated styling */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-playfair font-medium mb-12 text-[#6E59A5]">
              Trusted by Forward-Thinking Brands
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="w-32 h-12 rounded-md bg-gradient-to-r from-purple-100 to-purple-50 hover:shadow-md transition-all duration-300"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Brand Mark */}
      <footer className="py-8 border-t border-purple-100 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-[#9b87f5]" />
            <span className="text-[#6E59A5] text-sm">Crafting Legacy Since 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
