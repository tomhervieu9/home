import type { PropsWithChildren } from "react";
import { Console } from "./features/console/components/Console";
import LiveWallpaper from "./features/environment/components/LiveWallpaper";
import { Host } from "./features/host/components/Host";
import { Panel } from "./features/panels/components/Panel";
import { Portfolio } from "./features/portfolio/components/Portfolio";

// Main application.
export const App = () => {
  return (
    <AppLayout>
      <HostContainer>
        <Host />
      </HostContainer>
      <PortfolioContainer>
        <Portfolio />
      </PortfolioContainer>
      <ConsoleContainer>
        <Console />
      </ConsoleContainer>
    </AppLayout>
  );
};

// Layout.
const AppLayout = (props: PropsWithChildren) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <LiveWallpaper
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <div className="px-safe py-safe font-main tall:grid-rows-[2fr_9fr_1fr] tall:grid-cols-1 wide:grid-rows-1 wide:grid-cols-[1fr_9fr_2fr] grid h-screen w-screen gap-8 p-8">
        {props.children}
      </div>
    </div>
  );
};

// Section Containers.
const HostContainer = (props: PropsWithChildren) => {
  return (
    <div className="tall:row-[1/2] tall:col-span-full wide:row-span-full wide:col-[3/4] relative overflow-hidden">
      <Panel className="absolute inset-0 -z-10" />
      {props.children}
    </div>
  );
};

const PortfolioContainer = (props: PropsWithChildren) => {
  return (
    <div className="tall:row-[2/3] tall:col-span-full wide:row-span-full wide:col-[2/3] relative overflow-hidden">
      <Panel className="absolute inset-0 -z-10" />

      {props.children}
    </div>
  );
};

const ConsoleContainer = (props: PropsWithChildren) => {
  return (
    <div className="tall:row-[3/4] tall:col-span-full wide:row-span-full wide:col-[1/2] relative overflow-hidden">
      <Panel className="absolute inset-0 -z-10" />
      {props.children}
    </div>
  );
};
