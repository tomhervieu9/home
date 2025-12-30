import { ContainedImage } from "@home/features/shared/components/ContainedImage";
import { cn } from "@home/utils/css/classNames";
import { useState } from "react";
import { ButtonEntryType } from "../types/ButtonEntryType";
import { getIconForButtonEntryType } from "../utils/getIconForButtonEntryType";

type ButtonEntryProps = {
  className?: string;
  label: string;
  type: ButtonEntryType;
  icon?: string;
  alt: string;
  onClick?: () => void;
  href?: string;
};

export const ButtonEntry = (props: ButtonEntryProps) => {
  const [clickReactionActive, setClickReactionActive] = useState(false);
  const superscriptIcon = getIconForButtonEntryType(
    props.type,
    clickReactionActive,
  );

  // Use usecallback??
  const handleClick = () => {
    props.onClick?.();
    if (props.type === ButtonEntryType.COPY_TEXT) {
      setClickReactionActive(true);
      void new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
        setClickReactionActive(false),
      );
    }
  };

  const isLink = props.type === ButtonEntryType.NAVIGATION;

  return (
    <div
      className={cn(
        props.className,
        "wide:w-full tall:h-full wide:p-[.5vw] tall:p-[.35vh] aspect-square rounded-xl transition-all duration-50 hover:scale-115 hover:shadow-lg active:scale-108",
      )}
    >
      <div className="flex justify-center">
        <span>{props.label}</span>
      </div>
      {isLink ? (
        <a href={props.href}>hello thar</a>
      ) : (
        <button
          className="relative flex size-full items-center gap-2 rounded-lg text-white"
          type="button"
          onClick={handleClick}
        >
          {superscriptIcon && (
            <div className="absolute -right-4 bottom-0 size-4">
              <ContainedImage src={superscriptIcon} alt={"Superscript Icon"} />
            </div>
          )}
          <ContainedImage src={props.icon ?? ""} alt={props.alt} />
        </button>
      )}
    </div>
  );
};
