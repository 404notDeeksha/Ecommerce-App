import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// 'prop-types'

const Portal = ({ children }) => {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) {
    console.error("Portal root not found in the DOM.");
    return null;
  }
  return ReactDOM.createPortal(children, portalRoot);
};

Portal.propTypes = {
  children: PropTypes.node,
};

export default Portal;
