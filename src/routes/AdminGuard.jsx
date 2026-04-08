import { Navigate } from "react-router-dom";
import { routes } from "@config/routes.js";
import { useHasRole } from "@hooks/useHasRole.js";
import PropTypes from "prop-types";

const AdminGuard = ({ children, allowedRoles = ["admin", "product_manager"] }) => {
  const hasAccess = useHasRole(allowedRoles);

  if (!hasAccess) {
    return <Navigate to={routes.home} replace />;
  }

  return children;
};

AdminGuard.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default AdminGuard;