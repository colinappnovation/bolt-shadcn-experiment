import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, CheckSquare, LayoutGrid, DollarSign } from 'lucide-react';

interface HelpCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

function HelpCard({ icon, title, description, linkText, linkHref }: HelpCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="bg-yellow-100 p-3 rounded-full inline-block mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <Button variant="link" className="p-0" asChild>
          <a href={linkHref}>{linkText} →</a>
        </Button>
      </div>
    </Card>
  );
}

export function HelpSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">How can we help you?</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Whether you are here for specialist advice, technique recommendations or
          more information on our company ethics. You'll find everything you need to
          know here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <HelpCard
            icon={<Search className="w-6 h-6 text-yellow-600" />}
            title="Solutions Finder"
            description="Not sure what solution is right for you? Use our solutions finder to discover the right techniques."
            linkText="View solutions finder"
            linkHref="#solutions-finder"
          />
          <HelpCard
            icon={<CheckSquare className="w-6 h-6 text-yellow-600" />}
            title="Expertise"
            description="Keller is able to tap into a wealth of experience, and using proven, best practice methods offer a wide range..."
            linkText="View expertise"
            linkHref="#expertise"
          />
          <HelpCard
            icon={<LayoutGrid className="w-6 h-6 text-yellow-600" />}
            title="Markets"
            description="Keller has experience in nearly all markets throughout the construction industry and understands the unique..."
            linkText="View markets"
            linkHref="#markets"
          />
          <HelpCard
            icon={<DollarSign className="w-6 h-6 text-yellow-600" />}
            title="Invest in Keller"
            description="We are helping to build a sustainable future by using less resources, reducing carbon emissions and reducing waste."
            linkText="View more on investing"
            linkHref="#invest"
          />
        </div>
      </div>
    </section>
  );
}