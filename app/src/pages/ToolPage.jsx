import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DangerWarning from '../components/DangerWarning.jsx'

const defaultTool = {
  id: "loading",
  name: "name",
  imageurl: "imageurl",
  description: "description",
  broken: false,
  dangerous: false,
};


export default function ToolPage() {
  const [tool, setTool] = useState(defaultTool);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    getTool(id);
  }, []);

  const getTool = async (id) => {
    await axios
      .get(`https://wms-api-ps1s.onrender.com/api/tools/${id}`)
      .then((response) => {
        setLoading(false);
        setTool(response.data[0]);
      })
      .catch((error) => console.error("Error: " + error));
  };

  console.log(tool.dangerous)

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
          <div className="flex justify-center flex-col items-center">
            <img className="w-64 h-48 p-2 rounded-2xl" src={tool.imageurl} />
            <h1 className="text-3xl font-bold ">{tool.name}</h1>
            <p>{tool.description}</p>

            {tool.dangerous ? <DangerWarning text="Potentially dangerous tool, use caution" /> : ''}

            <form action="POST" className="flex justify-center flex-col items-center mt-4">
            <label>Start date:</label>
            <input type="date" name="start" min="2023-01-01" max="2024-12-31" className="border-2 border-gray-300 rounded-lg p-2" />
            <label>End date:</label>
            <input type="date" name="end" min="2023-01-01" max="2024-12-31" className="border-2 border-gray-300 rounded-lg p-2" />
            <input type="submit" value="book" className="cursor-pointer group shadow-lg h-10 max-w-fit px-5 m-2 rounded-full transition-colors duration-500 ease-in-out text-ghost-white bg-plum hover:delay-50  hover:bg-robin-egg-blue  hover:text-eerie-black  focus:outline-none font-medium text-xl md:text-2xl w-50 md:w-80 text-center "/>
            </form>         
          </div>
      )}
    </div>
  );
}
