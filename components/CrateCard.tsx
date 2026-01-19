import Link from 'next/link'; 
import { Package, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { MotionDiv } from './framer/motion';

export type CrateStatus = 'stable' | 'beta' | 'coming-soon';

interface CrateCardProps {
  name: string;
  description: string;
  status: CrateStatus;
  features: string[];
  href: string;
  delay?: number;
}

const statusConfig: Record<CrateStatus, { label: string; className: string }> = {
  stable: { label: 'Stable', className: 'crate-badge stable' },
  beta: { label: 'Beta', className: 'crate-badge beta' },
  'coming-soon': { label: 'Coming Soon', className: 'crate-badge coming-soon' },
};

export function CrateCard({ name, description, status, features, href, delay = 0 }: CrateCardProps) {
  const { label, className } = statusConfig[status];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className={cn(
          'feature-card block h-full',
          status === 'coming-soon' && 'opacity-60 pointer-events-none'
        )}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            <span className="font-mono font-semibold">{name}</span>
          </div>
          <span className={className}>{label}</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        {status !== 'coming-soon' && (
          <div className="flex items-center gap-1 text-sm text-primary font-medium">
            View documentation
            <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </Link>
    </MotionDiv>
  );
}
