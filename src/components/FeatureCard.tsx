import * as React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, className = "", ...props }: FeatureCardProps) => {
  return (
    <Card className={`group hover-lift border-border/50 ${className}`} {...props}>
      <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary icon-interactive transition-transform duration-300" />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};
