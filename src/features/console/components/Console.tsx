import emailIcon from "@home/assets/email-icon.png";
import githubIcon from "@home/assets/github-icon.png";
import linkedinIcon from "@home/assets/linkedin-icon.png";
import { Panel } from "@home/features/shared/components/Panel";
import { cn } from "@home/utils/css/classNames";
import { ButtonEntry } from "./ButtonEntry";

export const Console = (props: { className: string }) => {
  return (
    <div className={cn(props.className, "relative")}>
      <Panel className="absolute inset-0 -z-10" />
      <div className="tall:flex-row wide:flex-col flex size-full p-8">
        <ButtonEntry
          buttonLabel=""
          icon={githubIcon}
          link="https://github.com/tomhervieu9"
        />
        <ButtonEntry
          buttonLabel=""
          icon={emailIcon}
          link="https://github.com/tomhervieu9"
        />
        <ButtonEntry
          buttonLabel=""
          icon={linkedinIcon}
          link="https://www.linkedin.com/in/thomas-hervieu/"
        />
      </div>
    </div>
  );
};
