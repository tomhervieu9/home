import type { PropsWithChildren } from "react";

const AppLayout = (props: PropsWithChildren) => {
  return <div>{props.children}</div>;
};

export const App = () => {
  return <AppLayout>hello there!</AppLayout>;
};
