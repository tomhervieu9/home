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
      <div className="scrollbar-none size-full scroll-p-8 overflow-auto scroll-smooth p-8">
        <PortfolioEntry id="portfolio-entry-1" />
        <PortfolioEntryDivider />
        <PortfolioEntry id="portfolio-entry-2" />
        <PortfolioEntryDivider />
        <PortfolioEntry id="portfolio-entry-3" />
      </div>
    </div>
  );
};
