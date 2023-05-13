enum Permissions {
  DEVELOPER = 1,
  ADMIN,
  GUEST,
}

enum ArrivalStatus {
  NOT_ARRIVING = 1,
  CEREMONY_ONLY,
  WHOLE,
  AFTER_PARTY,
}
const arrivalStatusToText = {
  [ArrivalStatus.NOT_ARRIVING]: "not arriving",
  [ArrivalStatus.CEREMONY_ONLY]: "ceremony only",
  [ArrivalStatus.WHOLE]: "whole wedding",
  [ArrivalStatus.AFTER_PARTY]: "arriving to the after party",
};

interface Preferences {
  allergies: string[];
  vegetarian: boolean;
  vegan: boolean;
  wheelchair: boolean;
  kidsMeal: boolean;
}

interface Person {
  id: string;
  name: string;
  permissions: Permissions[];
  status: ArrivalStatus;
  preferences?: Preferences;
}

export type { Person };
export { arrivalStatusToText, ArrivalStatus, Permissions };
