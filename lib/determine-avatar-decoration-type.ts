import { AVATAR_FILE_EXTENSION } from "./constants";

export const determineAvatarDecorationType = (month: number) => {
  switch (month) {
    case 9:
      // October
      return `/branding/fun/discord/secondary_dark_short_sig_avatar_halloween.${AVATAR_FILE_EXTENSION}`;
    case 11:
      // December
      return `/branding/fun/discord/secondary_dark_short_sig_avatar_christmas.${AVATAR_FILE_EXTENSION}`;
    default:
      return `/branding/secondary_dark_short_sig_avatar.${AVATAR_FILE_EXTENSION}`;
  }
};
