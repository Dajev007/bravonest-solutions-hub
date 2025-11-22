import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import { Code2, Cpu, GraduationCap, Lightbulb, Users, Zap, Target, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroContent = () => {
  const headingRef = useScrollAnimation({ threshold: 0.1 });
  const textRef = useScrollAnimation({ threshold: 0.1 });
  const buttonsRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h1 
        ref={headingRef.ref}
        className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white scroll-fade-in-up ${headingRef.isVisible ? "visible" : ""}`}
      >
        Where Ideas Become{" "}
        <span className="text-gradient text-gradient-animate">Intelligent Solutions</span>
      </h1>
      <p 
        ref={textRef.ref}
        className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto scroll-fade-in-up ${textRef.isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "200ms" }}
      >
        Expert software development, PCB design, and pre-engineering courses that bridge innovation with education.
      </p>
      <div 
        ref={buttonsRef.ref}
        className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 magnetic-btn scroll-fade-in-up ${buttonsRef.isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "400ms" }}
      >
        <CTAButton variant="project" to="/contact#project-call">
          Book a Project Call
        </CTAButton>
        <CTAButton variant="course" to="/learn#register">
          Register for a Course
        </CTAButton>
      </div>
    </div>
  );
};

const LearningHighlightContent = () => {
  const iconRef = useScrollAnimation({ threshold: 0.2 });
  const headingRef = useScrollAnimation({ threshold: 0.2 });
  const textRef = useScrollAnimation({ threshold: 0.2 });
  const buttonRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <div 
        ref={iconRef.ref}
        className={`w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto scroll-scale-in ${iconRef.isVisible ? "visible" : ""}`}
      >
        <GraduationCap className="h-8 w-8 text-accent" />
      </div>
      <h2 
        ref={headingRef.ref}
        className={`text-3xl md:text-4xl font-bold scroll-fade-in-up ${headingRef.isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "100ms" }}
      >
        Build Your Engineering Foundation
      </h2>
      <p 
        ref={textRef.ref}
        className={`text-lg text-muted-foreground scroll-fade-in-up ${textRef.isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "200ms" }}
      >
        Our pre-engineering courses combine theory with practical projects. Learn electronics, programming, and PCB design from industry professionals.
      </p>
      <div 
        ref={buttonRef.ref}
        className={`scroll-fade-in-up ${buttonRef.isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "300ms" }}
      >
        <CTAButton variant="course" to="/learn#register" className="mt-6">
          Register for a Course
        </CTAButton>
      </div>
    </>
  );
};

const FinalCTAContent = () => {
  const headingRef = useScrollAnimation({ threshold: 0.2 });
  const textRef = useScrollAnimation({ threshold: 0.2 });
  const buttonsRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <h2 
        ref={headingRef.ref}
        className={`text-3xl md:text-4xl font-bold scroll-fade-in-up ${headingRef.isVisible ? "visible" : ""}`}
      >
        Have an Idea or Want to Learn?
      </h2>
      <p 
        ref={textRef.ref}
        className={`text-lg text-muted-foreground scroll-fade-in-up ${textRef.isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "100ms" }}
      >
        Whether you need a technical solution built or want to develop your engineering skills, we're here to help.
      </p>
      <div 
        ref={buttonsRef.ref}
        className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 scroll-fade-in-up ${buttonsRef.isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "200ms" }}
      >
        <CTAButton variant="project" to="/contact#project-call">
          Book a Project Call
        </CTAButton>
        <CTAButton variant="course" to="/learn#register">
          Register for a Course
        </CTAButton>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/bravo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 gradient-hero opacity-10 z-5"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30 z-5"></div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-[6]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <HeroContent />
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What We Do"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 parallax-container">
            <FeatureCard
              icon={Code2}
              title="Software Solutions"
              description="Custom web applications, internal tools, dashboards, and API integrations tailored to your business needs."
            />
            <FeatureCard
              icon={Cpu}
              title="PCB Design & Embedded"
              description="From schematic to prototype, we design and validate PCB solutions for IoT, automation, and custom electronics."
            />
            <FeatureCard
              icon={GraduationCap}
              title="Pre-Engineering Courses"
              description="Hands-on courses in electronics, programming, and embedded systems designed for students and early-career engineers."
            />
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Solutions"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Web Applications", desc: "Scalable, responsive web apps built with modern frameworks" },
              { title: "Internal Tools", desc: "Custom dashboards and automation tools for your team" },
              { title: "Embedded Prototypes", desc: "IoT devices and embedded systems from concept to reality" },
              { title: "Data Dashboards", desc: "Real-time analytics and visualization platforms" },
              { title: "API Integrations", desc: "Seamless connectivity between your systems and services" },
              { title: "PCB Manufacturing Support", desc: "Design for manufacturing and assembly optimization" },
            ].map((solution, idx) => (
              <Card key={idx} className="hover-lift border-border/50 glow-on-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{solution.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <LearningHighlightContent />
          </div>
        </div>
      </section>

      {/* Why Choose Bravonest */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Bravonest"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard
              icon={Lightbulb}
              title="Engineering + Education"
              description="We don't just build—we teach and empower teams with knowledge."
            />
            <FeatureCard
              icon={Target}
              title="Concept to Prototype"
              description="End-to-end development from initial idea to working prototype."
            />
            <FeatureCard
              icon={Shield}
              title="Practical & Future-Ready"
              description="Solutions built for today's needs and tomorrow's scalability."
            />
            <FeatureCard
              icon={Zap}
              title="Flexible Engagement"
              description="Project-based work or ongoing partnerships—we adapt to your needs."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <FinalCTAContent />
        </div>
      </section>
    </div>
  );
};

export default Home;
