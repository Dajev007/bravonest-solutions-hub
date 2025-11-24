interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader = ({ title, subtitle, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`space-y-2 section-header ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${centered ? 'text-center' : ''} subtitle`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
