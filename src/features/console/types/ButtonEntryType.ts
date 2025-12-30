export enum ButtonEntryType {
  /**
   * A button type the re-directs the user to an external link.
   */
  LINK,

  /**
   * A button type that copies text associated with the button entry to the
   * user's clipboard.
   */
  COPY_TEXT,

  /**
   * A button type that navigates to a specific part of the website.
   */
  NAVIGATION,

  /**
   * A standard button type.
   */
  STANDARD,
}
