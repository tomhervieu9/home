import { Host } from "@home/components/host/Host";
import type { PropsWithChildren } from "react";
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { MainContent } from "./components/main-content/MainContent";

// Main application.
export const App = () => {
  return (
    <AppLayout>
      <HostContainer>
        <Host />
      </HostContainer>
      <MainContentContainer>
        <MainContent />
      </MainContentContainer>
      <ControlPanelContainer>
        <ControlPanel />
      </ControlPanelContainer>
    </AppLayout>
  );
};

// Layout.
const AppLayout = (props: PropsWithChildren) => {
  return (
    <div className="px-safe py-safe font-main tall:grid-rows-[2fr_9fr_1fr] tall:grid-cols-1 wide:grid-rows-1 wide:grid-cols-[1fr_9fr_2fr] grid h-screen w-screen bg-zinc-50 dark:bg-black">
      {props.children}
    </div>
  );
};

// Section Containers.
const HostContainer = (props: PropsWithChildren) => {
  return (
    <div className="bg-red tall:row-[1/2] tall:col-span-full wide:row-span-full wide:col-[3/4] overflow-hidden">
      {props.children}
    </div>
  );
};

const MainContentContainer = (props: PropsWithChildren) => {
  return (
    <div className="bg-other tall:row-[2/3] tall:col-span-full wide:row-span-full wide:col-[2/3] overflow-hidden">
      {props.children}
    </div>
  );
};

const ControlPanelContainer = (props: PropsWithChildren) => {
  return (
    <div className="bg-dark-green tall:row-[3/4] tall:col-span-full wide:row-span-full wide:col-[1/2] overflow-hidden">
      {props.children}
    </div>
  );
};
