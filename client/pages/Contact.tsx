import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      console.log('Form Submitted', formState);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full min-h-screen bg-charcoal-950 flex flex-col">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        
        {/* Contact Info Side */}
        <div className="bg-charcoal-900 p-12 lg:p-24 flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Get in Touch</h1>
                <p className="text-xl text-slate-400 mb-12">
                    Whether you are a business owner looking to exit, a broker with a mandate, or an investor seeking partnership, we want to hear from you.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-sm text-gold-DEFAULT border border-white/10">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-medium text-lg">Email Us</h3>
                            <a href="mailto:founder@aegiskeystoneholdings.com" className="text-slate-400 hover:text-gold-DEFAULT transition-colors">founder@aegiskeystoneholdings.com</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-sm text-gold-DEFAULT border border-white/10">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-medium text-lg">Call Us</h3>
                            <p className="text-slate-400">+1 (212) 555-0123</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-sm text-gold-DEFAULT border border-white/10">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-medium text-lg">Visit Us</h3>
                            <p className="text-slate-400">8 The Green, Ste R. Dover, DE 19901</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Form Side */}
        <div className="bg-charcoal-950 p-12 lg:p-24 flex flex-col justify-center relative">
            <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="max-w-lg w-full mx-auto"
            >
                {status === 'success' ? (
                    <div className="text-center py-16 bg-white/5 border border-gold-DEFAULT/20 rounded-sm">
                        <h3 className="text-2xl text-white font-serif mb-4">Message Sent</h3>
                        <p className="text-slate-400 mb-8">Thank you for contacting Aegis Keystone Holdings. Our team will review your inquiry and respond shortly.</p>
                        <Button onClick={() => setStatus('idle')} variant="outline">Send Another</Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-slate-300">Company Name</label>
                            <input 
                                type="text" 
                                id="company" 
                                name="company"
                                value={formState.company}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT transition-all"
                                placeholder="Your Company Ltd."
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                required
                                rows={5}
                                value={formState.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT transition-all"
                                placeholder="Tell us about your inquiry..."
                            ></textarea>
                        </div>

                        <Button type="submit" variant="primary" className="w-full py-4">
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                )}
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;