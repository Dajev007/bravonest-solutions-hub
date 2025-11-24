import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Ear, Lightbulb, Wrench, GraduationCap, Heart, Shield, Users, Code } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Mr.B. Dajev",
      role: "Director & CEO",
      desc: "Electrical and Electronic Engineer, Expertise in IOT and Data Science",
      image: "/dajev.jpg",
    },
    {
      name: "Mr.R. Abinayan",
      role: "Director",
      desc: "Expert in software development and data science",
      image: "/team/abinayan.jpeg",
    },
    {
      name: "Mr. Jude Sajith",
      role: "Technical Advisor",
      desc: "Educator and engineer passionate about making tech accessible",
      image: "/team/jude.jpg",
    },
    {
      name: "Mr.T. Parathan",
      role: "CTO",
      desc: "Expert in full stack development and project management",
      image: "/team/parathan.png",
    },
    {
      name: "Mr.V.Sivaharan",
      role: "Marketing Head",
      desc: "M.Med.Stats(UoK), B.Sc(Hons) Audiology, Dip.Psych & counselling",
      image: "team/siva.jpg",
    },
    {
      name: "Mr.B. Dinuj",
      role: "Course Coordinator",
      desc: "Ensures every learner achieves their goals",
      image: "https://i.pravatar.cc/300?img=15",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background image for About hero. Place an image at /about.png in public/ to use it. */}
        <img src="/about.png" alt="About Bravonest" className="absolute inset-0 w-full h-full object-cover z-0" />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 z-5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Left: text */}
              <div className="space-y-6 text-left md:pl-8 lg:pl-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  About <span className="text-gradient">Bravonest</span>
                </h1>
                <p className="text-xl text-white/90 max-w-xl">
                  We bridge the gap between real-world engineering projects and practical education.
                </p>
              </div>

              {/* Right: empty column gives space so content sits left over the background image */}
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionHeader
              title="Our Story"
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
            <Card className="border-border/50 glow-on-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To deliver engineering excellence while empowering the next generation of builders. We create solutions that work and courses that inspire.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50 glow-on-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-secondary" />
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
            
            centered
          />
          
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { icon: Ear, title: "Listen", desc: "We start by understanding your goals, constraints, and vision" },
              { icon: Lightbulb, title: "Design", desc: "We create solutions that are practical, scalable, and elegant" },
              { icon: Wrench, title: "Build & Validate", desc: "Iterative development with testing at every stage" },
              { icon: GraduationCap, title: "Teach & Support", desc: "We document, train, and ensure you can maintain what we build" },
            ].map((step, idx) => (
              <Card key={idx} className="hover-lift border-border/50 text-center glow-on-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-accent" />
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
            
            centered
          />
          
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Clarity", desc: "Clear communication, honest timelines, no hidden complexity" },
              { icon: Target, title: "Reliability", desc: "We deliver what we promise, when we promise it" },
              { icon: GraduationCap, title: "Learning", desc: "Every project is an opportunity to grow—for us and our clients" },
              { icon: Heart, title: "Integrity", desc: "We do the right thing, even when no one is watching" },
            ].map((value, idx) => (
              <Card key={idx} className="border-border/50 text-center glow-on-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
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
            
            centered
          />
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="hover-lift border-border/50 relative overflow-visible glow-on-hover p-6 max-w-sm mx-auto">
                {/* Image positioned overlapping the top-left edge of the card (larger) */}
                <div className="absolute -top-8 -left-8 z-10">
                  <img
                    src={member.image ?? "/dajev.jpg"}
                    alt={`${member.name} photo`}
                    className="w-28 h-28 rounded-full object-cover border-4 border-black/10 shadow-xl transition-shadow hover:shadow-2xl"
                  />
                </div>

                <CardContent>
                  <div className="flex flex-col items-center justify-center text-center min-h-[96px]">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-semibold text-primary">{member.role}</CardDescription>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4 text-center">{member.desc}</p>
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
