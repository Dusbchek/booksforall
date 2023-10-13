import React, { useState, useEffect } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import Link from 'next/link'
import axios from 'axios';

export function BookBar3({nombre, categ,num}) {

  const [imageUrl, setimageUrl] = useState()

 

  

 
  const [books, setBooks] = useState([]);
  const [index, setIndex] = useState(0); 
  const [page, setPage] = useState(1); 
  const booksPerPage = num;

  const apiKey = 'AIzaSyCNCH54nBnP-cDo9U1kMCZtR5QPbwQymxI';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${categ}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('No se pudo obtener la información');
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
    <div>
       <p className="pt-2 pb-1 tracking-[3px] text-md m-3 mb-[-20px] md:ml-[17%] font-medium">{nombre}</p>
   
    <div className="mx-auto mt-3 ml-3 mr-3 overflow-x-auto no-scrollbar">

      <div className="flex flex-col w-full mx-auto m-3">
      
      
      

      <div className="flex-col items-center justify-between mx-auto overflow-x-auto no-scrollbar">
     
        <ul className="flex gap-2 mt-1 mx-auto flex-x-auto overflow-x-auto no-scrollbar">
       

        {books.slice(index, index + booksPerPage).map((book) => ( // Usé el método slice para mostrar solo los libros del índice actual al índice más el número de libros por página
           <li className="group" key={book.id}>
           <Link href={`/pages/detalles/${book.id}`}>
            
                <img
                
                src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'https://edit.org/images/cat/portadas-libros-big-2019101610.jpg'}

                  alt=""
                  className="h-[90px] w-[65px] md:h-[125px] md:w-[89px] object-cover transition duration-500 group-hover:scale-105 rounded-lg mx-auto"
                  style={{transition: "transform .5s"}} // Agregué un estilo CSS para la transición
                />

                <div>
                  <h3 className="text-[10px] text-center text-gray-700 group-hover:underline group-hover:underline-offset-4 w-[80px] truncate mt-1 font-bold">
                    {book.volumeInfo.title}
                  </h3>
                </div>
                
                </Link>
            </li>
          ))}
          
        </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
