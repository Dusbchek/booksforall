import React, { useState, useEffect } from "react";
import { BookBar3 } from "../../components/booksBar/booksBarV";



export function BookBar2({ id }) {

  
  const [count, setcount] = useState(0);

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    if (id) {
      // Realiza una solicitud a la API de Google Books utilizando el ID
      // Asegúrate de utilizar el mismo apiKey y formato de solicitud.
      const apiKey = "AIzaSyCNCH54nBnP-cDo9U1kMCZtR5QPbwQymxI";
      const fetchBookDetails = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`
          );

          if (!response.ok) {
            throw new Error("No se pudo obtener la información del libro");
          }

          const data = await response.json();
          setBookData(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchBookDetails();
    }
  }, [id]);

  const [cart, setCart] = useState([]);

  const addToCart = () => {
    if (bookData) {
      const bookToAdd = {
        title: bookData.volumeInfo.title,
        price: bookData.saleInfo.listPrice
          ? bookData.saleInfo.listPrice.amount
          : 999,
      };
            setCart([...cart, bookToAdd]);

    }

    
  };



  return (
    <div>
      {bookData ? (
        <div className="">
          <div className="flex md:flex-col mx-auto m-4 mt-20 md:ml-16 ml-4">
            <div className="md:flex md:flex-row">
              <div className="flex flex-col flex-grow mx-auto md:ml-4">
                <img
                  src={
                    bookData.volumeInfo.imageLinks
                      ? bookData.volumeInfo.imageLinks.large
                      : "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg"
                  }
                  alt=""
                  className="h-[260px] w-[180px] md:h-[400px] md:w-[320px] mx-auto md:mx- transition duration-500 hover:scale-105 rounded-lg "
                />

                <span className="bg-gray-300 text-black-800 inline-block mx-auto text-center text-md px-2 py-0.5 font-medium rounded dark:bg-black-500 dark:text-gray-300 mt-6 transition duration-500 hover:scale-105">
                  {bookData.volumeInfo.authors}
                </span>
              </div>
              <div className="flex flex-col mt-6 w-full">
                <div className="flex flex-col mx-auto md:mx-1">
                  <h1 className=" text-[18px] md:text-[25px] font-bold tracking-[2px] md:ml-14 ml-4 mt-4 overflow-y-auto w-[90%] md:w-[68%]">
                    {bookData.volumeInfo.title}
                  </h1>
                  <h1 className="text-lg text-green-600 md:ml-14 mt-2 mx-auto">
                    {bookData.saleInfo.listPrice
                      ? bookData.saleInfo.listPrice.amount
                      : "999"}{" "}
                    MXN
                  </h1>
                </div>

                <div className="flex flex-row mt-4 ml-4 md:ml-14">
                  {String(bookData.volumeInfo.categories)
                    .split(",")
                    .map((category, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-[6px] overflow-x-hidden md:text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 overflow-y-clip overflow-x-hidden"
                      >
                        {category.trim()}
                      </span>
                    ))}
                </div>

                <h1 className="ml-4 md:ml-14 mt-3 w-[90%] md:w-[70%] text-sm overflow-hidden  h-[180px]">
                  {bookData.volumeInfo.description}
                </h1>
                <div className="flex flex-row">
                  <button
                    onClick={() => {
                      count < 1 ? setcount(0) : setcount(count - 1);
                    }}
                    type="button"
                    class="ml-4 md:ml-14 mt-3 text-white text-sm bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-3 font-bold dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    -
                  </button>
                  <h1 className="mt-4 ml-3">{count}</h1>
                  <button
                    onClick={() => {
                      setcount(count + 1);
                    }}
                    type="button"
                    class="mt-3 ml-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    +
                  </button>
                  <button
                   onClick={addToCart}
                    type="button"
                    class="mt-3 ml-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Añadir 🛒
                  </button>
                  <button
                    type="button"
                    class="mt-3 ml-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    {" "}
                    ¡Comprar ahora!
                  </button>
                </div>
                <div className="hidden sm:inline-block md:block">
                  <BookBar3
                    nombre=""
                    categ={bookData.volumeInfo.authors}
                    num={8}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" md:inline-block md:hidden overflow-x-hidden">
            <BookBar3 nombre="" categ={bookData.volumeInfo.authors} num={4} />
          </div>
        </div>
      ) : (
        <p></p>
      )}
          

    </div>
  );
}
