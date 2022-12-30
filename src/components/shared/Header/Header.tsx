import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  // State for Menu
  const [open, setOpen] = useState<boolean>(false);

  // Get user form context using useContext
  const { user, logOut } = useContext(AuthContext);

  // Logout Function
  const logoutHandler = () => {
    logOut();
  };

  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link
              className="text-2xl md:text-3xl text-purple-600 font-bold"
              to="/"
            >
              Task App
            </Link>
          </div>
          <div className="menu">
            <ul
              className={`nav-menu md:flex ease-in-out duration-500 ${
                open
                  ? "left-0 ease-in-out duration-500 "
                  : "left-[-100%] ease-in-out duration-500"
              }`}
            >
              <span
                onClick={() => setOpen(false)}
                className="lg:hidden float-right pr-5 cursor-pointer"
              >
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </span>
              <li className="pt-10 lg:pt-0">
                <Link className="text-lg text-black pl-10" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-lg text-black pl-10" to="/add-task">
                  Add Task
                </Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link className="text-lg text-black pl-10" to="/my-task">
                      My Task
                    </Link>
                  </li>
                  <li>
                    <p className="text-lg text-purple-600 font-bold pl-10">
                      {user?.displayName}
                    </p>
                  </li>
                  <li>
                    <button
                      onClick={logoutHandler}
                      className="text-lg text-red-600 font-semibold pl-10"
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      className="text-lg text-purple-600 font-semibold pl-10"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-lg text-white bg-purple-600 py-2.5 px-6 ml-10 rounded-md"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden h-6 w-6 cursor-pointer"
          >
            {open ? (
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
