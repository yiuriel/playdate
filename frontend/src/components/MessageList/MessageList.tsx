import { useParams } from "react-router";
import dayjs from "dayjs";
import { Link } from "react-router";
import { useGetConversationsQuery } from "../../features/conversations/conversations.api";

export const MessageList = () => {
  const { id: activeConversationId } = useParams();
  const { data } = useGetConversationsQuery();

  return (
    <div>
      {data?.map((conversation) => (
        <Link
          key={conversation.id}
          to={`/messages/${conversation.id}`}
          className={`flex items-center justify-between p-2 border-b border-gray-300  ${
            activeConversationId === conversation.id
              ? "bg-teal-100 hover:bg-teal-200"
              : "hover:bg-white"
          }`}
        >
          <div className="flex items-center">
            <img
              src={conversation.user1Id?.photos?.[0]}
              alt={conversation.user1Id?.firstName}
              className="w-12 h-12 rounded-full mr-3"
            />
            <p className="text-lg font-bold">
              {conversation.user2Id?.firstName}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm">
              {conversation.messages[conversation.messages.length - 1]?.text}
            </p>
            <p className="text-xs text-gray-600">
              {dayjs(
                conversation.messages[conversation.messages.length - 1]
                  ?.createdAt
              ).fromNow()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
