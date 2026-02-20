import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

export const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6" role="main" aria-labelledby="error-title">
      <h1 id="error-title" className="text-5xl font-bold text-red-600" role="heading" aria-level="1">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="text-gray-500">It might have been moved or deleted.</p>

      <nav className="mt-6 flex space-x-4" aria-label="Navigation links">
        <Link
          to={routes.signup}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          aria-label="Go to signup page"
        >
          Go to Signup
        </Link>

        <Link
          to={routes.home}
          className="px-6 py-2 border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          aria-label="Go to home page"
        >
          Go to Home
        </Link>
      </nav>
    </main>
  );
};
