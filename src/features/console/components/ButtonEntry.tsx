import { ContainedImage } from "@home/features/shared/components/ContainedImage";
import { cn } from "@home/utils/css/classNames";
import type { ButtonEntryType } from "../types/ButtonEntryType";
import { getIconForButtonEntryType } from "../utils/getIconForButtonEntryType";

type ButtonEntryProps = {
  className?: string;
  label: string;
  type: ButtonEntryType;
  icon: string;
  alt: string;
  onClick: () => void;
};

export const ButtonEntry = (props: ButtonEntryProps) => {
  const superscriptIcon = getIconForButtonEntryType(props.type);

  return (
    <div
      className={cn(
        props.className,
        "wide:w-full tall:h-full aspect-square rounded-xl p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg",
      )}
    >
      <div className="flex justify-center">
        <span>{props.label}</span>
      </div>
      <button
        className="relative flex size-full items-center gap-2 rounded-lg text-white"
        type="button"
        onClick={props.onClick}
      >
        {superscriptIcon && (
          <div className="absolute -right-3 -bottom-3 size-4">
            <ContainedImage src={superscriptIcon} alt={"Superscript Icon"} />
          </div>
        )}
        <ContainedImage src={props.icon} alt={props.alt} />
      </button>
    </div>
  );
};
