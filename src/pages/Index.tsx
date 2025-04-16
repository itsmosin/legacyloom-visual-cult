import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronRight, Globe, Layers, MessageSquare, Rocket, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import BrandLogos from "@/components/BrandLogos"
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
      {/* Minimal Navigation with scroll behavior */}
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

      {/* Hero Section */}
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
      
      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10">About LegacyLoom</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              At LegacyLoom, we don't just put content out there and hope it sticks. We make people care. Whether you're building in Web3, launching something bold, or just tired of shouting into the void—we're here to make sure people listen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10">Why LegacyLoom?</h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                People don't connect with companies. They connect with stories, emotions, and a reason to believe. That's what we build.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto mt-16 rounded-lg border border-gray-200 p-1"
            >
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <div className="flex justify-between items-center mb-5">
                  <p className="text-gray-500 text-sm font-medium">CLIENT TESTIMONIAL</p>
                  <div className="flex">
                    <span className="h-1 w-1 rounded-full bg-gray-300 mx-0.5"></span>
                    <span className="h-1 w-1 rounded-full bg-gray-300 mx-0.5"></span>
                    <span className="h-1 w-1 rounded-full bg-gray-300 mx-0.5"></span>
                  </div>
                </div>
                <p className="text-gray-800 italic mb-5">"They didn't just help us tell our story. They helped us discover what that story actually was."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <p className="font-medium text-sm">Sarah Williams</p>
                    <p className="text-gray-500 text-xs">Founder, Blockchain Initiative</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10">Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="h-full border-gray-100 transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-5">
                      <Rocket className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">Brand Strategy</h3>
                    <p className="text-gray-600">Position your brand to stand out in crowded markets with strategic differentiation.</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="h-full border-gray-100 transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-5">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">Narrative Design</h3>
                    <p className="text-gray-600">Craft compelling stories that resonate with your audience and drive engagement.</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="h-full border-gray-100 transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-5">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">Web3 Community Building</h3>
                    <p className="text-gray-600">Build and nurture engaged communities around your Web3 projects and initiatives.</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="h-full border-gray-100 transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-5">
                      <Layers className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">Content Architecture</h3>
                    <p className="text-gray-600">Structure your content strategy to maximize impact across all channels.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
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

      {/* Footer */}
      <footer className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-900 to-gray-700">
                  <Sparkles className="h-4 w-4 text-white" />
                </span>
                <h3 className="font-playfair text-xl font-bold">LegacyLoom</h3>
              </div>
              <p className="text-gray-500 text-sm mb-6">Crafting brand narratives that cultivate cult-like devotion.</p>
              <div className="flex gap-4 text-gray-400">
                <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-gray-800 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-gray-800 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.504.344-1.857.182-.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-medium text-gray-900 mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="text-gray-500 hover:text-gray-800 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Team</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-medium text-gray-900 mb-5">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="text-gray-500 hover:text-gray-800 transition-colors">Strategy</a></li>
                <li><a href="#services" className="text-gray-500 hover:text-gray-800 transition-colors">Design</a></li>
                <li><a href="#services" className="text-gray-500 hover:text-gray-800 transition-colors">Community</a></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <h4 className="font-medium text-gray-900 mb-5">Contact</h4>
              <p className="text-gray-500 text-sm mb-5">Ready to start your brand legacy?</p>
              <a href="mailto:hello@legacyloom.co" className="text-gray-900 font-medium hover:underline">hello@legacyloom.co</a>
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
