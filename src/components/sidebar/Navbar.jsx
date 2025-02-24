import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const userData = useSelector((state) => state?.auth?.user?.name);
  const name = userData?.trim().split(" ")[0] || "signin";
  return (
    <nav className="h-[50px] bg-amazon_light flex pl-9 pt-3 text-white">
      <AccountCircleIcon className="scale-110" />
      <div className="font-bold text-[19px] leading-6 pl-2">
        Hello, <span className="pl-1">{name}</span>
      </div>
    </nav>
  );
};
