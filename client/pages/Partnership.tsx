import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import JoinWishlist from '../components/JoinWishlist';
import { Target, BarChart2, Briefcase } from 'lucide-react';

const Partnership: React.FC = () => {
  return (
    <div className="w-full bg-charcoal-950">
      <section className="relative py-24 bg-charcoal-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
                    Stewardship & Partnership
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                    We are not slash-and-burn investors. We are industrial technologists seeking to acquire and steward exceptional businesses into their next phase of growth.
                </p>
                <Button to="/contact" variant="primary">Submit an Opportunity</Button>
            </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bg-white/5 p-8 rounded-sm border border-white/5">
                    <Target className="text-gold-DEFAULT mb-6" size={40} />
                    <h3 className="text-xl font-serif text-white mb-4">Acquisition Criteria</h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li>• EBITDA: $2M - $10M</li>
                        <li>• Revenue: $10M - $50M</li>
                        <li>• Proven Cash Flow history</li>
                        <li>• Low cyclicality / Recession Resistant</li>
                        <li>• Potential for Cross-Selling Synergies</li>
                    </ul>
                </div>
                <div className="bg-white/5 p-8 rounded-sm border border-white/5">
                    <BarChart2 className="text-gold-DEFAULT mb-6" size={40} />
                    <h3 className="text-xl font-serif text-white mb-4">Target Sectors</h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li>• Transportation & Logistics</li>
                        <li>• Construction & Home Services</li>
                        <li>• Professional Services</li>
                        <li>• SaaS (Vertical & B2B)</li>
                        <li>• Specialized Industrial Services</li>
                    </ul>
                </div>
                 <div className="bg-white/5 p-8 rounded-sm border border-white/5">
                    <Briefcase className="text-gold-DEFAULT mb-6" size={40} />
                    <h3 className="text-xl font-serif text-white mb-4">Deal Structures</h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li>• 100% Buyout</li>
                        <li>• Majority Recapitalization</li>
                        <li>• Growth Equity Injection</li>
                        <li>• Flexible Seller Financing</li>
                        <li>• Management Retention Plans</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-serif text-white mb-8 text-center">Why Founders Choose Aegis</h2>
              <div className="space-y-8">
                  <div className="flex gap-6">
                      <div className="text-5xl font-serif text-white/10 font-bold">01</div>
                      <div>
                          <h4 className="text-xl text-white font-medium mb-2">Legacy Preservation</h4>
                          <p className="text-slate-400">We respect the history and culture you've built. We protect the downside through "Phase 1: Stabilization," ensuring the business thrives without you.</p>
                      </div>
                  </div>
                   <div className="flex gap-6">
                      <div className="text-5xl font-serif text-white/10 font-bold">02</div>
                      <div>
                          <h4 className="text-xl text-white font-medium mb-2">Operational Alpha</h4>
                          <p className="text-slate-400">We don't just provide capital; we provide the "Superpower Leverage" of our operator-led team to professionalize operations and unlock organic growth.</p>
                      </div>
                  </div>
                   <div className="flex gap-6">
                      <div className="text-5xl font-serif text-white/10 font-bold">03</div>
                      <div>
                          <h4 className="text-xl text-white font-medium mb-2">Uncontested Market Creation</h4>
                          <p className="text-slate-400">We help your business escape the "Red Ocean" of price competition by integrating technology to create a differentiated, high-margin service offering.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <JoinWishlist
        title="Join Our Partnership Network"
        description="Be the first to know about acquisition opportunities and strategic partnership programs."
      />
    </div>
  );
};

export default Partnership;