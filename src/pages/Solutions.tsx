import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Plug, BarChart, Cpu, Layers, Wrench, Zap, Wifi, Cog, Home, Factory } from "lucide-react";

const Solutions = () => {
  const softwareSolutions = [
    {
      icon: Code,
      title: "Web Applications",
      bullets: ["Modern React/TypeScript stacks", "Responsive and accessible", "Cloud-ready deployment"],
      tag: "For Startups",
    },
    {
      icon: Cog,
      title: "Internal Tools & Automation",
      bullets: ["Custom workflows", "Process automation", "Admin dashboards"],
      tag: "For SMEs",
    },
    {
      icon: Plug,
      title: "API & Integrations",
      bullets: ["RESTful and GraphQL APIs", "Third-party integrations", "Microservices architecture"],
      tag: "Enterprise",
    },
    {
      icon: BarChart,
      title: "Data Dashboards",
      bullets: ["Real-time analytics", "Custom visualizations", "Business intelligence"],
      tag: "Data-Driven",
    },
  ];

  const pcbSolutions = [
    {
      icon: Layers,
      title: "PCB Schematic & Layout",
      desc: "Professional PCB design from concept to Gerber files using industry-standard tools.",
    },
    {
      icon: Wrench,
      title: "Prototyping & Validation",
      desc: "Rapid prototyping, assembly, and functional testing to validate your design.",
    },
    {
      icon: Zap,
      title: "Component Selection",
      desc: "Optimal component selection balancing performance, cost, and availability.",
    },
    {
      icon: Cpu,
      title: "Basic Firmware Support",
      desc: "Simple firmware to get your embedded system up and running quickly.",
    },
  ];

  const useCases = [
    { icon: Wifi, title: "IoT Sensors", story: "Environmental monitoring device with cloud connectivity" },
    { icon: Home, title: "Smart Home Hub", story: "Central controller for home automation systems" },
    { icon: Factory, title: "Industrial Automation", story: "Custom PLCs and control panels for manufacturing" },
    { icon: Zap, title: "Power Management", story: "Battery management systems for renewable energy" },
    { icon: Database, title: "Data Logger", story: "Multi-channel data acquisition for research labs" },
    { icon: Cog, title: "Educational Kits", story: "Learning platforms for electronics and programming" },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Solutions That <span className="text-gradient">Scale</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From software to silicon—we build integrated solutions for the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Bravonest is your combined software and hardware solutions partner. Whether you need a web application, an embedded device, or both working together, we deliver end-to-end engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Software Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Software Solutions"
            subtitle="Modern applications built for performance and scalability"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {softwareSolutions.map((solution, idx) => (
              <Card key={idx} className="hover-lift border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{solution.tag}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {solution.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PCB Design & Embedded */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="PCB Design & Embedded Systems"
            subtitle="Hardware solutions from schematic to production"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pcbSolutions.map((solution, idx) => (
              <Card key={idx} className="hover-lift border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{solution.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {["Idea", "Schematic", "Layout", "Prototype", "Testing"].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-tech text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <p className="mt-2 text-sm font-medium">{step}</p>
                  </div>
                  {idx < 4 && (
                    <div className="hidden md:block w-16 h-0.5 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Use Cases"
            subtitle="Real-world applications we've built"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {useCases.map((useCase, idx) => (
              <Card key={idx} className="hover-lift border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <useCase.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{useCase.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Next Build?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your software or hardware project and create a solution that works.
            </p>
            <CTAButton variant="project" to="/contact#project-call" className="mt-6">
              Book a Project Call
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
