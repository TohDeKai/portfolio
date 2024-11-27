"use client";

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

type MenuItem = {
  title: string;
  link: string;
  openInNewTab?: boolean;
};

type NavProps = {
  menuItems: MenuItem[];
};

export default function Nav({ menuItems }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      {/* Desktop Menu */}
      <div className="max-w-screen-xl py-16 px-12 hidden xl:block">
        <ul className="space-y text-sm font-medium px-4 mb-0">
          {menuItems.map((menuItem, index) => (
            <li key={index} className="group">
              <a
                href={menuItem.link}
                className="inline-flex items-center py-3 rounded-xl"
              >
                <hr className="w-10 h-0.5 bg-slate-500 border-0 rounded group-hover:w-40 transition-all duration-300 group-hover:bg-blue-300" />
                <p className="pl-8 text-sm text-slate-500 group-hover:text-blue-500 uppercase">
                  {menuItem.title}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger Menu */}
      <LuMenu
        size={30}
        className="fixed bg-white text-slate-500 p-1 rounded-md top-5 right-8 xl:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Menu Overlay and Content */}
      <div
        className={`fixed inset-0 z-10 transition-all duration-300 ${
          isOpen ? "bg-black bg-opacity-50 backdrop-blur-sm" : "bg-transparent"
        }`}
        onClick={() => setIsOpen(false)} // Close menu when clicking on the background
        style={{ pointerEvents: isOpen ? "auto" : "none" }} // Disable clicks when closed
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-52 bg-slate-950 text-white p-4 rounded-md z-20 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <LuX
          size={30}
          className="fixed bg-white text-slate-500 p-1 rounded-md bottom-5 right-8 xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul className="space-y-8 text-xs">
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <a
                href={menuItem.link}
                className="block py-2"
                target={menuItem.openInNewTab ? "_blank" : "_self"}
                onClick={() => setIsOpen(false)} // Close menu when clicking on a link
              >
                {menuItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
