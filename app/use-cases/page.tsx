import Link from 'next/link';
import { ChevronRight, Blocks, Wallet, Truck, Bot, Server, FileCode } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { MotionDiv } from '@/components/framer/motion';

const useCases = [
  {
    icon: Blocks,
    title: 'Blockchain & Agentic dApps',
    description: 'Build decentralized autonomous organizations (DAOs) and smart contract-powered agent networks.',
    examples: [
      'Autonomous trading agents on DEXs',
      'Multi-sig wallet coordinators',
      'Cross-chain bridge validators',
      'NFT minting and distribution agents',
    ],
  },
  {
    icon: Wallet,
    title: 'Financial Trading Systems',
    description: 'High-frequency trading, market making, and portfolio management with coordinated agent strategies.',
    examples: [
      'Market making agent swarms',
      'Risk management hierarchies',
      'Cross-exchange arbitrage',
      'Sentiment analysis coalitions',
    ],
  },
  {
    icon: Truck,
    title: 'Supply Chain Coordination',
    description: 'Optimize logistics and inventory management through distributed agent networks.',
    examples: [
      'Warehouse inventory agents',
      'Delivery route optimization',
      'Supplier negotiation markets',
      'Demand forecasting teams',
    ],
  },
  {
    icon: Bot,
    title: 'Robotics & IoT',
    description: 'Coordinate fleets of robots and IoT devices with swarm intelligence patterns.',
    examples: [
      'Drone swarm coordination',
      'Factory automation hierarchies',
      'Smart building management',
      'Agricultural robot teams',
    ],
  },
  {
    icon: Server,
    title: 'Distributed Systems',
    description: 'Build fault-tolerant distributed applications with agent-based architecture.',
    examples: [
      'Microservice orchestration',
      'Load balancing agents',
      'Consensus protocols',
      'Distributed caching',
    ],
  },
  {
    icon: FileCode,
    title: 'Smart Contract Automation',
    description: 'Automate complex on-chain operations with intelligent agent coordination.',
    examples: [
      'Yield optimization agents',
      'Liquidation bots',
      'Governance voting agents',
      'Protocol parameter tuning',
    ],
  },
];

export default function UseCasesPage() {
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
              <span className="text-foreground">Use Cases</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Use Cases</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Agentropic powers intelligent systems across industries.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <MotionDiv
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example) => (
                    <li key={example} className="text-sm flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {example}
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
