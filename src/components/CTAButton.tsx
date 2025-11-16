import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  variant?: "project" | "course";
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const CTAButton = ({ variant = "project", to, children, className = "" }: CTAButtonProps) => {
  const isProject = variant === "project";
  
  return (
    <Button
      asChild
      size="lg"
      className={`
        group transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl
        ${isProject 
          ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
          : "bg-accent hover:bg-accent/90 text-accent-foreground"
        }
        ${className}
      `}
    >
      <Link to={to}>
        {children}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
};
