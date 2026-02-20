import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import { setGlobalError } from "../redux/slices/errorSlice";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        <div className="text-6xl mb-4">😵</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-4">{error?.message || "An unexpected error occurred"}</p>
        <button
          onClick={resetErrorBoundary}
          className="bg-[#FFD814] hover:bg-[#f0c400] text-gray-900 px-6 py-2 rounded-lg font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

function AppErrorBoundary({ children }) {
  const dispatch = useDispatch();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error("Global Error:", error, info);
        dispatch(
          setGlobalError({
            message: error?.message || "Something went wrong",
            type: "error",
            duration: 8000,
          })
        );
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default AppErrorBoundary;
