import React from 'react';
import { motion } from 'framer-motion';
import JoinWishlist from '../components/JoinWishlist';

const Insights: React.FC = () => {

  return (
    <div className="w-full min-h-screen bg-charcoal-950 relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-gold-DEFAULT font-bold tracking-widest uppercase text-sm mb-4 block">Thought Leadership</span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6">
            Insights & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-700">
              Market Intelligence
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-12">
            Deep dives into our "Uncontested Market" thesis, the COFYS operational framework, and the future of industrial technology.
          </p>
        </motion.div>
      </div>

      <JoinWishlist
        title="Join Our Wishlist"
        description="Be notified when we publish new articles, insights, and thought leadership content."
      />
    </div>
  );
};

export default Insights;