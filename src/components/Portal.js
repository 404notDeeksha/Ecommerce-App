import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) {
    console.error("Portal root not found in the DOM.");
    return null;
  }
  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
