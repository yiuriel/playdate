import { useEffect } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";
import { useLazyGetUserQuery } from "../../features/users/users.api";
import { Button } from "../Button/Button";
import {
  CalendarDateRangeIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/20/solid";

export const UserProfileCard = () => {
  const { id } = useParams();
  const [fetch, { data, isLoading }] = useLazyGetUserQuery();

  useEffect(() => {
    if (!id) return;

    fetch(id);
  }, [fetch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center mt-12">
      {data && (
        <div className="bg-white rounded-lg shadow-md p-4 w-4/5">
          <div className="flex justify-center mb-4">
            <img
              className="w-60 h-60 rounded-full"
              src={data.photos[0]}
              alt={data.firstName}
            />
          </div>
          <div className="flex flex-col items-center mb-2">
            <h1 className="text-4xl font-bold">
              {data.firstName} {data.lastName},
              <span className="text-xl font-normal ml-2">{data.age}</span>
            </h1>
            <p className="text-lg mt-4 max-w-md mx-auto">{data.bio}</p>
            <hr className="border-gray-300 my-6 w-4/5" />
            <div className="flex flex-col items-center">
              <div className="flex gap-2 mb-2">
                <p className="text-lg font-bold">Location:</p>
                <p className="text-lg">{data.location}</p>
              </div>
              <div className="flex gap-2 mb-2">
                <p className="text-lg font-bold">Gender:</p>
                <p className="text-lg">{data.gender}</p>
              </div>
              <div className="flex gap-2 mb-2">
                <p className="text-lg font-bold">Sexual Orientation:</p>
                <p className="text-lg">{data.sexualOrientation}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-lg font-bold">Interests:</p>
                <div className="flex flex-wrap gap-2">
                  {data.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-b from-red-100 to-rose-300 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-300 my-6 w-4/5 mx-auto" />
          <div className="flex gap-4 mt-4 justify-end mx-auto w-4/5">
            <Link to={`/events/invite?user=${data.id}`}>
              <Button variant="primary">
                <CalendarDateRangeIcon className="size-6" />
                Invite to Event
              </Button>
            </Link>
            <Link to={`/messages/new?to=${data.id}`}>
              <Button variant="secondary">
                <ChatBubbleBottomCenterIcon className="size-6" />
                Send Message
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
