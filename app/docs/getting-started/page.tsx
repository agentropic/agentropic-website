import Link from 'next/link';
import { ChevronRight, Book, Code, Cpu, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CodeBlock } from '@/components/CodeBlock';
import { MotionDiv } from '@/components/framer/motion';

const tocItems = [
  { id: 'installation', label: 'Installation' },
  { id: 'first-agent', label: 'Your First Agent' },
  { id: 'messaging', label: 'Message Passing' },
  { id: 'next-steps', label: 'Next Steps' },
];

const installCode = `# Add to your Cargo.toml
[dependencies]
agentropic-core = "0.1"
agentropic-messaging = "0.1"
tokio = { version = "1", features = ["full"] }`;

const firstAgentCode = `use agentropic_core::prelude::*;

// Define your agent with a derive macro
#[derive(Agent)]
pub struct GreeterAgent {
    name: String,
    greeting_count: u32,
}

// Implement the agent behavior
impl AgentBehavior for GreeterAgent {
    type Message = GreetingMessage;

    async fn on_start(&mut self) -> Result<()> {
        println!("{} is ready to greet!", self.name);
        Ok(())
    }

    async fn on_message(&mut self, msg: Self::Message) -> Result<()> {
        self.greeting_count += 1;
        println!("{}: Hello, {}! (Greeting #{})", 
            self.name, msg.recipient, self.greeting_count);
        Ok(())
    }

    async fn on_stop(&mut self) -> Result<()> {
        println!("{} said {} greetings total", 
            self.name, self.greeting_count);
        Ok(())
    }
}

#[derive(Debug, Clone)]
pub struct GreetingMessage {
    pub recipient: String,
}`;

const messagingCode = `use agentropic_messaging::{Channel, Address};

#[tokio::main]
async fn main() -> Result<()> {
    // Create a channel for the agent
    let (tx, rx) = Channel::<GreetingMessage>::bounded(100);
    
    // Spawn the agent
    let agent = GreeterAgent {
        name: "Alice".into(),
        greeting_count: 0,
    };
    let handle = agent.spawn(rx).await?;
    
    // Send messages to the agent
    tx.send(GreetingMessage { 
        recipient: "Bob".into() 
    }).await?;
    
    tx.send(GreetingMessage { 
        recipient: "Charlie".into() 
    }).await?;
    
    // Gracefully stop the agent
    handle.stop().await?;
    
    Ok(())
}`;

export default function GettingStarted() {
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
              <Link href="/docs" className="hover:text-foreground transition-colors">
                Docs
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Getting Started</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_250px] gap-12">
            {/* Main content */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Learn how to build your first multi-agent system with Agentropic in just a few minutes.
                </p>

                {/* Installation */}
                <section id="installation" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code className="h-4 w-4 text-primary" />
                    </div>
                    Installation
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Add Agentropic to your Rust project by including the necessary crates in your{' '}
                    <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">Cargo.toml</code>:
                  </p>
                  <CodeBlock code={installCode} language="toml" filename="Cargo.toml" showLineNumbers={false} />
                </section>

                {/* First Agent */}
                <section id="first-agent" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Cpu className="h-4 w-4 text-primary" />
                    </div>
                    Your First Agent
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Define an agent using the <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">#[derive(Agent)]</code> macro
                    and implement the <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">AgentBehavior</code> trait:
                  </p>
                  <CodeBlock code={firstAgentCode} language="rust" filename="src/greeter.rs" />
                  <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm">
                      <strong>Key concepts:</strong> Agents have a lifecycle with{' '}
                      <code className="font-mono">on_start</code>, <code className="font-mono">on_message</code>, and{' '}
                      <code className="font-mono">on_stop</code> hooks. The derive macro generates boilerplate for state management and spawning.
                    </p>
                  </div>
                </section>

                {/* Message Passing */}
                <section id="messaging" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Book className="h-4 w-4 text-primary" />
                    </div>
                    Message Passing
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Agents communicate through typed channels. Create a channel, spawn the agent with the receiver,
                    and use the sender to dispatch messages:
                  </p>
                  <CodeBlock code={messagingCode} language="rust" filename="src/main.rs" />
                </section>

                {/* Next Steps */}
                <section id="next-steps" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link href="/docs/architecture" className="feature-card block">
                      <h3 className="font-semibold mb-2">Architecture Overview</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Understand how Agentropic's modular design works.
                      </p>
                      <span className="text-sm text-primary font-medium flex items-center gap-1">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                    <Link href="/crates" className="feature-card block">
                      <h3 className="font-semibold mb-2">Explore Crates</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Browse the full catalog of available crates.
                      </p>
                      <span className="text-sm text-primary font-medium flex items-center gap-1">
                        View crates <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                    <Link href="/examples" className="feature-card block">
                      <h3 className="font-semibold mb-2">Examples</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        See real-world examples with organizational patterns.
                      </p>
                      <span className="text-sm text-primary font-medium flex items-center gap-1">
                        View examples <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                    <Link href="/crates/cognition" className="feature-card block">
                      <h3 className="font-semibold mb-2">BDI Architecture</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Learn about Beliefs, Desires, and Intentions.
                      </p>
                      <span className="text-sm text-primary font-medium flex items-center gap-1">
                        Explore <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </section>
              </div>
            </MotionDiv>

            {/* Table of Contents */}
            <div className="hidden lg:block">
              <div className="doc-toc">
                <h3 className="font-semibold text-sm mb-4">On this page</h3>
                {tocItems.map((item) => (
                  <a key={item.id} href={`#${item.id}`}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
