import { Chat } from "../components/Chat/Chat";
import { MessageList } from "../components/MessageList/MessageList";

export const Conversation = () => {
  return (
    <div className="flex flex-1">
      <div className="w-3/4">
        <MessageList />
      </div>
      <Chat />
    </div>
  );
};
