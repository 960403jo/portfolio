import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ComponentType<LucideProps>;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary"
}: ButtonLinkProps) {
  return (
    <a className={cn("button-link", `button-link--${variant}`)} href={href}>
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2} /> : null}
      <span>{children}</span>
    </a>
  );
}
