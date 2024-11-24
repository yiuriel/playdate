import { Link } from "react-router";

export const SignedOutNav = () => {
  return (
    <div className="flex gap-2">
      <Link to="/login" prefetch="render">
        <p className="text-[#FFFFFF]">Login</p>
      </Link>
      <Link to="/register" prefetch="render">
        <p className="text-[#FFFFFF]">Register</p>
      </Link>
    </div>
  );
};
