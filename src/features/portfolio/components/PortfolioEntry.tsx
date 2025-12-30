import { cn } from "@home/utils/css/classNames";
import type { HTMLAttributes } from "react";

type PortfolioEntryProps = HTMLAttributes<HTMLElement> & {
  className?: string;
};

export const PortfolioEntry = (props: PortfolioEntryProps) => {
  return (
    <div id={props.id} className={cn(props.className, "relative size-full")}>
      <div className="absolute -z-10 size-full rounded-2xl bg-emerald-600 opacity-30"></div>
      <div className="size-full p-4">some text.</div>
    </div>
  );
};
