import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import SearchBar from "../SearchBar/SearchBar";
import whiteLogo from "../../public/images/logo_black.png";
import blackLogo from "../../public/images/bg_black_logo.png";
import shoppingCartIcon from "../../public/images/shopping-cart.svg";
import Category from "../Dropdowns/Category";
import Cart from "../Cart/Cart";
import * as path from "../../constants/paths";

import profileIcon from '../../public/images/profile.svg'

export const Navbar = (props: any) => {
  const [cartClicked, setCartClicked] = useState(false);
  const [isSignOut, setIsSignOut] = useState(false);
  const [yScroll, setYScroll] = useState(0);

  const session = useSession();
  const router = useRouter();

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      setYScroll(window.scrollY);
    },
    [yScroll]
  );

  useEffect(() => {

    setYScroll(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };

  }, [handleNavigation]);

  useEffect(() => {

    if(localStorage.getItem("token"))
      setIsSignOut(false);

  }, [session]);

  const loggedInContent = (
    <>
      <Link
        href={`${path.LOGIN}`}
        className={`flex justify-between items-center py-2 pr-4 pl-3  w-full text-[16px] font-unica  border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 px-4 md:px-5 md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
          yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
            ? "text-[#1C1F22] hover:text-[#636464]"
            : "text-[#F5F8FA] hover:text-[#1C1F22]"
        }`}
      >
        <button
          onClick={(e) => {
            localStorage.removeItem("cart");
            localStorage.removeItem("token");
            setIsSignOut(true);
          }
        }>
          SIGN OUT
        </button>
      </Link>
      <hr className="border-[1px] h-10 bg-[#F5F8FA]"/>
      <Link
        href={`${path.PROFILE}`}
        className={`flex justify-between items-center ml-[50px] pr-4 pl-3 w-full text-[16px] font-unica no-underline border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
          yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
            ? "text-[#1C1F22] hover:text-[#636464]"
            : "text-[#F5F8FA] hover:text-[#1C1F22]"
        }`}
      >
        <Image src={profileIcon} alt="profile icon" className="rounded-full w-8"></Image>
      </Link>
      <Cart
        props={props}
        cartClicked={cartClicked}
        setCartClicked={(clicked: boolean) => setCartClicked(clicked)}
      />
    </>
  );

  const notLoggedInContent = (
    <>
      <Link
        href={`${path.LOGIN}`}
        className={` font-unica hover:text-black text-[16px] rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  focus:text-black ${
          yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
            ? "text-[#1C1F22] hover:text-[#636464]"
            : "text-[#F5F8FA] hover:text-[#1C1F22]"
        }`}
      >
        LOGIN
      </Link>
      <Link
        href="#"
        className={` hover:text-black font-unica text-[16px] rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  focus:text-black dark:focus:ring-blue-800 ${
          yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
            ? "text-[#1C1F22] hover:text-[#636464]"
            : "text-[#F5F8FA] hover:text-[#1C1F22]"
        }`}
      >
        Sign up
      </Link>
      <hr className="border-[1px] h-10 bg-[#F5F8FA]"/>
      <Cart
        props={props}
        cartClicked={cartClicked}
        setCartClicked={(clicked: boolean) => setCartClicked(clicked)}
      />
    </>
  );

  return (
    <nav
      className={`sticky top-0 z-10  border-b border-gray-200 px-20 py-0.5
      ${
        yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
          ? "bg-[#F5F8FA]"
          : "backdrop-filter backdrop-blur-lg"
      }
      ${router.pathname === (`${path.LOGIN}` || `${path.REGISTER}`) ? "hidden" : "block"}`}
    >
      <div className=" flex flex-wrap items-center lg:justify-between sm:justify-around  lg:pt-0 max-w-screen-3xl">
        <div className="flex h-10 items-center sm:order-1">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {yScroll < 722 && router.pathname === `${path.HOMEPAGE}` ? (
                <Image src={whiteLogo} width={140} height={10} alt="logo" />
              ) : (
                <Image src={blackLogo} width={150} height={10} alt="logo" />
              )}
            </span>
          </a>
        </div>
        <div className="sm:order-3 lg:order-2 sm:pb-5 lg:pb-0">
          <SearchBar
            categories={props.categories}
            addToCart={props.addToCart}
            yScroll={yScroll}
            path={router.pathname}
            searchHandler={(searchItem: any, categoryId: any) =>
              props.searchHandler(searchItem, categoryId)
            }
          />
        </div>
        <div
          id="mega-menu-icons"
          className=" justify-between items-center w-full sm:flex sm:w-auto sm:order-2 lg:order-3 p-4"
        >
          <ul className="flex flex-col items-center mt-4 text-sm font-medium sm:flex-row sm:space-x-8 sm:mt-0">
            <Category
              path={router.pathname}
              yScroll={yScroll}
              categories={props.categories}
            />

            {/* <Languages /> */}

            {!isSignOut ? (
              <> {loggedInContent} </>
            ) : (
              <> {notLoggedInContent} </>
            )}

            <div
              onClick={() => setCartClicked(!cartClicked)}
              className="text-gray-800  rounded-lg  px-4 py-2 sm:px-5 sm:py-2.5 mr-1 sm:mr-2"
            >
              <Image
                src={shoppingCartIcon}
                width={32}
                height={32}
                alt="Icon"
                className="rounded-full  cursor-pointer"
              />
            </div>
            <button
              data-collapse-toggle="mega-menu-icons"
              type="button"
              className="inline-flex items-center pt-2 pb-2 ml-0 text-sm text-white rounded-lg sm:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-icons"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="w-9 h-8 hover:bg-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
