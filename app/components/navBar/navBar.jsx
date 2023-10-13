"use client";
import React, { useState } from "react";
import Link from 'next/link'
import { LuShoppingCart } from "react-icons/lu";




export function searchBar(){

  return(

     
    <div className=" my-auto w-[50%] md:w-[25%] lg:w-[25%] ">
    
    <div className="relative">
      <input
        type="text"
        className="w-full h-6 py-1 pl-8 pr-3 rounded-full bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 text-[10px] md:text-sm "
        placeholder="Buscar..."
      />
      <div className="absolute inset-y-0 mt-0.5 flex items-center pl-3 ">
        <svg
          className="my-auto w-3 h-3 md:w-4 md:h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
    </div>
  </div>

  )
}


export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
    <nav className="fixed top-0 left-0 right-0 bg-gray-200 shadow-lg z-40">
      <div className="max-w-screen-xl flex items-center justify-between p-2">
        <a href="/" className="hidden sm:flex items-center">
          <img
            src="https://images.vexels.com/media/users/3/271649/isolated/preview/3a1938ea55f27c31d53b585fcebdcd5e-icono-de-dibujos-animados-de-libro-abierto.png"
            className="h-6 mr-2"
            alt="Logo"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white tracking-[2px]">
            BooksForAll
          </span>
        </a>
        <a href="/" className="sm:hidden flex items-center">
          <img
            src="https://images.vexels.com/media/users/3/271649/isolated/preview/3a1938ea55f27c31d53b585fcebdcd5e-icono-de-dibujos-animados-de-libro-abierto.png"
            className="h-6 mr-2"
            alt="Logo"
          />
          <span className="z-10 self-center text-sm font-semibold whitespace-nowrap dark:text-white tracking-[2px]">
            BooksForAll
          </span>
        </a>

        <div className="flex  space-x-6 md:space-x-4 items-center md:order-2 justify-end w-full">
     

               
          <Link className="hidden md:block" href="pages/shoppingCart">
            <svg
              class="h-5 w-5 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"s
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>
          {searchBar()}

          <button
            type="button"
            className="flex mr-2 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
            id="user-menu-button"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-6 h-6 rounded-full"
              src="data:image/png;base64,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"
              alt="user photo"
            />
          </button>

          

          {isDropdownOpen && (
            <div
              className="  z-50 mt-56 absolute right-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-[100px] h-[180px] lg:h-[150px]"
              id="user-dropdown"
            >
              <div className="px-3 py-2">
                <span className="block text-[10px] text-gray-900 dark:text-white font-bold">
                  TecMilenio
                </span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-[10px] text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Opiones ⚙️
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-[10px] text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Compras 🛍️
                  </a>
                </li>
                <li className="lg:hidden">
                  <a
                    href="#"
                    className="md:hidden px-3 py-1 text-[10px] text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span className="mr-1">Carrito</span>{" "}
                    <LuShoppingCart className="w-2.5 h-2.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-1 text-[10px] text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}

          
        </div>
      </div>
    
    </nav>
    <div className="w-full h-0"></div>
    </div>
  );
}
