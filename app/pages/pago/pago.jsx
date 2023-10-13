import React from "react";
import { Direccion, Open } from "./direccion";
import { Tarjeta } from "./tarjeta";
import { BookCart } from "./bookCart";
import { Resumen } from "./resume";
import {Warning} from "./warning"

export function Pago() {
  return (
    <div>
      <div className="flex flex-row w-full">
      <div className="w-[65%]">

        <Direccion />
        <Tarjeta />
        <BookCart />
      </div>

<div>
      <Resumen/>
      <Warning/>


      </div>


      </div>
      

    </div>
  );
}
