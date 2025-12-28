import { cn } from "@home/utils/css/classNames";
import type { PropsWithChildren } from "react";

// Props.
type ConsoleSectionProps = {
  className?: string;
  label: string;
  includeHoverAnimation?: boolean;
};

// Section of entries within the Console.
export const ConsoleSection = (
  props: PropsWithChildren<ConsoleSectionProps>,
) => {
  return (
    <div
      className={cn(
        props.className,
        props.includeHoverAnimation
          ? "transition-all duration-200 hover:scale-105 hover:shadow-lg"
          : "",
        "rounded-xl p-6",
      )}
    >
      <p className="wide:w-full tall:h-full text-label text-center font-bold">
        {props.label}
      </p>
      {props.children}
    </div>
  );
};
