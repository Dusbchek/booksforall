import React from "react";

export function Warning() {
  return (
    <div>
      <div className="bg-gray-100 border-2 border-gray-300 w-[350px] h-[120px] ml-14 mt-6 rounded-lg">
        <img
          className="w-[70px] h-[30px] mt-3 ml-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
          alt=""
        />
        <div className="mx-auto w-[90%] ">
        <h1 className=" mt-3 font-medium text-sm bg-blue-200 border-2 border-blue-400 rounded-full text-center py-0.5">
          Este pago esta protegido por stripe.com
        </h1>
        </div>
      </div>
    </div>
  );
}
