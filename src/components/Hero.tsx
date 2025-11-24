import React from "react";
import useTypewriter from "@/hooks/use-typewriter";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { Code2, Cpu, GraduationCap, Lightbulb } from "lucide-react";

const features = [
  { icon: Code2, title: "Web Apps", desc: "Modern, scalable web applications." },
  { icon: Cpu, title: "Embedded", desc: "PCB design and embedded prototypes." },
  { icon: GraduationCap, title: "Courses", desc: "Hands-on pre-engineering training." },
  { icon: Lightbulb, title: "Consulting", desc: "Product strategy and prototyping." },
];

const Hero: React.FC = () => {
  const before = "Where Ideas Become ";
  const target = "Innovative Solutions...  ";
  const heading = before + target;
  const { typed, isComplete } = useTypewriter(heading, { speed: 38 });

  const typedBefore = typed.slice(0, before.length);
  const typedTarget = typed.length > before.length ? typed.slice(before.length) : "";

  return (
    <section
      id="page-header"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-visible bg-gradient-to-b from-primary/6 via-secondary/4 to-transparent"
    >
      {/* decorative gradients */}
      <div className="absolute -left-28 -top-24 w-64 h-64 rounded-full bg-gradient-to-br from-primary/8 to-accent/8 blur-3xl pointer-events-none" />
      <div className="absolute right-[-8rem] bottom-[-6rem] w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/6 to-primary/6 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight md:tracking-tighter leading-[1.18] overflow-visible pb-1 sm:pb-2">
            <span className="inline-block block font-extrabold">{typedBefore}</span>

            <span className="block">
              <span
                className="inline-block text-gradient font-extrabold"
                aria-hidden={false}
              >
                {typedTarget}
              </span>

              {/* caret: show on the active line */}
              {typed.length <= before.length ? (
                <span
                  className={`typing-caret ml-2 align-middle text-accent ${isComplete ? "opacity-100" : "opacity-60"}`}
                  aria-hidden={!isComplete}
                />
              ) : (
                <span
                  className={`typing-caret ml-2 align-middle text-accent ${isComplete ? "opacity-100" : "opacity-60"}`}
                  aria-hidden={!isComplete}
                />
              )}
            </span>
          </h1>

          <p
            className={`mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ease-out ${
              isComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: isComplete ? "160ms" : "0ms" }}
          >
            Expert software development, PCB design, and hands-on pre-engineering courses — bridging innovation with learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-8 sm:pt-10">
            <CTAButton
              to="/contact#project-call"
              className="btn-gradient px-5 py-2.5 text-sm sm:text-base shadow-lg transform-gpu transition-all duration-300 hover:scale-105"
            >
              Book a Project Call
            </CTAButton>
            <CTAButton
              to="/learn#register"
              className="btn-gradient btn-gradient--alt px-5 py-2.5 text-sm sm:text-base shadow-lg transform-gpu transition-all duration-300 hover:scale-105"
            >
              Register for a Course
            </CTAButton>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f, idx) => (
              <FeatureCard
                key={idx}
                icon={f.icon}
                title={f.title}
                description={f.desc}
                className="shadow-sm"
                style={{ transitionDelay: `${idx * 70}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
