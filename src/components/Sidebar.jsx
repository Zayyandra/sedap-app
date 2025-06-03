import { CgNotes } from "react-icons/cg"; 
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard, MdErrorOutline, MdFastfood } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { BiCart, BiLockAlt } from "react-icons/bi";
import { RiShieldKeyholeLine } from "react-icons/ri"; // icon error 403
import { NavLink } from "react-router-dom";

const menuClass = ({ isActive }) =>
  `flex cursor-pointer items-center rounded-xl p-4 space-x-2
  ${
    isActive
      ? "text-hijau bg-green-200 font-extrabold"
      : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
  }`;

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins-ExtraBold text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Menu List */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          {/* Dashboard */}
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdSpaceDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>

          {/* User */}
          <li>
            <NavLink id="menu-2" to="/UserList" className={menuClass}>
              <FaUser className="mr-4 text-xl" />
              User
            </NavLink>
          </li>

          {/* Orders */}
          <li>
            <NavLink id="menu-3" to="/Orders" className={menuClass}>
              <BiCart className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>

          {/* Customers */}
          <li>
            <NavLink id="menu-4" to="/Customers" className={menuClass}>
              <BsPeopleFill className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-5" to="/products" className={menuClass}>
              <MdFastfood className="mr-4 text-xl" />
              Products
            </NavLink>
          </li>

          {/* Error Pages */}
          <li>
            <NavLink to="/error/400" className={menuClass}>
              <MdErrorOutline className="mr-4 text-xl" />
              Error 400
            </NavLink>
          </li>
          <li>
            <NavLink to="/error/401" className={menuClass}>
              <BiLockAlt className="mr-4 text-xl" />
              Error 401
            </NavLink>
          </li>
          <li>
            <NavLink to="/error/403" className={menuClass}>
              <RiShieldKeyholeLine className="mr-4 text-xl" />
              Error 403
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes/" className={menuClass}>
              <CgNotes  className="mr-4 text-xl" />
              Notes
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span className="flex-1 p-2">
              Please organize your menus through button below!
            </span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer"
            >
              <span className="text-gray-600 flex items-center ">
                <AiOutlinePlus className="mr-3" />
                Add Menus{" "}
              </span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-20 rounded-full"
            src="https://avatar.iran.liara.run/public/28"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
