import React, { ReactNode, useState } from 'react'
import Button from './Button'


export default function CheckList() {

  return (

<div>

      <h3 className="text-2xl font-bold text-eerie-black flex flex-col justify-center items-center mt-5">Courses</h3>
<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  ">
    <li class="w-full border-b border-gray-200 rounded-t-lg ">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4  border-gray-300 rounded     "/>
            <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">HMS 1</label>
        </div>
    </li>
   

    <li class="w-full border-b border-gray-200 rounded-t-lg ">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4  border-gray-300 rounded     "/>
            <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">HMS 2</label>
        </div>
    </li>

    <li class="w-full border-b border-gray-200 rounded-t-lg ">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4  border-gray-300 rounded     "/>
            <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">HMS 3</label>
        </div>
    </li>

    <li class="w-full border-b border-gray-200 rounded-t-lg ">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4  border-gray-300 rounded     "/>
            <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">HMS 4</label>
        </div>
    </li>

    <li class="w-full border-b border-gray-200 rounded-t-lg ">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4  border-gray-300 rounded     "/>
            <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">HMS 5</label>
        </div>
    </li>

    <li class="w-full border-b border-gray-200 rounded-t-lg ">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-grey-200 border-gray-300 rounded     "/>
            <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">HMS 6</label>
        </div>
    </li>

    <li class="w-full border-b border-gray-200 rounded-t-lg ">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4  border-gray-300 rounded     "/>
            <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">HMS 7</label>
        </div>
    </li>
</ul>

   </div>

  )
}