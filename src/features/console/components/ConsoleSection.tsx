import { cn } from "@home/utils/css/classNames";
import type { PropsWithChildren } from "react";

type ConsoleSectionProps = {
  className?: string;
  label: string;
};

// Section of entries within the Console.
export const ConsoleSection = (
  props: PropsWithChildren<ConsoleSectionProps>,
) => {
  return (
    <div
      className={cn(
        props.className,
        "rounded-xl p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg",
      )}
    >
      <p className="wide:w-full tall:h-full text-label text-center font-bold">
        {props.label}
      </p>
      {props.children}
    </div>
  );
};
