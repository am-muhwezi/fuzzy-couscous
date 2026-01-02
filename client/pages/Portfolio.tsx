import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '../types';
import JoinWishlist from '../components/JoinWishlist';
import { X, ArrowUpRight } from 'lucide-react';

const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Apex Climate Systems',
    category: 'HVAC & Mechanical',
    description: 'Executive Summary: A dominant commercial HVAC provider in the tri-state area. We are currently in Phase 2 (Optimization), implementing a predictive maintenance tech stack to transition revenue from one-off repairs to annual recurring contracts.',
    image: 'https://picsum.photos/id/1033/800/600',
    details: ['Deal Type: Operator Buy-in', 'Strategy: Tech-Enabled Service Transformation', 'Alpha Source: Recurring Revenue Shift', 'Status: Phase 2 - Scaling']
  },
  {
    id: '2',
    title: 'Core Industrial Services',
    category: 'Industrial Maintenance',
    description: 'Executive Summary: A specialized heavy machinery maintenance firm. Core represents a pure "Superpower Leverage" play, where Aegis operational protocols were installed to professionalize a legacy family business, doubling operating margins in 18 months.',
    image: 'https://picsum.photos/id/1025/800/600',
    details: ['Deal Type: Strategic Turnaround', 'Strategy: Operational Standardization', 'Alpha Source: Margin Expansion', 'Status: Phase 3 - Ecosystem Integration']
  },
  {
    id: '3',
    title: 'NexData Infra',
    category: 'Digital Infrastructure',
    description: 'Executive Summary: Boutique data center cooling solutions. This asset serves as the "Technological Spine" of our ecosystem, providing the vertical integration necessary to support AI compute demand and offer high-end infrastructure services.',
    image: 'https://picsum.photos/id/60/800/600',
    details: ['Deal Type: Vertical Integration', 'Strategy: Infrastructure-as-a-Service', 'Alpha Source: Cross-Selling Synergies', 'Status: Phase 2 - Scaling']
  },
  {
    id: '4',
    title: 'Future Ventures',
    category: 'Sector Watchlist',
    description: 'Executive Summary: Actively seeking "atoms-based" businesses in precision agriculture and automated logistics. We are targeting cash-flowing assets ripe for the COFYS method—specifically those with untapped cross-selling potential.',
    image: 'https://picsum.photos/id/20/800/600',
    details: ['Target EBITDA: $2M - $10M', 'Sector focus: Logistics / AgTech', 'Structure: Majority Recapitalization', 'Thesis: Uncontested Market Creation']
  }
];

const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = portfolioData.find(item => item.id === selectedId);

  return (
    <div className="w-full bg-charcoal-950 min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Ecosystem</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A curated portfolio of market-leading companies where we deploy capital, expertise, and the COFYS method to generate operational alpha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className="group cursor-pointer relative overflow-hidden rounded-sm bg-charcoal-900 border border-white/5 hover:border-gold-DEFAULT/50 transition-colors"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold tracking-widest text-gold-DEFAULT uppercase mb-2 block">{item.category}</span>
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold-DEFAULT transition-colors">{item.title}</h3>
                <p className="text-slate-400 line-clamp-3 text-sm leading-relaxed">{item.description}</p>
                <div className="mt-6 flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    View Deal Sheet <ArrowUpRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
             {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            {/* Card Content */}
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-3xl bg-charcoal-900 border border-white/10 rounded-sm overflow-hidden z-10"
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-gold-DEFAULT hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="h-64 sm:h-80 w-full relative">
                 <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent"></div>
              </div>

              <div className="p-8 md:p-12">
                <span className="text-sm font-bold tracking-widest text-gold-DEFAULT uppercase mb-2 block">{selectedItem.category}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">{selectedItem.title}</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="border-t border-white/10 pt-8">
                    <h4 className="text-white font-medium mb-4">Deal Metrics & Strategy</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedItem.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-slate-400 text-sm">
                                <span className="w-1.5 h-1.5 bg-gold-DEFAULT rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <JoinWishlist
        title="Interested in Our Portfolio?"
        description="Get exclusive updates on our ecosystem companies, new acquisitions, and investment opportunities."
      />
    </div>
  );
};

export default Portfolio;