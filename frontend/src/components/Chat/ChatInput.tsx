import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { Button } from "../Button/Button";

export const ChatInput = () => {
  return (
    <form className="flex items-center justify-center gap-4 p-4 border-t border-gray-300 w-full">
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
      />
      <Button type="submit" contained>
        <PaperAirplaneIcon className="size-6" />
      </Button>
    </form>
  );
};
