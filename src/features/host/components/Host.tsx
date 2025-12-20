import { Panel } from "@home/features/panels/components/Panel";
import { cn } from "@home/utils/css/classNames";
import { Narration } from "./Narration";
import { Narrator } from "./Narrator";

export const Host = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "")}>
      <div className="wide:grid-rows-[9fr_6fr] wide:grid-cols-1 tall:grid-rows-1 tall:grid-cols-[9fr_6fr] grid size-full gap-8">
        <div className="wide:row-[2/3] wide:col-span-full tall:row-span-full tall:col-[2/3] relative overflow-hidden">
          <Panel className="absolute inset-0 -z-10" />
          <Narrator />
        </div>
        <div className="wide:row-[1/2] wide:col-span-full tall:row-span-full tall:col-[1/2] relative overflow-hidden">
          <Panel className="absolute inset-0 -z-10" />
          <Narration />
        </div>
      </div>
    </div>
  );
};
