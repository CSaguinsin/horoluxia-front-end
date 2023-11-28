import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineViewHeadline } from "react-icons/md";
import { Link } from "react-router-dom";
// import { useStateContext } from '../../context/ContextProvider';
// import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  // const {userToken} = useStateContext();
  // const navigate = useNavigate();
  // if (!userToken) {
  //   navigate("/login"); 
  // }else{
  //   navigate("/admin/*")
  // }
  const menus = [
    { name: "Profile", link: "/admin/profile", icon: AiOutlineUser},
    { name: "Dashboard", link: "/admin/dashboard",  icon: AiOutlineDashboard },
    { name: "CATEGORY", link: "",  icon: BiCategoryAlt, margin: true },
    { name: "Add Category", link: "/admin/add-category", icon: IoMdAdd},
    { name: "View Category", link: "/admin/view-category", icon: MdOutlineViewHeadline },   
    { name: "Logout", link: "/admin", icon: TbLogout2, margin: true },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 h-full">
      <div
        className={`bg-matte min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 1}00ms`,
                }}
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } z-10 text-white absolute left-48 bg-matte font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;