import hostImage from "@home/assets/portfolio-shot.png";
import { cn } from "@home/utils/css/classNames";
import { ContainedImage } from "./ContainedImage";

export const Narrator = (props: { className?: string }) => {
  return (
    <div className={cn(props.className, "size-full px-8")}>
      <ContainedImage src={hostImage} alt="Profile Picture" />
    </div>
  );
};
