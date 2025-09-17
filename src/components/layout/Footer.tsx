import Link from 'next/link';

import {

import { Button } from '@/components/ui/button';
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Cloud Analytics', href: '/analytics' },
        { name: 'API Access', href: '/api' },
        { name: 'Data Integration', href: '/integrations' },
        { name: 'Custom Reports', href: '/reports' },
        { name: 'Security', href: '/security' },
        { name: 'Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'API Status', href: '/status' },
        { name: 'Training', href: '/training' },
        { name: 'Community', href: '/community' },
        { name: 'Case Studies', href: '/cases' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Security', href: '/security' },
        { name: 'SOC 2', href: '/compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/acmesaas' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/acmesaas' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/acmesaas' },
  ];

  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <span className="font-bold text-xl">Acme SaaS</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Enterprise-grade analytics and data integration platform helping businesses make
                smarter decisions through AI-powered insights.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contact@acmesaas.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">100 Technology Drive, San Francisco</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Get Product Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Work email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button size="sm" className="bg-primary text-primary-foreground">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Acme SaaS. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md hover:bg-primary/10 flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="size-4 text-primary" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
