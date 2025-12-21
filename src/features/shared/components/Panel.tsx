import { cn } from "@home/utils/css/classNames";

export const Panel = (props: {
  className: string;
  withoutBorder?: boolean;
  withoutBackground?: boolean;
}) => {
  return (
    <div
      className={cn(
        `${props.withoutBackground ? "bg-none" : "bg-night/10"} h-full w-full rounded-xl ${props.withoutBorder ? "" : "border-[calc(var(--spacing)*2)] border-white"}`,
        props.className,
      )}
    ></div>
  );
};
