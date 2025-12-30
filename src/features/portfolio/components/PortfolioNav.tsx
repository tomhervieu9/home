import { cn } from "@home/utils/css/classNames";
import type { HTMLAttributes } from "react";

type PortfolioNavProps = HTMLAttributes<HTMLElement>;

export const PortfolioNav = (props: PortfolioNavProps) => {
  return (
    <div className={cn(props.className, "p-8")}>
      <div className="size-full rounded-4xl bg-fuchsia-400 opacity-30"></div>
    </div>
  );
};
