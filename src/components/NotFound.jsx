import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! The page you`&apos;`re looking for doesn`&apos;`t exist.
      </p>
      <p className="text-gray-500">It might have been moved or deleted.</p>

      <div className="mt-6 flex space-x-4">
        <Link
          to={routes.signup}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Go to Signup
        </Link>

        <Link
          to={routes.home}
          className="px-6 py-2 border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-200 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};
