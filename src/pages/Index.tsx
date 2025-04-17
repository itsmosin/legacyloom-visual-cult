import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion, useScroll } from "framer-motion"
import { ArrowRight, ChevronRight, MessageCircle, Sparkles, Linkedin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"

const Index = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', updateScrolled)
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  return (
    <div className="min-h-screen">
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
          scrolled 
            ? 'backdrop-blur-md bg-white/90 border-b border-gray-100 shadow-sm py-4' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ButtonGradient 
              variant="outline" 
              size="sm"
              className={`transition-all duration-300 ${
                scrolled ? 'border-gray-300' : 'border-gray-200'
              }`}
            >
              Contact
            </ButtonGradient>
          </motion.div>
        </div>
      </motion.nav>

      <section className="relative min-h-screen flex items-center pt-32 pb-24 md:pt-24 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f0f0f0,_transparent)]"></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center space-y-3 mb-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-playfair text-5xl md:text-6xl lg:text-7xl font-medium leading-tight"
              >
                Your Brand Deserves
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-playfair text-5xl md:text-6xl lg:text-7xl font-medium leading-tight"
              >
                More Than Engagement
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
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

      <section className="py-24 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f0f0f0,_transparent)]"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Why LegacyLoom?</h2>
            <p className="text-gray-600 text-lg">We craft narratives that transcend traditional marketing, creating deep emotional connections that turn customers into devoted brand advocates.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <img src="/lovable-uploads/8edf337d-0006-40ad-ab3d-e12bcfb1da68.png" alt="MTV" className="h-8 w-auto" />
              </div>
              <p className="text-gray-700 mb-6">"LegacyLoom transformed our digital presence. Their strategic approach to storytelling helped us connect with our audience on a deeper level."</p>
              <div>
                <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                <p className="text-gray-500 text-sm">Marketing Director, MTV</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <img src="/lovable-uploads/074abf38-69a2-415b-b882-a25faac38dba.png" alt="Userology" className="h-8 w-auto" />
              </div>
              <p className="text-gray-700 mb-6">"The brand narrative they created for us resonated perfectly with our target audience. Our engagement metrics have never been better."</p>
              <div>
                <h4 className="font-semibold text-gray-900">Michael Roberts</h4>
                <p className="text-gray-500 text-sm">CEO, Userology</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <img src="/lovable-uploads/227e1629-b5ad-4e1b-b1c6-940645d288a8.png" alt="SayF" className="h-8 w-auto" />
              </div>
              <p className="text-gray-700 mb-6">"Working with LegacyLoom was transformative. They didn't just improve our marketing—they revolutionized how we connect with our community."</p>
              <div>
                <h4 className="font-semibold text-gray-900">Emma Thompson</h4>
                <p className="text-gray-500 text-sm">Brand Director, SayF</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#f0f0f0,_transparent)]"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-10">Let's Make Something Worth Remembering.</h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ButtonGradient 
                size="lg"
                className="shadow-xl shadow-gray-100/40 hover:shadow-2xl hover:shadow-gray-200/30 transition-all duration-500"
              >
                Start Your Legacy
                <ArrowRight className="h-5 w-5 ml-1" />
              </ButtonGradient>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-8 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-900 to-gray-700">
                  <Sparkles className="h-4 w-4 text-white" />
                </span>
                <h3 className="font-playfair text-xl font-bold">LegacyLoom</h3>
              </div>
              <p className="text-gray-500 text-sm mb-6">Crafting brand narratives that cultivate cult-like devotion.</p>
              <div className="flex gap-4 text-gray-400">
                <a href="https://t.me/legacyloom" aria-label="Telegram" className="hover:text-gray-800 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-gray-800 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:col-span-4">
              <h4 className="font-medium text-gray-900 mb-5">Contact</h4>
              <p className="text-gray-500 text-sm mb-5">Ready to start your brand legacy?</p>
              <a href="mailto:hello@legacyloom.co" className="text-gray-900 font-medium hover:underline block mb-3">hello@legacyloom.co</a>
              <a href="https://t.me/legacyloom" className="text-gray-900 font-medium hover:underline">@legacyloom</a>
            </div>
          </div>
          <Separator className="my-10" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gray-400" />
              <span className="text-gray-500 text-sm">Crafting Legacy Since 2024</span>
            </div>
            <p className="text-gray-500 text-sm">© 2024 LegacyLoom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
