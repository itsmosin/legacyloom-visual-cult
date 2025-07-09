
import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion, useScroll } from "framer-motion"
import { ArrowRight, ChevronRight, MessageCircle, Sparkles, Linkedin, Star } from "lucide-react"
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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'backdrop-blur-md bg-background/80 border-b border-border shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary animate-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <h1 className="font-playfair text-2xl font-bold tracking-tight text-foreground">LegacyLoom</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ButtonGradient 
              variant="outline" 
              size="sm"
            >
              Contact
            </ButtonGradient>
          </motion.div>
        </div>
      </motion.nav>

      <section className="relative min-h-screen flex items-center pt-32 pb-24 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <div className="text-center space-y-6 mb-16">
              <motion.div variants={fadeInUp} className="space-y-2">
                <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                  Your Brand Deserves
                </h2>
                <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                  More Than Engagement
                </h2>
                <div className="relative">
                  <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    It Deserves{" "}
                    <span className="relative inline-block text-primary">
                      Cult
                      <motion.div 
                        className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                      />
                    </span>
                  </h2>
                </div>
              </motion.div>

              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                We craft narratives that transcend traditional marketing, creating deep emotional connections that turn customers into devoted brand advocates.
              </motion.p>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <ButtonGradient 
                size="lg" 
                className="w-full sm:w-auto group shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500"
              >
                Book a Strategy Call
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </ButtonGradient>
              <motion.a 
                href="#why-legacyloom" 
                className="group flex items-center gap-2 px-8 py-4 transition-all border-2 border-transparent hover:border-border rounded-full hover:bg-muted/50 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">Explore Services</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-2" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="why-legacyloom" className="py-24 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">Why LegacyLoom?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">We craft narratives that transcend traditional marketing, creating deep emotional connections that turn customers into devoted brand advocates.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                logo: "/lovable-uploads/8edf337d-0006-40ad-ab3d-e12bcfb1da68.png",
                alt: "MTV",
                quote: "LegacyLoom transformed our digital presence completely. Their strategic approach to storytelling helped us connect with our audience on a deeper level, resulting in 300% increased engagement.",
                name: "Sarah Chen",
                title: "Marketing Director, MTV",
                rating: 5
              },
              {
                logo: "/lovable-uploads/074abf38-69a2-415b-b882-a25faac38dba.png",
                alt: "Userology",
                quote: "The brand narrative they created for us resonated perfectly with our target audience. Our engagement metrics have never been better, and we've seen a 250% increase in qualified leads.",
                name: "Michael Roberts",
                title: "CEO, Userology",
                rating: 5
              },
              {
                logo: "/lovable-uploads/227e1629-b5ad-4e1b-b1c6-940645d288a8.png",
                alt: "SayF",
                quote: "Working with LegacyLoom was transformative. They didn't just improve our marketing—they revolutionized how we connect with our community, leading to 400% growth in brand loyalty.",
                name: "Emma Thompson",
                title: "Brand Director, SayF",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 group"
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <img src={testimonial.logo} alt={testimonial.alt} className="h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-10 text-foreground">Let's Make Something Worth Remembering.</h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ButtonGradient 
                size="lg"
                className="shadow-2xl shadow-primary/20 hover:shadow-3xl hover:shadow-primary/30 transition-all duration-500 animate-glow"
              >
                Start Your Legacy
                <ArrowRight className="h-5 w-5 ml-1" />
              </ButtonGradient>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary">
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">LegacyLoom</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">Crafting brand narratives that cultivate cult-like devotion.</p>
              <div className="flex gap-6 text-muted-foreground">
                <a href="https://t.me/legacyloom" aria-label="Telegram" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-foreground mb-6">Contact</h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Ready to start your brand legacy?</p>
              <a href="mailto:hello@legacyloom.co" className="text-foreground font-medium hover:text-primary transition-colors block mb-3">hello@legacyloom.co</a>
              <a href="https://t.me/legacyloom" className="text-foreground font-medium hover:text-primary transition-colors">@legacyloom</a>
            </div>
          </div>
          <Separator className="my-10 bg-border" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-muted-foreground text-sm">Crafting Legacy Since 2024</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2024 LegacyLoom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
