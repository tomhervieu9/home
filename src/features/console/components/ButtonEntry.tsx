import { ContainedImage } from "@home/features/shared/components/ContainedImage";
import { cn } from "@home/utils/css/classNames";

type ButtonEntryProps = {
  className?: string;
  buttonLabel: string;
  icon: string;
  link: string;
};

export const ButtonEntry = (props: ButtonEntryProps) => {
  const openLink = () => {
    window.open(props.link);
  };
  return (
    <div
      className={cn(
        props.className,
        "wide:w-full tall:h-full aspect-square rounded-xl p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg",
      )}
    >
      <div className="flex justify-center">
        <span>{props.buttonLabel}</span>
      </div>
      <button
        className="flex size-full items-center gap-2 rounded-lg text-white"
        type="button"
        onClick={openLink}
      >
        <ContainedImage src={props.icon} alt="Github Icon" />
      </button>
    </div>
  );
};
