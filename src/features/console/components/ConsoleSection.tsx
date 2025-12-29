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
        "wide:p-[1vw] tall:p-[.35vh] wide:flex-col tall:flex-row flex gap-3 rounded-xl",
      )}
    >
      <p className="wide:w-full tall:hidden text-label flex items-center justify-center text-center font-bold">
        {props.label}
      </p>
      {props.children}
    </div>
  );
};
