/*
  Page: Learn
  Purpose: Course catalogue, FAQ, and registration form for Bravonest's pre-engineering
  courses. Presents course cards, learning experience highlights, and a registration
  form that validates required fields before showing confirmation via toast.

  Key UI patterns:
  - `Card` components for course display
  - `Accordion` for FAQs
  - Simple local state form handling with `useToast` feedback
*/

import { useState } from "react";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Target, Users, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Learn = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  const courses = [
    {
      title: "Foundations of Electronics & Circuits",
      level: "Beginner",
      duration: "4-6 weeks",
      points: ["Basic circuit theory and components", "Hands-on breadboard projects", "Multimeter and oscilloscope fundamentals"],
    },
    {
      title: "Programming Basics for Engineering",
      level: "Beginner",
      duration: "4-5 weeks",
      points: ["C and Python fundamentals", "Writing clean, maintainable code", "Data structures for embedded systems"],
    },
    {
      title: "Introduction to PCB Design",
      level: "Intermediate",
      duration: "6-8 weeks",
      points: ["Schematic capture and component selection", "PCB layout best practices", "Manufacturing considerations"],
    },
    {
      title: "Embedded Systems Starter",
      level: "Intermediate",
      duration: "6-8 weeks",
      points: ["Microcontroller basics (Arduino, STM32)", "Sensor integration and data acquisition", "Communication protocols (I2C, SPI, UART)"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Received!",
      description: "We'll contact you with the next available batch details.",
    });

    setFormData({ name: "", email: "", course: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight hero-title" style={{ animationDelay: '80ms' }}>
              Pre-Engineering Courses with <span className="text-gradient">Real-World Focus</span>
            </h1>
            <p className="text-xl text-muted-foreground hero-subtitle" style={{ animationDelay: '180ms' }}>
              Build practical skills in electronics, programming, and PCB design from industry professionals.
            </p>
            <CTAButton variant="course" to="/learn#register" className="mt-6">
              Register for a Course
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Course Catalogue */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Course Catalogue"
            subtitle="Choose from our range of practical engineering courses"
            centered
          />
          
          <div className="grid sm:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {courses.map((course, idx) => (
              <Card key={idx} className="hover-lift border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={course.level === "Beginner" ? "default" : "secondary"}>
                      {course.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {course.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 icon-interactive" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Learning Experience"
            subtitle="What makes our courses different"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Project-Based", desc: "Build real devices and systems, not just theory" },
              { icon: Users, title: "Doubt Support", desc: "Direct access to instructors for questions" },
              { icon: FileText, title: "Structured Notes", desc: "Comprehensive materials and reference guides" },
              { icon: BookOpen, title: "Flexible Delivery", desc: "Online, in-person, or hybrid options" },
            ].map((feature, idx) => (
              <Card key={idx} className="border-border/50 text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-accent icon-interactive" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently Asked Questions"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who are these courses for?</AccordionTrigger>
                <AccordionContent>
                  Our courses are designed for students, early-career engineers, hobbyists, and anyone looking to build practical engineering skills. No prior experience is required for beginner courses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What format are the courses?</AccordionTrigger>
                <AccordionContent>
                  We offer flexible formats including online live sessions, in-person workshops, and hybrid models. Each course includes hands-on projects and direct instructor support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need any equipment?</AccordionTrigger>
                <AccordionContent>
                  We provide a list of recommended tools and components for each course. For some courses, starter kits are available for purchase or included in the course fee.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can institutions book courses for their students?</AccordionTrigger>
                <AccordionContent>
                  Yes! We offer custom course packages for universities, colleges, and training centers. Contact us to discuss curriculum integration and scheduling.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What happens after I register?</AccordionTrigger>
                <AccordionContent>
                  After registering, we'll contact you with the next available batch details, course materials list, and payment information. You'll also receive access to pre-course resources.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Learning?</h2>
              <p className="text-muted-foreground">
                Fill out this form to register your interest. We'll contact you with the next available batch details.
              </p>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Course Registration</CardTitle>
                <CardDescription>Tell us about your learning goals</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Course of Interest *</Label>
                    <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course, idx) => (
                          <SelectItem key={idx} value={course.title}>
                            {course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Expectations</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your background and what you hope to learn..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Submit Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
