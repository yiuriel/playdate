import { Profile } from "../profile/profile.types";

export interface User extends Profile {
  id: string;
  age: number;
  gender: "male" | "female" | "non-binary";
}
