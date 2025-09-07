import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.socialLinks.github,
      icon: Github
    },
    {
      name: 'LinkedIn', 
      url: personalInfo.socialLinks.linkedin,
      icon: Linkedin
    },
    {
      name: 'LeetCode',
      url: personalInfo.socialLinks.leetcode,
      icon: Code2
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: Mail
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary glow-primary">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {personalInfo.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="/tech-stack" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Tech Stack
              </a>
              <a href="/certifications" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Certifications
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 glow-card"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-muted-foreground text-sm">
              Available for collaboration & freelance opportunities
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with React & TypeScript ⚡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;