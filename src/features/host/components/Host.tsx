import { Panel } from "@home/features/panels/components/Panel";
import { cn } from "@home/utils/css/classNames";
import { Narration } from "./Narration";
import { Narrator } from "./Narrator";

export const Host = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" />
      <div className="wide:grid-rows-[2fr_1fr] wide:grid-cols-1 tall:grid-rows-1 tall:grid-cols-[2fr_1fr] grid size-full gap-8">
        <Narrator className="wide:row-[2/3] wide:col-span-full tall:row-span-full tall:col-[2/3] overflow-hidden" />
        <Narration className="wide:row-[1/2] wide:col-span-full tall:row-span-full tall:col-[1/2] overflow-hidden" />
      </div>
    </div>
  );
};
