import { Person, Permissions, ArrivalStatus } from "src/types";

const developer: Person = {
  id: "1",
  username: "Shaked",
  permissions: [Permissions.DEVELOPER, Permissions.ADMIN],
  arrivalStatus: ArrivalStatus.WHOLE,
};

const admin: Person = {
  id: "2",
  username: "Aviva",
  permissions: [Permissions.ADMIN],
  arrivalStatus: ArrivalStatus.WHOLE,
};

const guest: Person = {
  id: "3",
  username: "Elad",
  permissions: [Permissions.GUEST],
  arrivalStatus: ArrivalStatus.WHOLE,
};

const userMap = new Map(
  [developer, admin, guest].map((user) => [user.id, user])
);

export const getUser = (userId: string): Person => {
  return userMap.get(userId) as Person;
};
