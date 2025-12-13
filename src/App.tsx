import type { PropsWithChildren } from "react";

const AppLayout = (props: PropsWithChildren) => {
  return (
    <div className="px-safe py-safe font-main grid h-screen w-screen grid-rows-[2fr_9fr_1fr] bg-zinc-50 dark:bg-black">
      {props.children}
    </div>
  );
};

const HostContainer = () => {
  return <div className="bg-night row-start-1 row-end-2">first</div>;
};

const MainContentContainer = () => {
  return <div className="bg-other row-start-2 row-end-3">sec</div>;
};

const UserPanelContainer = () => {
  return <div className="bg-dark-green row-start-3 row-end-4">th</div>;
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
