import { cn } from "@home/utils/css/classNames";

type ButtonEntryProps = {
  className?: string;
  buttonLabel: string;
  icon: string;
  link?: string;
};

export const ButtonEntry = (props: ButtonEntryProps) => {
  const openLink = () => {
    window.open("https://github.com/tomhervieu9");
  };
  return (
    <div
      className={cn(
        props.className,
        "m-2 rounded-xl p-2 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95",
      )}
    >
      <div className="flex justify-center">
        <span>{props.buttonLabel}</span>
      </div>
      <button
        className={cn(
          props.className,
          "flex size-full items-center gap-2 rounded-lg text-white",
        )}
        type="button"
        onClick={openLink}
      >
        <img
          src={props.icon}
          alt="Github Icon"
          className="wide:px-[calc(var(--spacing-w)*4)] tall:py-8 size-full"
        />
      </button>
    </div>
  );
};
