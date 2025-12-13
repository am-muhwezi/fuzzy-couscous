import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Linkedin, Instagram, ExternalLink, Zap, Repeat, ShieldCheck, BarChart2 } from 'lucide-react';
import JoinWishlist from '../components/JoinWishlist';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: "Darrell Muhwezi",
    role: "Founder & Managing Partner",
    bio: "As Managing Partner, Darrell is the lead operator for Aegis acquisitions. He personally manages transitions, oversees P&L, and executes long-term growth strategies. His core expertise lies in implementing marketing and tech systems for rapid scaling. As an Operating Partner at Power Studio, he has a quantifiable track record of helping service-based companies add $100k-$1M in new annual revenue.",
    image: "/images/Darrell.jpeg",
    linkedin: "https://linkedin.com/in/darrellmuhwezi"
  },
  {
    name: "Kacper Orlowski",
    role: "Chairman",
    bio: "Kacper serves as Chairman, responsible for corporate governance, U.S. legal compliance, and strategic financial oversight. As VP of Praxia Sales Solutions, he brings high-level executive experience and operational acumen from scaling multi-state teams. Kacper leads the high-level governance for Aegis and manages the holding company's capital structure and banking relationships.",
    image: "https://picsum.photos/id/1025/400/500", // Placeholder
    linkedin: "#"
  },
  {
    name: "Jeremiah Attaochu",
    role: "Investor & Partner - Head of Partnerships",
    bio: "A key capital partner bringing unique dual-track experience as both a successful entrepreneur and a former NFL linebacker. Jeremiah applies the discipline and high-performance team building of elite sports to business ventures. He provides significant capital backing and focuses on high-level strategy to fuel the firm's acquisition and roll-up strategy.",
    image: "https://picsum.photos/id/1062/400/500", // Placeholder
    instagram: "https://www.instagram.com/jattaochu97"
  },
  {
    name: "Anthony Carter",
    role: "Strategic Partner",
    bio: "CEO of Power Studio, the strategic partner responsible for executing 'Phase 2' (Scaling) and 'Phase 3' (Ecosystem) stages. His firm specializes in advanced marketing, tech stack implementation, and systems integration. Anthony's team is the 'how' of the growth plan, ensuring standardized, integrated, and optimized bolt-on acquisitions.",
    image: "https://picsum.photos/id/1012/400/500", // Placeholder
    linkedin: "https://www.linkedin.com/in/anthonycarter1910"
  }
];

const About: React.FC = () => {
  return (
    <div className="w-full bg-charcoal-950">
      {/* Header */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Thesis & Vision
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              We acquire and scale cash-flowing, technology firms and service-based businesses whilst creating <strong>Uncontested Markets</strong> to scale under a private holding structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Uncontested Market Strategy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-serif text-white mb-6">The Uncontested Market Strategy</h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Aegis Keystone Holdings avoids saturated "Red Oceans" where competition is fierce and margins are strictly labor-dependent. Instead, we act as industrial technologists.
                </p>
                <p>
                  We re-architect service businesses—using vertical tech stacks, IoT, and data—to create <strong>Uncontested Market Spaces</strong> where competition is irrelevant. By shifting from selling hours to selling outcomes (uptime, efficiency, reliability), we build "Operational Alpha" that traditional competitors cannot replicate.
                </p>
                <p>
                  We are not purely financial buyers. We are ecosystem builders.
                </p>
              </div>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
              <h3 className="text-xl text-gold-DEFAULT font-medium mb-6">Target Ecosystems</h3>
              <ul className="space-y-4">
                {[
                  "Transportation & Logistics",
                  "Construction & Home Services",
                  "Professional Services",
                  "SaaS (Software as a Service)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle size={20} className="text-gold-DEFAULT mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The COFYS Method */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">Value Creation: The COFYS Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-charcoal-900 p-6 rounded-sm border border-white/5">
                    <Repeat size={28} className="text-gold-DEFAULT mb-4" />
                    <h4 className="text-lg font-serif text-white mb-2">Cross-Selling</h4>
                    <p className="text-slate-400 text-sm">Unlocking immediate revenue synergies between portfolio companies.</p>
                </div>
                <div className="bg-charcoal-900 p-6 rounded-sm border border-white/5">
                    <BarChart2 size={28} className="text-gold-DEFAULT mb-4" />
                    <h4 className="text-lg font-serif text-white mb-2">Organic Growth</h4>
                    <p className="text-slate-400 text-sm">Driving top-line expansion through better operations, not just acquisitions.</p>
                </div>
                <div className="bg-charcoal-900 p-6 rounded-sm border border-white/5">
                    <ShieldCheck size={28} className="text-gold-DEFAULT mb-4" />
                    <h4 className="text-lg font-serif text-white mb-2">Financial Synergies</h4>
                    <p className="text-slate-400 text-sm">Optimizing capital structure and margins to improve yield.</p>
                </div>
                <div className="bg-charcoal-900 p-6 rounded-sm border border-white/5">
                    <Zap size={28} className="text-gold-DEFAULT mb-4" />
                    <h4 className="text-lg font-serif text-white mb-2">Superpower Leverage</h4>
                    <p className="text-slate-400 text-sm">Deploying our unique "Operator-led" expertise to professionalize legacy businesses.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-charcoal-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <span className="text-gold-DEFAULT text-sm font-bold tracking-widest uppercase mb-2 block">Leadership & Stewardship</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">The Team</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {teamMembers.map((member, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-shrink-0 relative overflow-hidden rounded-sm w-full sm:w-40 h-40">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gold-DEFAULT/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-gold-DEFAULT transition-colors">{member.name}</h3>
                                <p className="text-gold-600 font-medium text-sm uppercase tracking-wider mb-4">{member.role}</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {member.bio}
                                </p>
                                <div className="flex gap-4">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                    {member.instagram && (
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                            <Instagram size={18} />
                                        </a>
                                    )}
                                     {!member.instagram && !member.linkedin && (
                                         <button className="text-slate-500 hover:text-white transition-colors">
                                            <ExternalLink size={18} />
                                         </button>
                                     )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 h-px bg-white/5 w-full"></div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Strategic Timeline */}
      <section className="py-24 bg-charcoal-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-white mb-16 text-center">Strategic Execution</h2>
          
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden md:block"></div>

            <div className="space-y-24">
              {[
                { 
                  step: "01", 
                  title: "Phase 1: Stabilization (The Shield)", 
                  desc: "We hire expert owner-operators, audit operations, and standardize workflows to secure the foundation. This is about protecting the downside." 
                },
                { 
                  step: "02", 
                  title: "Phase 2: Scaling (Optimization)", 
                  desc: "We implement the proprietary Tech Stack (CRM, Dashboards, Automation) and secure recurring revenue contracts to drive margin expansion." 
                },
                { 
                  step: "03", 
                  title: "Phase 3: Ecosystem (Uncontested Market)", 
                  desc: "We integrate complementary services (energy, automation) and leverage data to replicate the model regionally, rendering competition irrelevant." 
                },
              ].map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 ? (
                        <>
                            <h3 className="text-2xl text-white font-serif mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.desc}</p>
                        </>
                    ) : (
                         <div className="hidden md:block"></div> 
                    )}
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-800 border-2 border-gold-DEFAULT text-gold-DEFAULT font-bold text-xl">
                    {item.step}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 ? (
                        <>
                            <h3 className="text-2xl text-white font-serif mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.desc}</p>
                        </>
                    ) : (
                        <div className="hidden md:block"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JoinWishlist
        title="Stay Connected with Our Vision"
        description="Join our ecosystem and be the first to hear about new insights, portfolio updates, and strategic initiatives."
      />
    </div>
  );
};

export default About;