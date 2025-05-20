interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}