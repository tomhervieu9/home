import githubIcon from "@home/assets/github-icon.png";
import { Panel } from "@home/features/shared/panels/components/Panel";
import { cn } from "@home/utils/css/classNames";
import { ButtonEntry } from "./ButtonEntry";

export const Console = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" />
      <div className="p-4">
        <ButtonEntry buttonLabel="" icon={githubIcon} />
      </div>
    </div>
  );
};
