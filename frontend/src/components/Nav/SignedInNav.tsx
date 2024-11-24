import { Link } from "react-router";
import { useGetProfileQuery } from "../../features/profile/profile.api";
import { Button } from "../Button/Button";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";
import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/20/solid";

export const SignedInNav = () => {
  const { data } = useGetProfileQuery();

  return (
    <div className="flex gap-4 items-center">
      <Link to="/messages" prefetch="render">
        <Button>
          <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          Messages
        </Button>
      </Link>
      <Link to="/events" prefetch="render">
        <Button>
          <CalendarDateRangeIcon className="size-6" />
          Events
        </Button>
      </Link>
      <Link to="/profile" prefetch="render">
        <Button>
          <UserCircleIcon className="size-6" />
          {data?.firstName}
        </Button>
      </Link>
    </div>
  );
};
