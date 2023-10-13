import React from "react";

export function Tarjeta() {
  return (
    <div>
      <div className="w-[100%] h-[75px] bg-gray-100 border-2 border-gray-300 mt-3 ml-10 rounded-lg flex flex-row">
        <div className="flex flex-col ml-4 mt-2 w-[35%]">
          <label
            for="Pago"
            className=" text-sm font-medium text-gray-900 dark:text-white"
          >
            Número de Tarjeta
          </label>
          <input
            type="Número-de-Tarjeta"
            id="Número-de-Tarjeta"
            className="w-[65%] mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div className="mt-2 ml-4 w-[11%]">
          <label
            for="countries"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Mes
          </label>
          <select
            id="countries"
            class="w-[100%] bg-gray-50  border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="1">Enero</option>
            <option value="2">Feberero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
          </select>
        </div>
        <div className="mt-2 ml-4 w-[25%]">
          <label
            for="countries"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Año
          </label>
          <select
            id="countries"
            class="w-[40%] bg-gray-50  border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="0">23</option>

            <option value="1">24</option>
            <option value="2">25</option>
            <option value="3">26</option>
            <option value="4">27</option>
            <option value="5">28</option>
            <option value="6">29</option>
            <option value="7">30</option>
            <option value="8">31</option>
            <option value="9">32</option>
          </select>
        </div>
        <div className="flex flex-col ml-4 mt-2 w-[10%]">
          <label
            for="Pago"
            className=" text-sm font-medium text-gray-900 dark:text-white"
          >
            CVV
          </label>
          <input
            type="CVV"
            id="CVV"
            className="w-[70%] mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
      </div>
    </div>
  );
}
