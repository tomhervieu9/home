import type { PropsWithChildren } from "react";

const AppLayout = (props: PropsWithChildren) => {
  return (
    <div className="grid grid-rows-[3fr_8fr_1fr] h-screen w-screen px-safe py-safe">
      {props.children}
    </div>
  );
};

const HostContainer = () => {
  return <div className="row-start-1 row-end-2">first</div>;
};

const MainContentContainer = () => {
  return <div className="row-start-2 row-end-3">sec</div>;
};

const UserPanelContainer = () => {
  return <div className="row-start-3 row-end-4">th</div>;
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
