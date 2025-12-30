import { cn } from "@home/utils/css/classNames";
import { useState } from "react";

export const Narration = (props: { className?: string }) => {
  const [text, setText] = useState(
    "Welcome to my internet home! \n \n To get started, please scroll through the main content and refer to this panel for additional details.",
  );

  return (
    <div
      className={cn(
        props.className,
        "size-full overflow-auto text-[12px] wrap-break-word whitespace-pre-line",
      )}
    >
      {text}
    </div>
  );
};
