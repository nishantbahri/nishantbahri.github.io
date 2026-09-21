import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BlogSection from '@/components/BlogSection';
import WorkSection from '@/components/WorkSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';
import { useAnimateOnLoad } from '@/hooks/useAnimateOnLoad';

const Index = () => {
  useAnimateOnLoad();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        <div className="mx-auto max-w-screen-sm px-5 py-6 space-y-16">
          <Hero />
          <BlogSection limit={3} showLink={true} />
          <WorkSection showLink={true} />
          <ProjectsSection limit={3} showLink={true} />
          <SkillsSection />
          <ConnectSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
