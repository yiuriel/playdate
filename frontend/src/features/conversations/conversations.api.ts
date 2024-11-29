import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { Conversation } from "./conversations.types";
import { conversations } from "../mocks/conversations.mocks";

export const conversationsApi = createApi({
  reducerPath: "conversationsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getConversation: builder.query<Conversation, string>({
      queryFn: (id) => {
        const conversation = conversations.find((conv) => conv.id === id);
        if (!conversation) {
          return { error: { message: "Conversation not found" } };
        }
        return { data: conversation };
      },
    }),
    getConversations: builder.query<Conversation[], void>({
      queryFn: () => ({ data: conversations }),
    }),
  }),
});

export const { useGetConversationQuery, useGetConversationsQuery } =
  conversationsApi;
