"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cpu,
  MessageSquare,
  Brain,
  Network,
  Zap,
  Shield,
  ArrowRight,
  Package,
  Github,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { FeatureCard } from '@/components/FeatureCard';
import { CodeBlock } from '@/components/CodeBlock';


const features = [
  {
    icon: Cpu,
    title: 'Agent Primitives',
    description: 'Complete lifecycle management with type-safe agent definitions, state machines, and capability systems.',
  },
  {
    icon: MessageSquare,
    title: 'Message Passing',
    description: 'Async/await message protocols with Tokio. Type-safe communication between agents with serialization support.',
  },
  {
    icon: Brain,
    title: 'BDI Architecture',
    description: 'Beliefs, Desires, Intentions cognitive model. Plan libraries, goal reasoning, and deliberation cycles.',
  },
  {
    icon: Network,
    title: 'Organizational Patterns',
    description: '8+ patterns including hierarchy, swarm, market, coalition, holarchy, federation, and blackboard.',
  },
  {
    icon: Zap,
    title: 'Async Runtime',
    description: 'Built on Tokio for high-performance concurrent execution. Scale from single agents to thousands.',
  },
  {
    icon: Shield,
    title: 'Rust Safety',
    description: "Memory safety, thread safety, and fearless concurrency. Leverage Rust's type system for robust agents.",
  },
];

const quickStartCode = `use agentropic_core::prelude::*;
use agentropic_messaging::Channel;

#[derive(Agent)]
struct MyAgent {
    name: String,
    inbox: Channel<Message>,
}

impl AgentBehavior for MyAgent {
    async fn on_message(&mut self, msg: Message) -> Result<()> {
        println!("{}: received {:?}", self.name, msg);
        Ok(())
    }
}

#[tokio::main]
async fn main() -> Result<()> {
    let agent = MyAgent::new("Alice");
    agent.start().await
}`;

const stats = [
  { label: 'Crates', value: '10', icon: Package },
  { label: 'Progress', value: '40%', icon: Clock },
  { label: 'Patterns', value: '8+', icon: Network },
];

const roadmapItems = [
  { name: 'agentropic-core', status: 'done' },
  { name: 'agentropic-messaging', status: 'done' },
  { name: 'agentropic-cognition', status: 'in-progress' },
  { name: 'agentropic-patterns', status: 'in-progress' },
  { name: 'agentropic-runtime', status: 'planned' },
  { name: 'agentropic-deploy', status: 'planned' },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 hero-gradient" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-block"
                >
                  Agent-Oriented Programming
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block text-primary"
                >
                  for Rust
                </motion.span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Build intelligent, autonomous multi-agent systems with Rust's safety guarantees.
                Production-ready framework for the next generation of distributed AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href="/docs/getting-started">
                <Button variant="hero" size="xl">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://github.com/agentropic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero-outline" size="xl">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-8 sm:gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need for Multi-Agent Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive framework with modular crates designed for production-grade agent applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Start Building in Minutes
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Simple, expressive API that feels natural in Rust. Define agents with derive macros,
                implement behaviors with async traits, and let the runtime handle the rest.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Derive macros for agent definition',
                  'Async/await message handling',
                  'Type-safe channel communication',
                  'Built-in lifecycle management',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/docs/getting-started">
                <Button variant="default" size="lg">
                  Read the Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="w-[100%] place-self-center overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CodeBlock
                code={quickStartCode}
                language="rust"
                filename="main.rs"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Polyrepo Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modular design with independent crates for maximum flexibility and reusability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Overall Progress</span>
                <span className="text-primary font-bold">40%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '40%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="progress-bar-fill"
                />
              </div>
            </div>

            {/* Crate list */}
            <div className="grid sm:grid-cols-2 gap-3">
              {roadmapItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border"
                >
                  <div
                    className={`h-3 w-3 rounded-full ${
                      item.status === 'done'
                        ? 'bg-emerald-500'
                        : item.status === 'in-progress'
                        ? 'bg-amber-500 animate-pulse-slow'
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                  <span className="font-mono text-sm">{item.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/roadmap">
                <Button variant="outline">
                  View Full Roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border p-8 sm:p-12 text-center"
          >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Build Intelligent Agents?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Join the community building the future of multi-agent systems in Rust.
                Open source, MIT/Apache-2.0 licensed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/getting-started">
                  <Button variant="hero" size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a
                  href="https://github.com/agentropic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <Github className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
