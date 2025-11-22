import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  animationDelay?: number;
}

export const SectionHeader = ({ title, subtitle, centered = false, animationDelay = 0 }: SectionHeaderProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`space-y-2 ${centered ? "text-center" : ""} scroll-fade-in-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
};
