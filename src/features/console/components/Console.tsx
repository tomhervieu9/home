import emailIcon from "@home/assets/email-icon.png";
import githubIcon from "@home/assets/github-icon.png";
import linkedinIcon from "@home/assets/linkedin-icon.png";
import settingsIcon from "@home/assets/settings-icon.svg";
import { Panel } from "@home/features/shared/components/Panel";
import { cn } from "@home/utils/css/classNames";
import { ButtonEntry } from "./ButtonEntry";
import { ConsoleSection } from "./ConsoleSection";

export const Console = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" />
      <div className="tall:flex-row wide:flex-col flex size-full p-8">
        <ConsoleSection label="Info">
          <ButtonEntry
            buttonLabel=""
            icon={githubIcon}
            alt="Github Icon"
            onClick={() => window.open("https://github.com/tomhervieu9")}
          />
          <ButtonEntry
            buttonLabel=""
            icon={emailIcon}
            alt="Email Icon"
            onClick={() =>
              navigator.clipboard.writeText("tom.hervieu@gmail.com")
            }
          />
          <ButtonEntry
            buttonLabel=""
            icon={linkedinIcon}
            alt="LinkedIn Icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/thomas-hervieu/")
            }
          />
        </ConsoleSection>
        <ConsoleSection label="Settings">
          <ButtonEntry
            buttonLabel=""
            icon={settingsIcon}
            alt="Settings Icon"
            onClick={() => console.log("open settings...")}
          />
        </ConsoleSection>
      </div>
    </div>
  );
};
