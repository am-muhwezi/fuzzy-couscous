import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-12 mb-6" />
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              A strategic investment holding company transforming traditional service firms into tech-enabled platforms through operational excellence and active leadership.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-gold-DEFAULT transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-gold-DEFAULT transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:founder@aegiskeystoneholdings.com" className="text-slate-400 hover:text-gold-DEFAULT transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-gold-DEFAULT transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-gold-DEFAULT transition-colors">Portfolio</Link></li>
              <li><Link to="/insights" className="text-slate-400 hover:text-gold-DEFAULT transition-colors">Insights</Link></li>
              <li><Link to="/partnership" className="text-slate-400 hover:text-gold-DEFAULT transition-colors">Partnership Model</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-gold-DEFAULT transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gold-DEFAULT flex-shrink-0" />
                <span>8 The Green, Ste R. Dover, DE 19901</span>
              </li>
              <li>
                <span className="block text-white mb-1">Direct Inquiry</span>
                <a href="mailto:founder@aegiskeystoneholdings.com" className="hover:text-gold-DEFAULT">founder@aegiskeystoneholdings.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aegis Keystone Holdings Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;