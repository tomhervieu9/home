import { Panel } from "@home/features/shared/components/Panel";
import { cn } from "@home/utils/css/classNames";
import { PortfolioEntry } from "./PortfolioEntry";
import { PortfolioEntryDivider } from "./PortfolioEntryDivider";
import { PortfolioNav } from "./PortfolioNav";

export const Portfolio = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" withoutBorder={true} />
      <Panel
        className="pointer-events-none absolute inset-0 z-10"
        withoutBackground={true}
      />
      <PortfolioNav className="h-[10%] w-full" />
      <div className="scrollbar-none h-[90%] w-full scroll-p-8 overflow-auto scroll-smooth p-8">
        <PortfolioEntry id="portfolio-entry-1" />
        <PortfolioEntryDivider />
        <PortfolioEntry id="portfolio-entry-2" />
        <PortfolioEntryDivider />
        <PortfolioEntry id="portfolio-entry-3" />
      </div>
    </div>
  );
};
