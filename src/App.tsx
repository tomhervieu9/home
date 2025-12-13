import type { PropsWithChildren } from "react";

const AppLayout = (props: PropsWithChildren) => {
  return (
    <div className="grid grid-rows-[2fr_9fr_1fr] h-screen w-screen px-safe py-safe bg-zinc-50 font-main dark:bg-black">
      {props.children}
    </div>
  );
};

const HostContainer = () => {
  return <div className="row-start-1 row-end-2 bg-night">first</div>;
};

const MainContentContainer = () => {
  return <div className="row-start-2 row-end-3 bg-other">sec</div>;
};

const UserPanelContainer = () => {
  return <div className="row-start-3 row-end-4 bg-dark-green">th</div>;
};

export const App = () => {
  return (
    <AppLayout>
      <HostContainer />
      <MainContentContainer />
      <UserPanelContainer />
    </AppLayout>
  );
};
