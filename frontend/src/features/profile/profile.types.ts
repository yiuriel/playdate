/**
 * Represents a user's profile
 */
export type Profile = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: "male" | "female" | "non-binary";
  sexualOrientation: "straight" | "gay" | "lesbian" | "bisexual" | "asexual";
  /**
   * User's interests
   * @example ['hiking', 'reading', 'cooking']
   */
  interests: string[];
  location: string;
  photos: string[];
  bio: string;
  email: string;
};
