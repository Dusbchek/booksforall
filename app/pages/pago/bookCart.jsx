import React from "react";

export function BookCart() {
  return (
    <div className="mb-4">
      <div className="w-[100%]  bg-gray-100 border-2 border-gray-300 mt-4 ml-10 rounded-lg">
        <div className="flex flex-row">
          <img
            src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg"
            alt="Portada"
            className="h-[180px] w-[120px] mt-4 ml-4 rounded-lg transition duration-500 hover:scale-105 "
          />
          <div className="flex flex-col mt-8 ml-4">
            <h1 className="  font-medium text-lg tracking-[1px]">Autor</h1>
            <h1 className=" mt-2 text-md font-medium tracking-[1px]">Editorial</h1>
            <h1 className="mt-2 text-xs overflow-y-hidden h-[50px] w-[85%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tempora. Fugit tempora laborum inventore aut earum quis id aperiam, laudantium voluptate ullam ratione tempore est maxime sit odit laboriosam necessitatibus?</h1>
            <div className="mt-2">
            <span
            for="desripcion"
            className=" bg-green-100 text-green-800 text-[8px] md:text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 ">$$$</span>
            </div>
          </div>
        </div>
        <h1 className="ml-4 mt-2 text-sm">Datos del envio</h1>
        <h1 className="ml-4 mt-2 text-xs mb-2">Fecha de entrega: 00/00/00</h1>

      </div>
    </div>
  );
}
