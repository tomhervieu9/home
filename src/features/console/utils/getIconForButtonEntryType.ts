import clipboardIcon from "@home/assets/clipboard-icon.svg";
import linkIcon from "@home/assets/link-icon.svg";
import { ButtonEntryType } from "../types/ButtonEntryType";

export const getIconForButtonEntryType = (
  type: ButtonEntryType,
): string | undefined => {
  switch (type) {
    case ButtonEntryType.COPY_TEXT:
      return clipboardIcon;
    case ButtonEntryType.LINK:
      return linkIcon;
    case ButtonEntryType.STANDARD:
      return undefined;
  }
};
