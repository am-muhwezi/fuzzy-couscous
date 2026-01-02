import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Repeat, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/Button';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/id/403/1920/1080" 
                alt="City skyline" 
                className="w-full h-full object-cover opacity-30 filter grayscale sepia-[0.3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-700">
                Operational Alpha
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              We acquire and transform legacy service businesses into Uncontested Market ecosystems through stewardship, technology, and disciplined architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/portfolio" variant="primary">
                View The Ecosystem
              </Button>
              <Button to="/about" variant="outline">
                Our Methodology
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif text-white mb-6">
                Beyond Private Equity.<br />Industrial Technologists.
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Traditional capital slashes costs to fabricate margins. We reject this. Aegis Keystone Holdings acts as an ecosystem architect, acquiring cash-flowing service firms and technology assets to build "Uncontested Markets."
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We mitigate risk not through financial engineering, but through the <strong>COFYS Method</strong>—a proprietary framework that prioritizes cross-selling, organic growth, and operator-led expertise over leverage.
              </p>
              <Link to="/about" className="inline-flex items-center text-gold-DEFAULT hover:text-white transition-colors group">
                <span className="border-b border-gold-DEFAULT group-hover:border-white pb-1">Read the Investment Thesis</span>
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center justify-center"
            >
                <div className="absolute -inset-4 border border-gold-DEFAULT/20 rounded-sm"></div>
                <div className="bg-white/5 p-16 rounded-sm shadow-2xl backdrop-blur-sm">
                  <img
                      src="/images/aegislogo.png"
                      alt="Aegis Keystone Holdings Logo"
                      className="w-full h-auto max-w-md opacity-90"
                  />
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Pillars (COFYS) */}
      <section className="py-24 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-DEFAULT text-sm font-bold tracking-widest uppercase mb-2 block">Our Methodology</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">The COFYS Method</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Our four-pillar framework for generating superior risk-adjusted returns and escaping saturated markets.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { 
                icon: <Repeat size={32} />, 
                title: "Cross-Selling", 
                desc: "Unlocking immediate revenue synergies by integrating service offerings across our portfolio ecosystem." 
              },
              { 
                icon: <BarChart2 size={32} />, 
                title: "Organic Growth", 
                desc: "Driving top-line expansion through operational excellence and tech-enabled efficiency, not just M&A." 
              },
              { 
                icon: <ShieldCheck size={32} />, 
                title: "Financial Synergies", 
                desc: "Optimizing capital structure and margins to improve yield and mitigate isolated business risks." 
              },
              { 
                icon: <Zap size={32} />, 
                title: "Superpower Leverage", 
                desc: "Deploying our unique 'Operator-led' expertise to professionalize and modernize legacy businesses." 
              },
            ].map((pillar, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white/5 p-8 rounded-sm border border-white/5 hover:border-gold-DEFAULT/50 transition-colors duration-300 group"
              >
                <div className="text-gold-DEFAULT mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold-DEFAULT text-charcoal-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-black antialiased">Partner in Stewardship</h2>
            <p className="text-xl text-black mb-10 max-w-2xl mx-auto font-medium antialiased [text-shadow:_0_1px_0_rgb(0_0_0_/_5%)]">
                Join an ecosystem of elite operators building the future of industrial services.
            </p>
            <Button to="/contact" variant="primary" className="bg-charcoal-950 text-white hover:bg-charcoal-800 shadow-none antialiased font-semibold">
                Start the Conversation
            </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;