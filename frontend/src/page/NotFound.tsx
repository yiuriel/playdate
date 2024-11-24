import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl">Page not found</p>
      <p className="text-lg">
        The page you're looking for doesn't exist or has been removed.
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-600">
        Go back home
      </Link>
    </div>
  );
};
