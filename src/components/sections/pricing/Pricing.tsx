'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for startups building their first SaaS product',
      price: 'Free',
      period: '',
      badge: null,
      features: [
        '1 team workspace',
        'Basic API monitoring',
        'Community support',
        '10K API requests/mo',
        'Basic error tracking',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing SaaS companies scaling their operations',
      price: '$29',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited workspaces',
        'Real-time API monitoring',
        'Priority support',
        '1M API requests/mo',
        'Advanced error tracking',
        'Custom API endpoints',
        'Team collaboration',
        'Performance analytics',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale SaaS platforms with complex requirements',
      price: 'Custom',
      period: '',
      badge: 'Contact Sales',
      features: [
        'Everything in Professional',
        'Unlimited API requests',
        '24/7 phone support',
        'Custom integrations',
        'Advanced security',
        '99.99% uptime SLA',
        'Dedicated success manager',
        'Custom API training',
      ],
      cta: 'View Demo',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            API Platform Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your API
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Flexible pricing plans designed for modern API-first companies. Only pay for what you
            use with unlimited scalability.
          </p>

          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => {}}
              className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm"
            >
              Monthly
            </button>
            <button
              onClick={() => {}}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => router.push('/')}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom API solution?</h3>
          <p className="text-muted-foreground mb-6">
            Our enterprise solutions support billions of API requests with custom rate limits,
            dedicated infrastructure and 24/7 support.
          </p>
          <Button onClick={() => router.push('/')} variant="outline" size="lg">
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
