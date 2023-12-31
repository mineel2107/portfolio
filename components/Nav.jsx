"use client";
import Link from "next/link";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { usePathname } from "next/navigation";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "experience", path: "/experience", icon: <HiRectangleGroup /> },
  { name: "work", path: "/projects", icon: <HiViewColumns /> },
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0  
      xl:right-[2%] z-50 top-0 w-full xl:w-12 xl:max-w-md xl:h-screen mt-14 mb-14 mx-2"
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center
       gap-y-10 px-4 md:px-40 xl:px-0 xl:h-max py-8 bg-white/10 h-[80px] backdrop-blur-sm text-3xl 
       xl:text-xl xl:rounded-full text-white"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-secondary"
              } relative flex items-center group hover:text-secondary transition-all duration-300`}
              key={index}
              href={link.path}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-white items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none capitalize font-semibold">
                    {link.name}
                  </div>
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 
                    absolute -right-2"
                  ></div>
                </div>
              </div>
              <div> {link.icon} </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
