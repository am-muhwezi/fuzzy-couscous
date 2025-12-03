import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Uncontested Market Strategy',
    excerpt: 'Escaping the Red Ocean: How we re-architect service businesses using technology to create spaces where competition is irrelevant.',
    category: 'Strategy',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    image: 'https://picsum.photos/id/403/1920/1080'
  },
  {
    id: '2',
    title: 'The COFYS Method: Risk-Adjusted Returns',
    excerpt: 'An in-depth look at our four-pillar framework: Cross-selling, Organic Growth, Financial Synergies, and Superpower Leverage.',
    category: 'Methodology',
    date: 'Nov 05, 2023',
    readTime: '7 min read',
    image: 'https://picsum.photos/id/180/1920/1080'
  },
  {
    id: '3',
    title: 'Phase 2 Scaling: The Tech Stack',
    excerpt: 'Why we implement internal "Vertical SaaS" stacks. Data dominance allows us to optimize pricing and efficiency, creating Operational Alpha.',
    category: 'Technology',
    date: 'Dec 01, 2023',
    readTime: '6 min read',
    image: 'https://picsum.photos/id/60/1920/1080'
  },
  {
    id: '4',
    title: 'The MSP Shift: Unlocking Recurring Revenue',
    excerpt: 'Moving commercial clients from unpredictable "break-fix" calls to monthly "Aegis Care" retainers to build predictable yield.',
    category: 'Business Model',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    image: 'https://picsum.photos/id/20/1920/1080'
  },
  {
    id: '5',
    title: 'Deep Tech & IoT: The Ultimate Moat',
    excerpt: 'Predictive maintenance is the future. Using sensors to fix assets before they break creates a competitive advantage no manual firm can match.',
    category: 'Innovation',
    date: 'Feb 28, 2024',
    readTime: '10 min read',
    image: 'https://picsum.photos/id/3/1920/1080'
  }
];

const Insights: React.FC = () => {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  // Default to first image if nothing is hovered, or just show a neutral background
  const activeImage = hoveredPost 
    ? blogPosts.find(p => p.id === hoveredPost)?.image 
    : null;

  return (
    <div className="w-full min-h-screen bg-charcoal-950 relative overflow-hidden">
      
      {/* Background Image Reveal Layer */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-0 pointer-events-none"
          >
             <div className="absolute inset-0 bg-charcoal-950/40 z-10" />
            <img 
              src={activeImage} 
              alt="Background" 
              className="w-full h-full object-cover filter grayscale sepia-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent z-20" />
          </motion.div>
        )}
      </AnimatePresence>
      
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
          <p className="text-xl text-slate-400 max-w-2xl">
            Deep dives into our "Uncontested Market" thesis, the COFYS operational framework, and the future of industrial technology.
          </p>
        </motion.div>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              className="group relative border-t border-white/10 py-10 md:py-14 cursor-pointer transition-all duration-300 hover:border-gold-DEFAULT/50"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 relative z-10">
                
                {/* Title and Category */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-gold-DEFAULT text-xs font-bold tracking-widest uppercase">{post.category}</span>
                    <span className="h-px w-8 bg-white/20"></span>
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                        <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-serif text-white group-hover:text-gold-DEFAULT transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  {/* Expanded Content on Hover (Desktop) or always visible (Mobile) */}
                  <div className={`md:max-h-0 md:opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4`}>
                    <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
                        {post.excerpt}
                    </p>
                     <div className="mt-4 flex items-center text-sm text-gold-DEFAULT font-medium">
                        Read Article <ArrowUpRight size={16} className="ml-2" />
                    </div>
                  </div>
                  
                  {/* Mobile only excerpt */}
                  <div className="md:hidden mt-4">
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gold-DEFAULT font-medium">
                        Read Article <ArrowUpRight size={16} className="ml-2" />
                    </div>
                  </div>

                </div>

                {/* Read Time */}
                <div className="hidden md:flex items-center text-slate-500 text-sm font-medium whitespace-nowrap group-hover:text-white transition-colors">
                  <Clock size={16} className="mr-2" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;