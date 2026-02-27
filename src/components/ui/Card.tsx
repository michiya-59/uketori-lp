interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
