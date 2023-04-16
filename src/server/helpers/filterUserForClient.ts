import type { User } from "@clerk/nextjs/dist/api";

export const filterUserForClient = ({
  id,
  username,
  profileImageUrl,
}: User) => {
  return {
    id,
    username,
    profileImageUrl,
  };
};
