import React, { useState, useEffect } from "react";
import Tool from "../components/Tool";
import axios from "axios";
import { useParams } from "react-router-dom";
import SmallButton from '../components/SmallButton';
import Button from '../components/Button'

type ToolType = {
  id: string;
  name: string;
  imageurl: string;
  description: string;
  broken: boolean;
  dangerous: boolean;
};

const defaultTool: ToolType = {
  id: "loading",
  name: "name",
  imageurl: "imageurl",
  description: "description",
  broken: false,
  dangerous: false,
};

export default function ToolPage() {
  const [tool, setTool] = useState<ToolType>(defaultTool);
  const [loading, setLoading] = useState<Boolean>(true);
  let { id } = useParams();

  useEffect(() => {
    getTool(id);
  }, []);

  const getTool = async (id: any) => {
    await axios
      .get(`https://wms-api-ps1s.onrender.com/api/tools/${id}`)
      .then((response) => {
        setLoading(false);
        setTool(response.data[0]);
      })
      .catch((error) => console.error("Error: " + error));
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="flex justify-center flex-col items-center border-2">
            <img className="w-64 h-48 p-2" src={tool.imageurl} />
            <h1 className="text-3xl font-bold ">{tool.name}</h1>
            <p>{tool.description}</p>

            <label>Start date:</label>
            <input type="date" name="start" min="2023-01-01" max="2024-12-31" />
            <label>End date:</label>
            <input type="date" name="end" min="2023-01-01" max="2024-12-31" />
          </div>
        </div>
      )}
    </div>
  );
}
