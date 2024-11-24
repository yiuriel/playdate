import { FC, useState } from "react";
import { User } from "../../features/users/users.types";
import { Link } from "react-router";
import { ChatBubbleLeftRightIcon, HeartIcon } from "@heroicons/react/20/solid";

export const UserCard: FC<{ user: User }> = ({ user }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/profile/${user.id}`}>
      <div className="bg-white h-full cursor-pointer flex-auto max-w-lg rounded-lg shadow-md shadow-gray-300 flex flex-col justify-between items-center hover:scale-105 transition duration-300">
        <img
          src={user.photos?.[0]}
          alt={user.firstName}
          className="w-full h-40 rounded-t-md"
        />
        <div className="px-4 pt-2 space-y-4 pb-4 w-full">
          <div className="flex w-full justify-start">
            <div>
              <h2 className="text-2xl font-bold text-black">
                {user.firstName}
              </h2>
              <p className="text-black">
                {user.age} years old,{" "}
                <span className="text-black">{user.location}</span>
              </p>
            </div>
          </div>
          <div
            className="flex gap-2 w-full justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`p-2 rounded-full transition duration-300 border-2 border-black hover:border-gray-800 ${
                isFavorite
                  ? "bg-black text-rose-400 hover:bg-gray-800"
                  : "bg-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
            >
              <HeartIcon className="h-6 w-6" />
            </button>
            <Link to={`/messages/new?to=${user.id}`}>
              <button className="p-2 rounded-full transition duration-300 border-2 border-black hover:border-gray-800 bg-white">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-black" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
