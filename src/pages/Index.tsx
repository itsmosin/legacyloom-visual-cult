
import { ButtonGradient } from "@/components/ui/button-gradient"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Sparkles, ExternalLink, Menu, X, Github, Twitter } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

const features = [
  {
    title: "Brand Evolution",
    description: "Transform your vision into a living digital brand that resonates with your audience and evolves with the market.",
    icon: <div className="w-10 h-10 rounded-full flex items-center justify-center bg-web3-purple/20 text-web3-purple"><Sparkles size={20} /></div>
  },
  {
    title: "Decentralized Marketing",
    description: "Leverage Web3 channels and communities to build authentic connections that transcend traditional marketing limits.",
    icon: <div className="w-10 h-10 rounded-full flex items-center justify-center bg-web3-blue/20 text-web3-blue"><Github size={20} /></div>
  },
  {
    title: "Cultural Integration",
    description: "Position your brand at the intersection of culture and technology, creating lasting impact in the Web3 ecosystem.",
    icon: <div className="w-10 h-10 rounded-full flex items-center justify-center bg-web3-lightPurple/20 text-web3-lightPurple"><Twitter size={20} /></div>
  }
]

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-background/80 border-b border-white/10">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="font-playfair text-2xl font-bold tracking-tight text-gradient">LegacyLoom</h1>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
            <ButtonGradient variant="outline" size="sm" className="border-web3-purple text-web3-purple hover:bg-web3-purple/10">
              Connect
            </ButtonGradient>
          </div>
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden glass-card mx-4 my-2 p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#work" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Work</a>
              <ButtonGradient variant="outline" className="border-web3-purple text-web3-purple hover:bg-web3-purple/10 w-full">
                Connect
              </ButtonGradient>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(155,135,245,0.15),_transparent_50%)]"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-web3-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-web3-blue/5 rounded-full blur-3xl"></div>
        
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
              <span className="h-[1px] w-12 bg-web3-purple/50"></span>
              <span className="text-web3-purple font-medium tracking-widest text-sm uppercase">Web3 Brand Agency</span>
              <span className="h-[1px] w-12 bg-web3-purple/50"></span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center mb-8 glass-card p-6 animate-glow"
            >
              Your Brand Deserves More Than Engagement—It Deserves{" "}
              <span className="relative">
                <span className="text-gradient">
                  Cult
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-web3-purple to-transparent"
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
              className="text-gray-400 md:text-lg text-center mb-16 max-w-2xl mx-auto leading-relaxed"
            >
              We transform exceptional brands into cultural phenomena through strategic design and timeless storytelling that resonates beyond trends.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <ButtonGradient size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-web3-purple to-web3-blue hover:shadow-lg hover:shadow-web3-purple/20">
                Book a Strategy Call
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonGradient>
              <a 
                href="#services" 
                className="group flex items-center gap-2 px-6 py-3 transition-all hover:text-web3-purple"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-background to-web3-darkPurple/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-web3-purple text-sm tracking-widest uppercase">Our Services</span>
            <h3 className="text-3xl md:text-4xl font-bold mt-4 text-gradient">Web3 Brand Evolution</h3>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">We help brands achieve cultural relevance and longevity in the decentralized ecosystem.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                    <div className="flex mt-auto pt-4">
                      <a href="#" className="text-web3-purple flex items-center text-sm group">
                        Learn more 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden glass-card">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-web3-purple/10 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <span className="text-web3-purple text-sm tracking-widest uppercase">Join The Movement</span>
                <h3 className="text-3xl md:text-4xl font-bold mt-4">Ready to Elevate Your Brand in Web3?</h3>
                <p className="mt-4 text-gray-400">Take the first step toward building a brand that transcends conventional engagement metrics and becomes a cultural cornerstone.</p>
                
                <div className="mt-8 flex flex-col space-y-4 md:max-w-md">
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-grow bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-web3-purple" 
                    />
                    <button className="bg-gradient-to-r from-web3-purple to-web3-blue px-6 py-3 rounded-r-lg font-medium">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">Join our newsletter for exclusive Web3 branding insights and trends.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-web3-purple/30 to-web3-blue/30 animate-pulse-slow"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <Sparkles className="text-web3-purple w-12 h-12 mx-auto mb-4 animate-float" />
                    <p className="font-bold text-xl">Web3 Innovation</p>
                    <p className="text-sm text-gray-400 mt-2">Reimagine Your Brand</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Credentials */}
      <section className="py-24 bg-gradient-to-t from-transparent to-web3-darkPurple/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-12 text-sm tracking-widest uppercase">Trusted By Leading Web3 Projects</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="w-24 h-10 glass-card flex items-center justify-center px-4">
                <div className="w-full h-6 bg-gradient-to-r from-web3-purple/40 to-web3-blue/40 rounded-sm animate-shimmer"></div>
              </div>
              <div className="w-24 h-10 glass-card flex items-center justify-center px-4">
                <div className="w-full h-6 bg-gradient-to-r from-web3-purple/40 to-web3-blue/40 rounded-sm animate-shimmer"></div>
              </div>
              <div className="w-24 h-10 glass-card flex items-center justify-center px-4">
                <div className="w-full h-6 bg-gradient-to-r from-web3-purple/40 to-web3-blue/40 rounded-sm animate-shimmer"></div>
              </div>
              <div className="w-24 h-10 glass-card flex items-center justify-center px-4">
                <div className="w-full h-6 bg-gradient-to-r from-web3-purple/40 to-web3-blue/40 rounded-sm animate-shimmer"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Brand Mark */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Sparkles className="h-5 w-5 text-web3-purple" />
              <span className="text-gray-400 text-sm">Building Web3 Brands Since 2024</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-8 text-gray-400"
            >
              <a href="#" className="text-sm hover:text-web3-purple transition-colors flex items-center gap-1">
                <ExternalLink className="h-3.5 w-3.5" /> Instagram
              </a>
              <a href="#" className="text-sm hover:text-web3-purple transition-colors flex items-center gap-1">
                <ExternalLink className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a href="#" className="text-sm hover:text-web3-purple transition-colors flex items-center gap-1">
                <ExternalLink className="h-3.5 w-3.5" /> Twitter
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
