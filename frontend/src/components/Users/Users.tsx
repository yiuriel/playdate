import { useGetUsersQuery } from "../../features/users/users.api";
import { UserCard } from "./UserCard";

export const Users = () => {
  const { data } = useGetUsersQuery();

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 p-4 w-5/6">
        {data?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
