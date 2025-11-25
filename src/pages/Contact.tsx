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
import { sendProjectEmail, sendCourseEmail } from "@/lib/email-service";

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

  const [isSubmittingProject, setIsSubmittingProject] = useState(false);
  const [isSubmittingCourse, setIsSubmittingCourse] = useState(false);

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectForm.name || !projectForm.email || !projectForm.projectType || !projectForm.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmittingProject(true);

    try {
      await sendProjectEmail({
        name: projectForm.name,
        email: projectForm.email,
        projectType: projectForm.projectType,
        description: projectForm.description,
        timeWindow: projectForm.timeWindow,
      });

      toast({
        title: "Call Request Received!",
        description: "We'll reach out within 24 hours to schedule your project call.",
      });

      setProjectForm({ name: "", email: "", projectType: "", description: "", timeWindow: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingProject(false);
    }
  };

  const handleCourseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!courseForm.name || !courseForm.email || !courseForm.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmittingCourse(true);

    try {
      await sendCourseEmail({
        name: courseForm.name,
        email: courseForm.email,
        course: courseForm.course,
        message: courseForm.message,
      });

      toast({
        title: "Enquiry Received!",
        description: "Our team will respond to your course enquiry soon.",
      });

      setCourseForm({ name: "", email: "", course: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your enquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingCourse(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative pt-20 md:pt-32 pb-20 md:pb-32 bg-cover bg-center bg-no-repeat min-h-[400px]"
        style={{ backgroundImage: `url('/contact.png')` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
              Let's connect and Build <span className="text-accent">Together</span>
            </h1>
            <p className="text-xl text-white/95 drop-shadow-md">
              Share your project needs or training goals, and we'll help you achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="project" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="project">Project Enquiry</TabsTrigger>
                <TabsTrigger value="course">Course Enquiry</TabsTrigger>
              </TabsList>

              <TabsContent value="project" className="mt-8 relative z-10">
                <Card id="project-call" className="border-border/50 relative z-10">
                  <CardHeader>
                    <CardTitle className="text-2xl">Book a Project Call</CardTitle>
                    <CardDescription>
                      Share a few details about your software or PCB project and we'll schedule a call.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <form onSubmit={handleProjectSubmit} className="space-y-6 relative z-10">
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

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        disabled={isSubmittingProject}
                      >
                        {isSubmittingProject ? "Sending..." : "Request a Call"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="course" className="mt-8 relative z-10">
                <Card className="border-border/50 relative z-10">
                  <CardHeader>
                    <CardTitle className="text-2xl">Course Enquiry</CardTitle>
                    <CardDescription>
                      Interested in our courses? Let us know what you'd like to learn.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <form onSubmit={handleCourseSubmit} className="space-y-6 relative z-10">
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

                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        disabled={isSubmittingCourse}
                      >
                        {isSubmittingCourse ? "Sending..." : "Submit Course Enquiry"}
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
            centered
          />
          
          <div className="grid sm:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:support@bravonest.lk" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  support@bravonest.lk
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+94727512373" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  +94727512373
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Palaly road, kondavil east</p>
                <p className="text-sm text-muted-foreground">Jaffna, Sri Lanka</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
