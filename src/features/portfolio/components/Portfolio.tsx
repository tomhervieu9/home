import { Panel } from "@home/features/shared/components/Panel";
import { cn } from "@home/utils/css/classNames";

export const Portfolio = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" />
      <div className="scrollbar-none wide:m-[.5vw] tall:m-[.35vh] size-full overflow-auto">
        <div className="size-full bg-amber-600">d</div>
        <div className="size-full bg-emerald-500">s</div>
      </div>
    </div>
  );
};
