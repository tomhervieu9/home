import { cn } from "@home/utils/css/classNames";

export const Panel = (props: { className: string }) => {
  return (
    <div
      className={cn(
        "bg-night h-full w-full rounded-xl opacity-30",
        props.className,
      )}
    ></div>
  );
};
