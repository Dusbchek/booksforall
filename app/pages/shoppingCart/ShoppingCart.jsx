import React, { useState,useContext } from "react";
import { ShoppingCart } from "../shoppingCart/cartCard";
import { VerticalBar } from "../../components/booksBar/verticalBar";
import { BookBar } from "@/app/components/booksBar/booksBar";







export function Cart() {


  return (

    
    <div>
      <div flex flex-col>
        <div className="flex flex-row mt-20">
          <div>
            <div>
              <div className="mb-8">

               <ShoppingCart />
            
              </div>

              <div className="hidden sm:inline-block md:block">
                <BookBar nombre="" categ="React" num={7} />
              </div>
            </div>
          </div>

          <div className="hidden sm:inline-block md:block">
            <VerticalBar nombre="" categ="React" num={5} />
          </div>
        </div>
      </div>
    </div>
  );
}
