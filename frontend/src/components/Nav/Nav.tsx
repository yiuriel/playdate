import { useEffect } from "react";
import { useLazyGetProfileQuery } from "../../features/profile/profile.api";
import { SignedInNav } from "./SignedInNav";
import { SignedOutNav } from "./SignedOutNav";
import { Link } from "react-router";

export const Nav = () => {
  const [fetch, { data }] = useLazyGetProfileQuery();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <header className="p-2 border-b-2 border-b-teal-200 bg-white flex gap-4 items-center justify-between">
      <Link to="/" prefetch="render">
        <h1 className="text-teal-500 text-xl px-2">Playdate</h1>
      </Link>
      {data ? <SignedInNav /> : <SignedOutNav />}
    </header>
  );
};
