"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData: { name: string; path: string; Icon: IconType }[] = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
      <div className="flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-20 lg:h-max py-8 bg-white/10 backdrop-blur-xs text-3xl lg:text-xl lg:rounded-full">
        {navData.map((link, i) => (
          <Link
            prefetch
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={i}
          >
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden lg:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-1.5 rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
