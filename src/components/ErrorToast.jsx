import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearGlobalError } from "../redux/slices/errorSlice";

export const ErrorToast = () => {
  const dispatch = useDispatch();
  const { globalError } = useSelector((state) => state.error);

  useEffect(() => {
    if (globalError?.duration) {
      const timer = setTimeout(() => {
        dispatch(clearGlobalError(globalError.id));
      }, globalError.duration);
      return () => clearTimeout(timer);
    }
  }, [globalError, dispatch]);

  if (!globalError) return null;

  return (
    <div
      className="fixed top-4 right-4 z-[9999] max-w-sm bg-white border-l-4 border-red-500 shadow-lg rounded p-4 animate-slide-in"
      style={{ animation: "slideIn 0.3s ease-out" }}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <span className="text-red-500 text-lg" aria-hidden="true">⚠️</span>
          <p className="text-sm text-gray-800">{globalError.message}</p>
        </div>
        <button
          onClick={() => dispatch(clearGlobalError(globalError.id))}
          className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          aria-label="Dismiss error notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const slideInKeyframes = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const GlobalErrorStyles = () => (
  <style>{slideInKeyframes}</style>
);
