import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../components/Button"
import ReactLoading from 'react-loading'

const defaultUser = {
  id: "loading",
  first_name: "firstname",
  last_name: "lastname",
  email: "email"
};

export default function AdminUserEdit(props) {
  const [user, setUser] = useState(defaultUser);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    { props.edit ? getUser(id) : setLoading(false) }
  }, []);

  const getUser = async (id) => {
    await axios
      .get(`https://wms-api-ps1s.onrender.com/api/users/${id}`)
      .then((response) => {
        setLoading(false);
        setUser(response.data[0]);
      })
      .catch((error) => console.error("Error: " + error));
  };

  return (
    <div>
      {loading ? <ReactLoading type='spin' color='#9C528B'/> : 
        <form className="flex flex-col justify-center items-center mb-16">
          <div>
            {props.edit ? <h1>Edit user:</h1> : <h1>Create a new user:</h1>}
          </div>
          <div className="mb-6 w-96">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-eerie-black ">First Name:</label>
            <input name="firstname" type="text" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" placeholder={props.edit ? user.first_name : "Kai"} defaultValue={props.edit ? user.first_name : ""} required />
          </div>

          <div className="mb-6 w-96">
            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-eerie-black ">Last Name:</label>
            <input name="lastname" type="text" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" placeholder={props.edit ? user.last_name : "Nordmann"} defaultValue={props.edit ? user.last_name : ""} required />
          </div>

          <div className="mb-6 w-96">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Email:</label>
            <input name="email" type="email" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" placeholder={props.edit ? user.email : "kainordmann@gmales.cx"} defaultValue={props.edit ? user.email : ""} required />
          </div>

          <div className="mb-6 w-96">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-eerie-black ">{props.edit ? "Set new password:" : "Password:"} </label>
            <input name="password" type="password" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" placeholder="" required />
          </div>

          <div className="flex flex-col justify-center items-center">
            <Button text="Submit"></Button>
            <Button text="Cancel" link="/admin"></Button>
            {props.edit ? <Button text="Delete User"></Button> : null}
          </div>

        </form>
      }
    </div>
  );
}
