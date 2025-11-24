/*
  Page: About
  Purpose: Describe the company's story, mission, approach, values, and team. This
  page gives context about Bravonest's background, guiding principles, and people.

  Key sections:
  - Hero (brand introduction)
  - Our Story (narrative)
  - Mission & Vision (cards)
  - Approach & Values (process and principles)
  - Team (cards for each team member)
*/

import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Ear, Lightbulb, Wrench, GraduationCap, Heart, Shield, Users, Code } from "lucide-react";

const About = () => {
  const team = [
    { name: "Alex Chen", role: "Founder & Software Lead", desc: "Full-stack engineer with 10+ years building scalable systems" },
    { name: "Sarah Martinez", role: "PCB Design Lead", desc: "Expert in high-speed PCB design and embedded systems integration" },
    { name: "Jordan Lee", role: "Course Director", desc: "Educator and engineer passionate about making tech accessible" },
    { name: "Priya Sharma", role: "Embedded Systems Engineer", desc: "Specializes in IoT and firmware development" },
    { name: "Marcus Thompson", role: "Web Development Lead", desc: "React and Node.js specialist with startup experience" },
    { name: "Emily Wang", role: "Student Success Manager", desc: "Ensures every learner achieves their goals" },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight hero-title" style={{ animationDelay: '80ms' }}>
              About <span className="text-gradient">Bravonest</span>
            </h1>
            <p className="text-xl text-muted-foreground hero-subtitle" style={{ animationDelay: '180ms' }}>
              We bridge the gap between real-world engineering projects and practical education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionHeader
              title="Our Story"
              subtitle="Born from a passion for building and teaching"
              centered
            />
            <div className="text-lg text-muted-foreground space-y-4 mt-8">
              <p>
                Bravonest started with a simple observation: the best engineers are those who never stop learning, and the best learning happens through building real things.
              </p>
              <p>
                We've combined our expertise in software development and PCB design with a commitment to education. Whether we're building a custom IoT device for a client or teaching students the fundamentals of embedded systems, we apply the same rigorous, hands-on approach.
              </p>
              <p>
                Today, we serve startups, SMEs, educational institutions, and aspiring engineers—helping them turn ideas into reality and knowledge into capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary icon-interactive" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To deliver engineering excellence while empowering the next generation of builders. We create solutions that work and courses that inspire.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-secondary icon-interactive" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A world where innovative ideas are quickly realized and where practical engineering knowledge is accessible to everyone who wants to learn.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Approach"
            subtitle="How we work with clients and students"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { icon: Ear, title: "Listen", desc: "We start by understanding your goals, constraints, and vision" },
              { icon: Lightbulb, title: "Design", desc: "We create solutions that are practical, scalable, and elegant" },
              { icon: Wrench, title: "Build & Validate", desc: "Iterative development with testing at every stage" },
              { icon: GraduationCap, title: "Teach & Support", desc: "We document, train, and ensure you can maintain what we build" },
            ].map((step, idx) => (
              <Card key={idx} className="hover-lift border-border/50 text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-accent icon-interactive" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide our work"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Clarity", desc: "Clear communication, honest timelines, no hidden complexity" },
              { icon: Target, title: "Reliability", desc: "We deliver what we promise, when we promise it" },
              { icon: GraduationCap, title: "Learning", desc: "Every project is an opportunity to grow—for us and our clients" },
              { icon: Heart, title: "Integrity", desc: "We do the right thing, even when no one is watching" },
            ].map((value, idx) => (
              <Card key={idx} className="border-border/50 text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary icon-interactive" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Meet the Bravonest Team"
            subtitle="The engineers and educators behind our work"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="hover-lift border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-tech flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-center text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-center font-semibold text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{member.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Want to Work With Our Team or Learn From Us?</h2>
            <p className="text-lg text-muted-foreground">
              We're always excited to take on new projects and welcome new students.
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

export default About;
