/*
  Page: Contact
  Purpose: Provide contact channels and two enquiry forms: Project Enquiry (book a call)
  and Course Enquiry. Includes contact cards with email, phone, and location.

  Notes:
  - Uses local component state for form fields and `useToast` for feedback messages.
  - Form submission handlers perform simple presence checks and show toasts.
*/

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [projectForm, setProjectForm] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
    timeWindow: "",
  });

  const [courseForm, setCourseForm] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectForm.name || !projectForm.email || !projectForm.projectType || !projectForm.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Call Request Received!",
      description: "We'll reach out within 24 hours to schedule your project call.",
    });

    setProjectForm({ name: "", email: "", projectType: "", description: "", timeWindow: "" });
  };

  const handleCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!courseForm.name || !courseForm.email || !courseForm.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Enquiry Received!",
      description: "Our team will respond to your course enquiry soon.",
    });

    setCourseForm({ name: "", email: "", course: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight hero-title" style={{ animationDelay: '80ms' }}>
              Let's Build or Learn <span className="text-gradient">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground hero-subtitle" style={{ animationDelay: '180ms' }}>
              Share your project needs or training goals, and we'll help you achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="project" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="project">Project Enquiry</TabsTrigger>
                <TabsTrigger value="course">Course Enquiry</TabsTrigger>
              </TabsList>

              <TabsContent value="project" className="mt-8">
                <Card id="project-call" className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Book a Project Call</CardTitle>
                    <CardDescription>
                      Share a few details about your software or PCB project and we'll schedule a call.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProjectSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="project-name">Full Name *</Label>
                        <Input
                          id="project-name"
                          value={projectForm.name}
                          onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="project-email">Email *</Label>
                        <Input
                          id="project-email"
                          type="email"
                          value={projectForm.email}
                          onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="project-type">Project Type *</Label>
                        <Select
                          value={projectForm.projectType}
                          onValueChange={(value) => setProjectForm({ ...projectForm, projectType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="software">Software Only</SelectItem>
                            <SelectItem value="pcb">PCB Design Only</SelectItem>
                            <SelectItem value="both">Software + PCB</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="project-description">Brief Description *</Label>
                        <Textarea
                          id="project-description"
                          value={projectForm.description}
                          onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time-window">Preferred Time Window</Label>
                        <Input
                          id="time-window"
                          value={projectForm.timeWindow}
                          onChange={(e) => setProjectForm({ ...projectForm, timeWindow: e.target.value })}
                          placeholder="e.g., Weekday mornings, Tuesday/Thursday afternoons"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Request a Call
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="course" className="mt-8">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Course Enquiry</CardTitle>
                    <CardDescription>
                      Interested in our courses? Let us know what you'd like to learn.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCourseSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="course-name">Full Name *</Label>
                        <Input
                          id="course-name"
                          value={courseForm.name}
                          onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="course-email">Email *</Label>
                        <Input
                          id="course-email"
                          type="email"
                          value={courseForm.email}
                          onChange={(e) => setCourseForm({ ...courseForm, email: e.target.value })}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="course-interest">Course of Interest *</Label>
                        <Select
                          value={courseForm.course}
                          onValueChange={(value) => setCourseForm({ ...courseForm, course: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="electronics">Foundations of Electronics & Circuits</SelectItem>
                            <SelectItem value="programming">Programming Basics for Engineering</SelectItem>
                            <SelectItem value="pcb">Introduction to PCB Design</SelectItem>
                            <SelectItem value="embedded">Embedded Systems Starter</SelectItem>
                            <SelectItem value="custom">Custom Course / Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="course-message">Message</Label>
                        <Textarea
                          id="course-message"
                          value={courseForm.message}
                          onChange={(e) => setCourseForm({ ...courseForm, message: e.target.value })}
                          placeholder="Tell us about your background, learning goals, or any questions..."
                          rows={5}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Submit Course Enquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Contact Information"
            subtitle="Other ways to reach us"
            centered
          />
          
          <div className="grid sm:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary icon-interactive" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">hello@bravonest.com</p>
                <p className="text-sm text-muted-foreground">support@bravonest.com</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-secondary icon-interactive" />
                </div>
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM PST</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-accent icon-interactive" />
                </div>
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                <p className="text-sm text-muted-foreground">United States</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
