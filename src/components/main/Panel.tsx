import type { PropsWithChildren } from "react";

export const Panel = (props: PropsWithChildren) => {
  return (
    <div className="bg-night h-full w-full rounded-xl">{props.children}</div>
  );
};
