import clipboardIcon from "@home/assets/icons/clipboard.svg";
import copiedIcon from "@home/assets/icons/copied.svg";
import linkIcon from "@home/assets/icons/link.svg";
import { ButtonEntryType } from "../types/ButtonEntryType";

export const getIconForButtonEntryType = (
  type: ButtonEntryType,
  isActive = false,
): string | undefined => {
  switch (type) {
    case ButtonEntryType.COPY_TEXT:
      return isActive ? copiedIcon : clipboardIcon;
    case ButtonEntryType.LINK:
      return linkIcon;
    case ButtonEntryType.STANDARD:
      return undefined;
  }
};
