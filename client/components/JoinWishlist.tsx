import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface JoinWishlistProps {
  title?: string;
  description?: string;
  className?: string;
}

const JoinWishlist: React.FC<JoinWishlistProps> = ({
  title = "Join Our Exclusive Ecosystem",
  description = "Be the first to know about new portfolio opportunities, insights, and partnership programs.",
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle wishlist submission logic here
    console.log('Wishlist submission:', { name, email });
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setName('');
    }, 3000);
  };

  return (
    <section className={`py-24 bg-gradient-to-br from-charcoal-900 to-charcoal-950 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-DEFAULT rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-DEFAULT rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            {description}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-DEFAULT focus:border-transparent transition-all duration-300 backdrop-blur-sm antialiased"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-DEFAULT focus:border-transparent transition-all duration-300 backdrop-blur-sm antialiased"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Join the Wishlist
              </Button>

              <p className="text-sm text-slate-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 rounded-sm px-8 py-6 max-w-xl mx-auto"
            >
              <p className="text-gold-DEFAULT text-xl font-medium">
                Thank you for joining our wishlist!
              </p>
              <p className="text-slate-400 mt-2">
                We'll keep you updated on our latest opportunities.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default JoinWishlist;
