import React from 'react'

export function Resumen() {
  return (
    <div>
        <div className='bg-gray-100 border-2 border-gray-300 w-[350px] h-[300px] mt-20 ml-14 rounded-lg mr-3'>
          <h1 className='font-medium tracking-[1px] text-md mt-4 ml-3'>Resumen</h1>
          <hr className='border-[1px] border-gray-400 mx-auto w-[95%] rounded-full'/>
          <div className='flex flex-row'>
          <h1 className='font-medium tracking-[1px] text-sm mt-4 ml-8'>Costo total</h1>
          <h1 className='font-medium tracking-[1px] text-sm mt-4 ml-auto mr-8'>$$$</h1>
          </div>
          <div className='flex flex-row'>
          <h1 className='font-medium tracking-[1px] text-sm mt-4 ml-8'>Costo de envio</h1>
          <h1 className='font-medium tracking-[1px] text-sm mt-4 ml-auto mr-8'>$$$</h1>
          </div>
          <div className='flex flex-row mt-9'>
          <h1 className='font-medium tracking-[1px] text-md mt-4 ml-6'>Total</h1>
          <h1 className='font-medium tracking-[1px] text-md mt-4 ml-auto mr-6'>MXN$759.06</h1>
          </div>
         <div className='text-center '>
          <button type="button" class=" mt-5 w-[80%] transition duration-500 hover:scale-105 bg-gray-200 text-black-800 text-md font-medium  px-4 h-[35px]  rounded-lg dark:bg-gray-700 dark:text-blue-400 border-2 border-gray-400">Realizar pedido</button>
          </div>

          
          




        </div>
    </div>
  )
}

