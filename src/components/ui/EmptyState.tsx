import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

type EmptyStateProps = {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
};

export function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={2} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
