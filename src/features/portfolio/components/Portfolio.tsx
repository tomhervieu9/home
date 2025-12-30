import { Panel } from "@home/features/shared/components/Panel";
import { cn } from "@home/utils/css/classNames";
import { PortfolioEntry } from "./PortfolioEntry";
import { PortfolioEntryDivider } from "./PortfolioEntryDivider";

export const Portfolio = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" withoutBorder={true} />
      <Panel
        className="pointer-events-none absolute inset-0 z-10"
        withoutBackground={true}
      />
      <div className="scrollbar-none size-full overflow-auto p-8">
        <PortfolioEntry />
        <PortfolioEntryDivider />
        <PortfolioEntry />
        <PortfolioEntryDivider />
        <PortfolioEntry />
      </div>
    </div>
  );
};
