import Link from 'next/link';
import { ChevronRight, ArrowRight, BookOpen, Code, Cpu, Network } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { MotionDiv } from '@/components/framer/motion';

const docSections = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Learn the basics and build your first agent in minutes.',
    href: '/docs/getting-started',
  },
  {
    icon: Cpu,
    title: 'Architecture',
    description: 'Understand the modular polyrepo design and how components work together.',
    // href: '/docs/architecture',
    href: '#'
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete API documentation for all public interfaces.',
    // href: '/docs/api',
    href: '#'
  },
  {
    icon: Network,
    title: 'Patterns',
    description: 'Explore organizational patterns like hierarchy, swarm, and market.',
    // href: '/crates/patterns',
    href: '#'
  },
];

export default function Docs() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Documentation</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to build multi-agent systems with Agentropic.
            </p>
          </MotionDiv>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {docSections.map((section, i) => (
              <MotionDiv
                key={`${section.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={section.href} className="feature-card block h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  <span className="text-sm text-primary font-medium flex items-center gap-1">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}