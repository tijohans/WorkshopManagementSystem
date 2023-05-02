import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

export default function CourseTable() {
  return (
    <div id="coursetable" className="h-full ">
      <div className="bg-white px-9 shadow-md rounded-lg h-max pb-8">
        <h3 className="text-2xl py-5 font-bold text-eerie-black flex flex-col justify-center items-center ">
          HMS Courses
        </h3>
        <ul>
          <li className="py-1">
            <span className="font-bold">HMS1: </span> Yes
          </li>
          <li className="py-1">
            <span className="font-bold">HMS1: </span> Yes
          </li>
          <li className="py-1">
            <span className="font-bold">HMS1: </span> Yes
          </li>
          <li className="py-1">
            <span className="font-bold">HMS1: </span> Yes
          </li>
          <li className="py-1">
            <span className="font-bold">HMS1: </span> Yes
          </li>
          <li className="py-1">
            <span className="font-bold">HMS1: </span> Yes
          </li>
          <li className="py-1">
            <span className="font-bold">HMS1: </span> Yes
          </li>
          <li className="py-1">
            <span className="font-bold">HMS1: </span> Yes
          </li>
        </ul>
      </div>
    </div>
  );
}
