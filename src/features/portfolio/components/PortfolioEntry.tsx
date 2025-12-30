import { cn } from "@home/utils/css/classNames";

type PortfolioEntryProps = {
  className?: string;
};

export const PortfolioEntry = (props: PortfolioEntryProps) => {
  return (
    <div className={cn(props.className, "relative size-full")}>
      <div className="absolute -z-10 size-full rounded-2xl bg-emerald-600 opacity-30"></div>
      <div className="size-full p-4">some text.</div>
    </div>
  );
};
