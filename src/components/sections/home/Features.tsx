import {

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Features() {
  const router = useRouter();

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description:
        'Automate complex workflows with our advanced AI engine and machine learning capabilities.',
      badge: 'Automation',
    },
    {
      icon: Shield,
      title: 'SOC 2 Compliance',
      description:
        'Enterprise-grade security with SOC 2 Type II certification and regular security audits.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Native Mobile Apps',
      description: 'Dedicated iOS and Android apps with real-time sync and offline capabilities.',
      badge: 'Mobile',
    },
    {
      icon: Globe,
      title: 'Multi-Region Deploy',
      description: 'Deploy to 15+ global regions with automatic failover and load balancing.',
      badge: 'Infrastructure',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Advanced reporting with custom dashboards and predictive analytics.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'White Labeling',
      description: 'Full white label solution with custom domain and branding options.',
      badge: 'Branding',
    },
    {
      icon: Code2,
      title: 'REST & GraphQL APIs',
      description: 'Modern APIs with comprehensive SDKs for all major programming languages.',
      badge: 'Developer',
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: 'Dedicated technical account manager and priority ticket resolution.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'GDPR Compliance',
      description: 'Built-in GDPR compliance tools and data privacy controls.',
      badge: 'Compliance',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Enterprise Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for Modern
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Enterprise Teams
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enterprise-grade features that help teams collaborate, automate and scale their
            operations securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience enterprise-grade features?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/pricing')}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => window.open('https://calendly.com/acme-demo')}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
