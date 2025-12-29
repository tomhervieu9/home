import type { PropsWithChildren } from "react";
import { Console } from "./features/console/components/Console";
import { Background } from "./features/environment/components/Background";
import { Host } from "./features/host/components/Host";
import { Portfolio } from "./features/portfolio/components/Portfolio";

// Main application component.
export const App = () => {
  return (
    <GridLayout>
      <Host className="tall:row-[1/2] tall:col-span-full wide:row-span-full wide:col-[3/4] overflow-hidden" />
      <Portfolio className="tall:row-[2/3] tall:col-span-full wide:row-span-full wide:col-[2/3] overflow-hidden" />
      <Console className="tall:row-[3/4] tall:col-span-full wide:row-span-full wide:col-[1/2] overflow-hidden" />
    </GridLayout>
  );
};

// App (grid) layout.
const GridLayout = (props: PropsWithChildren) => {
  return (
    <div className="relative h-dvh w-screen">
      <Background className="size-full" />
      <div className="px-safe py-safe font-main tall:grid-rows-[2fr_9fr_0.75fr] tall:grid-cols-1 wide:grid-rows-1 wide:grid-cols-[0.75fr_9fr_2fr] grid size-full gap-8 p-8">
        {props.children}
      </div>
    </div>
  );
};
