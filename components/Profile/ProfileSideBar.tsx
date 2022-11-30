import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = (props: any) => {
  const router = useRouter();
  const checkPath = (path: string) => {
    return path === "/profile"
      ? router.pathname === "/profile"
        ? true
        : false
      : router.pathname.includes(path)
      ? true
      : false;
  };
  const profileArray = [
    {
      name: "Account Information",
      path: "/profile",
    },
    {
      name: "Billing and payment",
      path: "#",
    },
    {
      name: "My Products",
      path: "#",
    },
    {
      name: "Addresses",
      path: "/profile/Addresses",
    },
    {
      name: "Security",
      path: "#",
    },
    {
      name: "Account Settings",
      path: "#",
    },
  ];
  return (
    <div className="w-80" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          <li className="flex items-center border-b-2 border-black pb-3">
            <Link href="/" className="font-comfortaa">
              Home
            </Link>
            &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="11"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 298 511.93"
            >
              <path
                fillRule="nonzero"
                d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
              />
            </svg>
            &nbsp;
            <Link href="/" className="font-comfortaa">
              Profile
            </Link>
          </li>
          <li className="font-unica text-2xl pt-2">PROFILE</li>
          {profileArray.map((ele, index) => {
            let flag = checkPath(ele.path);
            return (
              <li key={index}>
                <Link
                  href={ele.path}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span
                    className={
                      (flag ? "text-[#A042E1] " : "") +
                      "flex-1 whitespace-nowrap"
                    }
                  >
                    {ele.name}
                  </span>
                  <svg
                    className={flag ? "inline-block" : "hidden"}
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 298 511.93"
                  >
                    <path
                      fillRule="nonzero"
                      d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
                    />
                  </svg>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
