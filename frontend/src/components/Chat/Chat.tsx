import { useRef, useEffect } from "react";
import { useGetUserQuery } from "../../features/users/users.api";
import { useParams } from "react-router";
import { useGetConversationQuery } from "../../features/conversations/conversations.api";
import dayjs from "dayjs";
import { ChatInput } from "./ChatInput";

export const Chat = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetConversationQuery(id || "");
  const { data: user1 } = useGetUserQuery(data?.user1Id?.id || "");
  const { data: user2 } = useGetUserQuery(data?.user2Id?.id || "");
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      messagesRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [data?.messages]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full w-full overflow-hidden flex flex-col relative bg-blue-300 bg-opacity-20">
      <div
        ref={messagesRef}
        className="overflow-auto h-full flex-grow p-4 space-y-2"
      >
        {data.messages.map((message) => {
          const user = message.senderId === data.user1Id?.id ? user1 : user2;
          return (
            <div
              key={message.id}
              className={`flex items-center ${
                message.senderId === data.user1Id?.id
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              {message.senderId === data.user1Id?.id && (
                <img
                  src={user?.photos[0]}
                  className="h-5 w-5 rounded-full mr-1"
                  alt={user?.firstName}
                />
              )}
              <div
                className={`px-2 py-1 rounded-lg text-xs max-w-xs break-words ${
                  message.senderId === data.user1Id?.id
                    ? "bg-blue-500 text-white"
                    : "bg-teal-400 text-white"
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xxs text-white">
                  {dayjs(message.createdAt).fromNow()}
                </p>
              </div>
              {message.senderId !== data.user1Id?.id && (
                <img
                  src={user?.photos[0]}
                  className="h-5 w-5 rounded-full ml-1"
                  alt={user?.firstName}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex items-end w-full" style={{ flexShrink: 0 }}>
        <ChatInput />
      </div>
    </div>
  );
};
