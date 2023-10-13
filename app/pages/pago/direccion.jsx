import React, { useState, useEffect } from "react";
import "animate.css/animate.min.css";

export function Direccion() {
  const [isOpen, setIsOpen] = useState(false);

  const openOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        id=""
        data-dropdown-toggle=""
        className="mt-20 bg-gray-100  w-[100%] h-[100px] rounded-lg ml-10  border-2 border-gray-300  "
        type="button"
        //
      >
        <div className="flex flex-row">
          <div flex flex-col>
            <h1 className="mt-2 ml-3 font-medium text-sm">
              Direccion de Entrega
            </h1>
            <div className="flex flex-row  mt-3">
              <h1 className=" ml-6 text-xs">Nombre</h1>
              <h1 className=" ml-3 text-xs">Número telefonico</h1>
            </div>
            <h1 className="mt-2 ml-3 font-medium text-md overflow-x-hidden">
              Dirección del usuario
            </h1>
          </div>
          <button
            onClick={openOpen}
            class="ml-auto mt-7 mr-5 w-12 h-12 text-gray-800 dark:text-white hover:bg-gray-300 rounded-full py-2 px-2"
          >
            <svg
              className={`w-7 h-7 ml-0.5 transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="ml-10 mt-1 w-[100%] bg-gray-100 border-2 border-gray-300 rounded-lg animate__animated animate__fadeIn">
          <div className="flex  flex-row">
            <div className="ml-4 mt-4 flex flex-col w-[50%]">
              <label
                for="email"
                className=" text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombres/s
              </label>
              <input
                type="Nombres/s"
                id="Nombres/s"
                className="w-[50%] mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jose Luis"
                required
              />
            </div>
            <div className="ml-4 mt-4 flex flex-col w-[50%]">
              <label
                for="email"
                className=" text-sm font-medium text-gray-900 dark:text-white"
              >
                Apellidos
              </label>
              <input
                type="Apellidos"
                id="Apellidos"
                className="w-[80%] mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Fuentes Solis"
                required
              />
            </div>
          </div>
          <div>
            <div className="flex  flex-row">
              <div className="ml-4 mt-4 flex flex-col w-[48%]">
                <label
                  for="Direccion"
                  className=" text-sm font-medium text-gray-900 dark:text-white"
                >
                  Direccion linea 1
                </label>
                <input
                  type="Direccion"
                  id="Direccions"
                  className="w-[80%] mb-2 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div className="ml-4 mt-4 flex flex-col w-[15%] ">
                <label
                  for="Direccion"
                  className=" text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ciudad
                </label>
                <input
                  type="Ciudad"
                  id="Ciudad"
                  className="w-[100%] mb-2 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div className="ml-4 mt-4 flex flex-col">
                <label
                  for="Direccion"
                  className=" text-sm font-medium text-gray-900 dark:text-white"
                >
                  Estado
                </label>
                <input
                  type="Estado"
                  id="Estado"
                  className="w-[60%] mb-2 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="flex  flex-row">
              <div className="ml-4 mt-4 flex flex-col w-[15%]">
                <label
                  for="Direccion"
                  className=" text-sm font-medium text-gray-900 dark:text-white"
                >
                  Codigo postal
                </label>
                <input
                  type="Codigo-postal"
                  id="Codigo-postal"
                  className="w-[100%] mb-2 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div className="ml-4 mt-4 flex flex-col w-[31%] ">
                <label
                  for="Direccion"
                  className=" text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pais
                </label>
                <input
                  type="Pais"
                  id="Pais"
                  className="w-[60%] mb-2 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div className="ml-4 mt-4 flex flex-col w-[20%]">
                <label
                  for="Direccion"
                  className=" text-sm font-medium text-gray-900 dark:text-white"
                >
                  Telefono
                </label>
                <input
                  type="Estado"
                  id="Estado"
                  className="w-[100%] mb-2 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div className="mt-10 ml-5">
                <button
                  type="button"
                  class="transition duration-500 hover:scale-105 bg-blue-200 text-blue-800 ml-4 text-md font-medium mr-2 px-2.5  rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
