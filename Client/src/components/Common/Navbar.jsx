import { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Images/lawlogo.jpg";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/api";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";
 import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";


function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className={`bg-gradient-to-b from-velvet-100 to-velvet-100 transition-all duration-200`}>
      <div className="w-11/12 max-w-maxContent mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/">
          <h2 className="font-bold text-white text-lg font-custom">LawVistaHub</h2>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AiOutlineMenu fontSize={24} />
        </button>

        {/* Navigation links - Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  // ... (same as before)
                  <>
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-silk-200"
                        : "text-silk-200"
                    }`}
                  >
                    <p>{link.title}</p>
                    <BsChevronDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-200 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-200"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks.length ? (
                        <>
                          {subLinks
                            ?.filter(
                              (subLink) => subLink?.courses?.length > 0
                            )
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-25"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                        </>
                      ) : (
                        <p className="text-center">No Data Found</p>
                      )}
                    </div>
                  </div>
                </>

                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-silk-200 border-b-2 px-4"
                          : "text-silk-200  px-4 rounded-2xl"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login / Signup / Dashboard - Desktop */}
        <div className="hidden items-center gap-x-4 md:flex">
          {/* ... (same as before) */}
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <CiCircleCheck  className="text-3xl font-bold text-white" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] font-semibold border-black px-[12px] py-[8px] text-silk-200">
                LOG IN
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] font-semibold border-black px-[12px] py-[8px] text-silk-200">
                SIGN UP
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        {/* <button className="mr-4 md:hidden text-richblack-800 " >
          <AiOutlineMenu fontSize={24}  />
  
        </button> */}
        
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-richblack-600 text-richblack-800 fixed inset-0 z-50 x-50">
          {/* ... (similar structure as desktop navigation) */}
          <button
      className="absolute top-4 right-4 text-richblack-900"
      onClick={() => setMobileMenuOpen(false)}
    >
      <AiOutlineCloseCircle fontSize={30}  className="text-richblack-900"/>
    </button>
<div className="flex flex-col justify-center items-center mt-10">
       <ul>
        <li>
             Home
        </li>
        <li>
             Contact
        </li>
        <li>
            Dashboard
        </li>
       </ul>
              
        </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
