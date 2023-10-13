'use client';
import { BookBar2 } from "../detalles";


export default function bookDetails({params}){
    const { id } = params;

    return(
        <>
        <div>
            <BookBar2 id={id}/>
            
        </div>
        </>
    );
}