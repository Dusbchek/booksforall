import React from "react";

export const ShoppingCart = ({ cart }) => {


 
  return (
    <div className="mt-14 mb-[-30px]">
      {cart? (
        cart.map((book, index) => (
          <div key={index} className="flex flex-row w-[90%] md:w-[85%] py-3 ml-3 md:ml-10 px-3 rounded-md bg-gray-100 border-2 border-gray-300">
            <img
              src={book.image}
              alt={book.title}
              className="w-[80px] h-[120px] md:w-[180px] md:h-[264px] ml-0.5 md:ml-4 rounded-lg transition duration-500 hover:scale-105"
            />
            <div className="flex flex-col">
              <h1 className="text-[12px] md:text-[18px] md:text-[20px] font-bold tracking-[2px] ml-2 md:ml-5 mt-1 md:mt-4 overflow-y-auto">
                {book.title}
              </h1>
              <div className="mt-[-4px] md:mt-1">
                <span className="ml-2 md:ml-5 bg-green-100 text-green-800 text-[8px] md:text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 ">
                  ${book.price}
                </span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[8px] md:text-xs mt-1 ml-2 md:mt-5 md:ml-5 w-[90%]">
                  {book.description}
                </h1>
                <div className="md:mt-4 mt-1 flex flex-row my-auto">
                  <div>
                    <span className="md:mt-3 md:ml-5 mt-1 ml-2 bg-gray-100 text-gray-800 text-[8px] md:text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 border border-gray-400">
                      Cantidad: {book.quantity}
                    </span>
                  </div>
                  <button type="button" className="transition duration-500 hover:scale-105 bg-red-200 text-red-800 ml-1 md:ml-4 text-[8px] md:text-xs font-medium mr-2 px-2.5 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-red-400">
                    Eliminar
                  </button>
                </div>
                <hr className="border-t-2 border-gray-800 ml-2 md:ml-5 w-[95%] mt-1 md:mt-4"></hr>
                <div className="mt-2 flex justify-end">
                  <span className="bg-green-100 text-green-800 md:text-sm text-[10px] font-medium  mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 ">
                    Subtotal: ${book.price * book.quantity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};
