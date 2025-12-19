import type { PropsWithChildren } from "react";
import { Console } from "./features/console/components/Console";
import { Host } from "./features/host/components/Host";
import { Panel } from "./features/panels/components/Panel";
import { Portfolio } from "./features/portfolio/components/Portfolio";

// Main application.
export const App = () => {
  return (
    <AppLayout>
      <HostContainer>
        <Panel>
          <Host />
        </Panel>
      </HostContainer>
      <PortfolioContainer>
        <Panel>
          <Portfolio />
        </Panel>
      </PortfolioContainer>
      <ConsoleContainer>
        <Panel>
          <Console />
        </Panel>
      </ConsoleContainer>
    </AppLayout>
  );
};

// Layout.
const AppLayout = (props: PropsWithChildren) => {
  return (
    <div className="px-safe py-safe font-main tall:grid-rows-[2fr_9fr_1fr] tall:grid-cols-1 wide:grid-rows-1 wide:grid-cols-[1fr_9fr_2fr] grid h-screen w-screen gap-4 bg-white p-4">
      {props.children}
    </div>
  );
};

// Section Containers.
const HostContainer = (props: PropsWithChildren) => {
  return (
    <div className="tall:row-[1/2] tall:col-span-full wide:row-span-full wide:col-[3/4] overflow-hidden">
      {props.children}
    </div>
  );
};

const PortfolioContainer = (props: PropsWithChildren) => {
  return (
    <div className="tall:row-[2/3] tall:col-span-full wide:row-span-full wide:col-[2/3] overflow-hidden">
      {props.children}
    </div>
  );
};

const ConsoleContainer = (props: PropsWithChildren) => {
  return (
    <div className="tall:row-[3/4] tall:col-span-full wide:row-span-full wide:col-[1/2] overflow-hidden">
      {props.children}
    </div>
  );
};
