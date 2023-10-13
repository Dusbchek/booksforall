import React from "react";

export function TarjetaPedido() {
  return (
    <div className="mt-5 mb-5 mx-auto ">
      <div className="flex flex-col w-[90%] md:w-[80%] py-3 mx-auto px-3 rounded-md bg-gray-100 border-2 border-gray-300 ">
        <div className="flex flex-row">
          <h1 className=" ml-4 mb-4 text-xs md:text-sm">Estado del pedido</h1>
          <div className="flex flex-col ml-auto">
            <h1 className=" text-xs md:text-sm ">Fecha del pedido 00/00/00</h1>
            <h1 className="  text-xs md:text-sm">Número de pedido: 000000</h1>
          </div>
        </div>
        <hr class="border-t-4 border-gray-400 mx-auto w-[100%] mt-1 md:mt-2 mb-2 rounded-lg"></hr>
        <div>
          <span className="bg-gray-300 w-[70px] md:w-[110px] mx-auto text-black-800 inline-block ml-4 overflow-y-auto text-center text-[8px] md:text-xs px-2 py-0.5 font-medium rounded dark:bg-black-500 dark:text-gray-300  transition duration-500 hover:scale-105">
            Autor del libro
          </span>
        </div>
        <div className="flex flex-row">
          <img
            src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg"
            alt=""
            className="w-[70px] h-[110px] md:w-[110px] md:h-[170px] ml-4 md:ml-4 rounded-lg transition duration-500 hover:scale-105"
          />
          <div className="flex flex-row">
            <div className="flex flex-col my-auto">
              <h1 className="text-[9px] md:text-[13px]  font-bold tracking-[2px] ml-2 md:ml-5 mt-1 overflow-y-auto">
                Titulo del libro
              </h1>
              <h1 className="text-[7px] md:text-[13px]  font-bold tracking-[2px] ml-2 md:ml-5 mt-1 md:mt-4 overflow-y-auto">
                Genero pricipal
              </h1>
              <div className=" md:mt-4">
                <span className=" ml-2 md:ml-5 bg-green-100 text-green-800 text-[8px] md:text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 ">
                  Precio unitario
                </span>
              </div>
            </div>
           
          </div>
          <div className=" flex flex-col ml-auto my-auto ">
              <h1 className="text-[10px] md:text-[16px] mx-auto font-bold tracking-[2px] mt-1 overflow-y-auto">
                Total
              </h1>
              <button
                type="button"
                class="transition duration-500 mt-2 hover:scale-105 bg-gray-200 text-gray-800 text-[9px] md:text-sm font-medium  px-3 mx-auto  rounded-full dark:bg-gray-700 dark:text-blue-400 border border-gray-400"
              >
                Añadir 🛒
              </button>
              <button
                type="button"
                class="transition duration-500 mt-2 hover:scale-105 bg-red-200 text-red-800 text-[9px] md:text-sm font-medium  px-3 mx-auto  rounded-full dark:bg-gray-700 dark:text-blue-400 border border-red-400"
              >
                Eliminar
              </button>
              
            </div>
        </div>
      </div>
    </div>
  );
}
