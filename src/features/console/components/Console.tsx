import darkModeIcon from "@home/assets/icons/dark-mode.svg";
import emailIcon from "@home/assets/icons/email.png";
import githubIcon from "@home/assets/icons/github.png";
import linkedinIcon from "@home/assets/icons/linkedin.png";
import { Panel } from "@home/features/shared/components/Panel";
import { cn } from "@home/utils/css/classNames";
import { ButtonEntryType } from "../types/ButtonEntryType";
import { ButtonEntry } from "./ButtonEntry";
import { ConsoleSection } from "./ConsoleSection";

export const Console = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" />
      <div className="tall:flex-row wide:flex-col flex size-full p-8">
        <ConsoleSection label="Info">
          <ButtonEntry
            type={ButtonEntryType.LINK}
            label=""
            icon={githubIcon}
            alt="Github Icon"
            onClick={() => window.open("https://github.com/tomhervieu9")}
          />

          <ButtonEntry
            type={ButtonEntryType.LINK}
            label=""
            icon={linkedinIcon}
            alt="LinkedIn Icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/thomas-hervieu/")
            }
          />
          <ButtonEntry
            type={ButtonEntryType.COPY_TEXT}
            label=""
            icon={emailIcon}
            alt="Email Icon"
            onClick={() =>
              navigator.clipboard.writeText("tom.hervieu@gmail.com")
            }
          />
        </ConsoleSection>
        <ConsoleSection label="Settings">
          <ButtonEntry
            type={ButtonEntryType.STANDARD}
            label=""
            icon={darkModeIcon}
            alt="Dark/Light Mode Icon"
            onClick={() => console.log("open settings...")}
          />
        </ConsoleSection>
      </div>
    </div>
  );
};
