import { useSelector } from "react-redux";

export const ROLES = {
  admin: "admin",
  product_manager: "product_manager",
  user: "user",
};

export const PERMISSIONS = {
  product: {
    create: "product:create",
    read: "product:read",
    update: "product:update",
    delete: "product:delete",
  },
};

export const useHasRole = (allowedRoles = []) => {
  const user = useSelector((state) => state.auth.user);
  
  if (!user || !user.role) {
    return false;
  }
  
  return allowedRoles.includes(user.role);
};

export const useHasPermission = (requiredPermission) => {
  const user = useSelector((state) => state.auth.user);
  
  if (!user || !user.role) {
    return false;
  }

  const rolePermissions = {
    admin: ["product:create", "product:read", "product:update", "product:delete"],
    product_manager: ["product:create", "product:read", "product:update"],
    user: ["product:read"],
  };

  return rolePermissions[user.role]?.includes(requiredPermission) || false;
};

export const useUserRole = () => {
  const user = useSelector((state) => state.auth.user);
  return user?.role || null;
};