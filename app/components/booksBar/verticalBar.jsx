import React, { useState, useEffect } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import Link from "next/link";
import axios from "axios";

export function VerticalBar({ nombre, categ, num }) {
  const [imageUrl, setimageUrl] = useState();

  const [books, setBooks] = useState([]);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const booksPerPage = num;

  const apiKey = "AIzaSyCNCH54nBnP-cDo9U1kMCZtR5QPbwQymxI";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${categ}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener la información");
        }

        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const prevPage = () => {
    if (index > 0) {
      setIndex(index - 1);
      setPage(Math.ceil((index - 1) / booksPerPage) + 1);
    }
  };

  // Definí una función para ir a la página siguiente
  const nextPage = () => {
    if (index < books.length - booksPerPage) {
      setIndex(index + 1); // Aumento el índice en uno
      setPage(Math.ceil((index + 1) / booksPerPage) + 1);
    }
  };

  return (
    <div className="mt-8 w-[75%]  h-full mr-20 overflow-x-hidden no-scrollbar mx-auto ">
      <div className="w-[230px] h-[150px] bg-gray-100 mx-auto mt-10 mb-3 mr-4 rounded-lg ">
        <div className="py-[20%] px-[14%]">
          <h1 className=" text-center text-md font-medium tracking-[1px] ">
            Subtotal: 00
          </h1>
          <button
          type="button"
          class="transition duration-500 mt-2 hover:scale-105 bg-yellow-200 text-yellow-800 ml-4 text-sm font-medium mr-2 px-3 py-2  rounded-full dark:bg-gray-700 dark:text-blue-400 border border-yellow-400"
        >
          Proceder al pago
        </button>
        </div>
        
      </div>

      <p className="pt-2 pb-1 tracking-[3px] text-md m-3 mb-[-20px]  font-medium">
        {nombre}
      </p>

      <div className="mx-auto mt-3 ml-3 mr-3  h-[50%]">
        <div className="flex flex-col w-full mx-auto m-3">
          <div className="mx-auto overflow-y-auto ">
            <ul className=" overflow-y-auto  h-[30%]">
              {books.slice(index, index + booksPerPage).map(
                (
                  book // Usé el método slice para mostrar solo los libros del índice actual al índice más el número de libros por página
                ) => (
                  <li className="group flex flex-col h-[30%]" key={book.id}>
                    <Link href={`/pages/detalles/${book.id}`}>
                      <div className="flex flex-row">
                        <div className="flex flex-col">
                          <img
                            src={
                              book.volumeInfo.imageLinks
                                ? book.volumeInfo.imageLinks.smallThumbnail
                                : "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg"
                            }
                            alt=""
                            className="h-[90px] w-[65px] mb-4 md:h-[125px] md:w-[89px] object-cover transition duration-500 group-hover:scale-105 rounded-lg mx-auto"
                            style={{ transition: "transform .5s" }} // Agregué un estilo CSS para la transición
                          />

                          <div></div>
                        </div>

                        <div className="my-auto mx-auto ml-3">
                          <h3 className="text-[10px] text-center text-gray-700 group-hover:underline group-hover:underline-offset-4 w-[80px] truncate mt-1 font-bold">
                            {book.volumeInfo.title}
                          </h3>
                          <button
                            type="button"
                            class="transition duration-500 hover:scale-105 bg-yellow-200 text-yellow-800 ml-4 text-xs font-medium mr-2 px-2.5  rounded-full dark:bg-gray-700 dark:text-blue-400 border border-yellow-400"
                          >
                            Añadir
                          </button>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
