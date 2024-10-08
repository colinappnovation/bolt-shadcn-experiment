import { FullWidthHero } from './components/FullWidthHero';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Card } from './components/Card';
import { Carousel } from './components/Carousel';
import { FullWidthCTA } from './components/FullWidthCTA';
import { VideoPlayer } from './components/VideoPlayer';
import { StatRow } from './components/StatRow';
import { HelpSection } from './components/HelpSection';
import { AngleCTA } from './components/AngleCTA';
import { LayoutGrid, Users, Wrench } from 'lucide-react';
import './App.css';

function App() {
  const carouselItems = [
    {
      title: "Feature 1",
      description: "This is a description of feature 1",
      imageSrc: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      buttonText: "Learn More",
      onButtonClick: () => console.log("Button clicked for Feature 1")
    },
    {
      title: "Feature 2",
      description: "This is a description of feature 2",
      imageSrc: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      buttonText: "Explore",
      onButtonClick: () => console.log("Button clicked for Feature 2")
    },
    {
      title: "Feature 3",
      description: "This is a description of feature 3",
      imageSrc: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      buttonText: "Get Started",
      onButtonClick: () => console.log("Button clicked for Feature 3")
    },
    {
      title: "Feature 4",
      description: "This is a description of feature 4",
      imageSrc: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      buttonText: "Learn More",
      onButtonClick: () => console.log("Button clicked for Feature 4")
    },
    {
      title: "Feature 5",
      description: "This is a description of feature 5",
      imageSrc: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      buttonText: "Explore",
      onButtonClick: () => console.log("Button clicked for Feature 5")
    },
  ];

  const stats = [
    { icon: LayoutGrid, value: '5,500', label: 'Projects' },
    { icon: Users, value: '9,500', label: 'People' },
    { icon: Wrench, value: '1,600', label: 'Engineers' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <FullWidthHero
          backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          title="Revolutionize Your Workflow"
          description="Empower your team with cutting-edge tools and seamless collaboration. Boost productivity and innovation like never before."
          primaryButton={{
            text: 'Get Started',
            onClick: () => console.log('Primary button clicked'),
          }}
          secondaryButton={{
            text: 'Learn More',
            variant: 'outline',
            onClick: () => console.log('Secondary button clicked'),
          }}
        />
        
        <StatRow stats={stats} />

        <HelpSection />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
            <div className="max-w-[90vw] mx-auto">
              <Carousel items={carouselItems} />
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                title="Card 1"
                description="This is the description for Card 1"
                imageSrc="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                buttonText="Learn More"
                onButtonClick={() => console.log("Card 1 button clicked")}
              />
              <Card
                title="Card 2"
                description="This is the description for Card 2"
                imageSrc="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                buttonText="Explore"
                onButtonClick={() => console.log("Card 2 button clicked")}
              />
              <Card
                title="Card 3"
                description="This is the description for Card 3"
                imageSrc="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                buttonText="Get Started"
                onButtonClick={() => console.log("Card 3 button clicked")}
              />
            </div>
          </div>
        </section>

        <FullWidthCTA
          title="Ready to Get Started?"
          description="Join thousands of satisfied customers and transform your workflow today."
          buttonText="Sign Up Now"
          onButtonClick={() => console.log("CTA button clicked")}
          backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />

        <AngleCTA
          title="Looking to join Keller?"
          description="Search our current career opportunities or submit your CV for general consideration."
          buttonText="View current opportunities"
          buttonHref="#opportunities"
          imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Video</h2>
            <VideoPlayer
              videoSrc="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
              title="Sample Video"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;