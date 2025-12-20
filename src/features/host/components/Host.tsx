import hostImage from "@home/assets/portfolio-shot.png";
import { Panel } from "@home/features/panels/components/Panel";
import { cn } from "@home/utils/css/classNames";
import { ContainedImage } from "./ContainedImage";

export const Host = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" />
      <ContainedImage src={hostImage} alt="Profile Picture" />
    </div>
  );
};
