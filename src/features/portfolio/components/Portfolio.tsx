import { Panel } from "@home/features/shared/panels/components/Panel";
import { cn } from "@home/utils/css/classNames";

export const Portfolio = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" />
      <div className="p-4">portfolio</div>
    </div>
  );
};
