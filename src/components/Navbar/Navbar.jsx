import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Button from "../Button/Button";

 function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="main__nav">
        <div className="main__nav__container">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
             to="/">
              flex
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars className="text-black" />
            </button>
          </div>
          <div
            className={
              " lg:flex flex-grow items-center" +
              (navbarOpen ? " flex justify-center text-gray-700" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="nav__lists">
              <li className="flex items-center">
                <Link
                  className="nav__links"
                  to="/products"
                >
                  <span className="inline-block ml-2 hover:text-green-500">Products</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="nav__links"
                  to="/about"
                >
                  <span className="inline-block ml-2 hover:text-green-500">About</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link className="nav__links"
                  to="/contacts"
                >
                  <span className="inline-block ml-2 hover:text-green-500">Contacts</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Button type="button">Register</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;