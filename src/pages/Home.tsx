import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import { Code2, Cpu, GraduationCap, Lightbulb, Users, Zap, Target, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Where Ideas Become{" "}
              <span className="text-gradient">Intelligent Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Expert software development, PCB design, and pre-engineering courses that bridge innovation with education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <CTAButton variant="project" to="/contact#project-call">
                Book a Project Call
              </CTAButton>
              <CTAButton variant="course" to="/learn#register">
                Register for a Course
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What We Do"
            subtitle="Three core pillars driving innovation and learning"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
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
            subtitle="Explore our range of technical services"
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
              <Card key={idx} className="hover-lift border-border/50">
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
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <GraduationCap className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Build Your Engineering Foundation</h2>
            <p className="text-lg text-muted-foreground">
              Our pre-engineering courses combine theory with practical projects. Learn electronics, programming, and PCB design from industry professionals.
            </p>
            <CTAButton variant="course" to="/learn#register" className="mt-6">
              Register for a Course
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Why Choose Bravonest */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Bravonest"
            subtitle="What sets us apart"
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
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Have an Idea or Want to Learn?</h2>
            <p className="text-lg text-muted-foreground">
              Whether you need a technical solution built or want to develop your engineering skills, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <CTAButton variant="project" to="/contact#project-call">
                Book a Project Call
              </CTAButton>
              <CTAButton variant="course" to="/learn#register">
                Register for a Course
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
