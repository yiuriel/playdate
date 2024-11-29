import { User } from "../users/users.types";

export type Conversation = {
  id: string;
  user1Id: User | null;
  user2Id: User | null;
  messages: Message[];
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  text: string;
  createdAt: string;
};
