import hostImage from "@home/assets/portfolio-shot.png";
import { ContainedImage } from "@home/features/shared/components/ContainedImage";
import { cn } from "@home/utils/css/classNames";

export const Narrator = (props: { className?: string }) => {
  return (
    <div className={cn(props.className, "size-full")}>
      <ContainedImage src={hostImage} alt="Profile Picture" />
    </div>
  );
};
