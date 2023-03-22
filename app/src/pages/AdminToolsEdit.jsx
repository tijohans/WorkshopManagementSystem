import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ReactLoading from "react-loading";

const defaultTool = {
  id: "loading",
  name: "name",
  description: "description",
};

export default function AdminToolEdit(props) {
  const [tool, setTool] = useState(defaultTool);
  const [loading, setLoading] = useState(true);

  const [Name, setName] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    {
      props.edit ? getTool(id) : setLoading(false);
    }
  }, []);

  const getTool = (id) => {
    // Setting loading to true when button is clicked
    setLoading(true);

    axios
      .get(`https://wms-api-ps1s.onrender.com/api/tools/${id}`)
      .then((response) => {
        setTool(response.data[0]);
        setName(response.data[0].name);
        setDescription(response.data[0].description);

        // Setting loading to false when request is read
        setLoading(false);
      })
      .catch((error) => console.error("Error: " + error));
  };

  const updateTool = () => {
    console.log("test");
    // nothing
  };

  const deleteTool = async () => {
    setLoading(true);

    await axios
      .delete(`https://wms-api-ps1s.onrender.com/api/tools/${id}`)
      .then((response) => {
        alert(`tool ${response.data[0].name} deleted.`);
        navigate("/tools");
        setLoading(false);
      })
      .catch((error) => console.error("Error: " + error));
  };

  const createTool = () => {
    setLoading(true);

    axios
      .post(`https://wms-api-ps1s.onrender.com/api/tools/`, {
        name: Name,
        description: description,
      })
      .then((response) => {
        console.log(response.data[0]);
        alert(`Tool ${response.data[0].name} created.`);
        // We could navigate directly to the tools edit page here, but this may be confusing
        // navigate(`/admin/tool/${response.data[0].id}`)
        // Chose to direct back to the admins instead to see the updated list.
        navigate("/tool");

        setLoading(false);
      })
      .catch((error) => console.error("Error: " + error));
  };

  return (
    <div>
      {loading ? (
        <ReactLoading type="spin" color="#9C528B" />
      ) : (
        <form className="flex flex-col justify-center items-center mb-16">
          <div>
            {props.edit ? <h1>Edit tool:</h1> : <h1>Create a new tool:</h1>}
          </div>
          <label
            htmlFor="file"
            className="block mb-2 text-sm font-medium text-eerie-black cursor-pointer"
          >
            Upload image here
            <input
              type="file"
              name="file"
              className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5"
              accept="image/png, image/gif, image/jpeg"
            />
          </label>
          <div className="mb-6 w-96">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-eerie-black "
            >
              Name:
            </label>
            <input
              name="name"
              type="text"
              className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5"
              placeholder={props.edit ? tool.name : "Hammer"}
              defaultValue={props.edit ? tool.name : ""}
              required
            />
          </div>
          <div className="mb-6 w-96">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-eerie-black "
            >
              Description
            </label>
            <input
              name="description"
              type="text"
              className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5"
              placeholder={props.edit ? tool.description : "description"}
              defaultValue={props.edit ? tool.description : ""}
              required
            />
            
            <div className="mb-6 w-96">
            <label for="location" className="block mb-2 text-sm font-medium text-eerie-black ">Location:</label>
            <select name="location" id="location" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5">
                <option value="verksted1">verksted1</option>
                <option value="verksted2">verksted2</option>
                <option value="verksted3">verksted3</option>
                <option value="verksted4">verksted4</option>
            </select>
            </div>

            
            <div className="flex justify-center items-center flex-col">
              <label htmlFor="broken">
                <input type="checkbox" name="broken" />
                mark tool as Broken
              </label>

              <label htmlFor="dangerous">
                <input type="checkbox" name="dangerous" />
                mark tool as Dangerous
              </label>

              <label htmlFor="disabled">
                <input type="checkbox" name="disabled" />
                mark tool as Disabled
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Button
              text="Submit"
              clickFunction={props.edit ? updateTool : createTool}
              disabled={loading ? true : false}
            ></Button>
            <Button text="Cancel" link="/tools"></Button>
            {props.edit ? (
              <Button text="Delete Tool" warning={true} clickFunction={deleteTool}></Button>
            ) : null}
          </div>
        </form>
      )}
    </div>
  );
}
