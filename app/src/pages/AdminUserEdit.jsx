import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button"
import ReactLoading from 'react-loading'
// !

const defaultUser = {
  id: "loading",
  first_name: "firstname",
  last_name: "lastname",
  email: "email"
};



export default function AdminUserEdit(props) {
  const [user, setUser] = useState(defaultUser);
  const [loading, setLoading] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
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
        setFirstName(response.data[0].first_name)
        setLastName(response.data[0].last_name)
        setEmail(response.data[0].email)
      })
      .catch((error) => console.error("Error: " + error));
  };

  const updateUser = () => {
    axios
    .patch(`https://wms-api-ps1s.onrender.com/api/users/${id}`, {
      first_name: firstName,
      last_name: lastName,
      email: email
    })
    .then((response) => {
      console.log(response.data[0])
      alert(`User ${response.data[0].first_name} updated.`)
      navigate(`/admin/user/${id}`) 
  })}

  const deleteUser = () => {
     axios
    .delete(`https://wms-api-ps1s.onrender.com/api/users/${id}`)
    .then((response) => {
      alert(`User ${response.data[0].first_name} deleted.`)
      navigate("/admin")
    })
    .catch((error) => console.error("Error: " + error));
  }

  const createUser = () => {
     axios
    .post(`https://wms-api-ps1s.onrender.com/api/users/`, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response.data[0])
      alert(`User ${response.data[0].first_name} created.`)
      // We could navigate directly to the user edit page here, but this may be confusing
      // navigate(`/admin/user/${response.data[0].id}`)
      // Chose to direct back to the admins instead to see the updated list.
      navigate("/admin")
    })
    .catch((error) => console.error("Error: " + error));
  }

  return (
    <div>
      {loading ? <ReactLoading type='spin' color='#9C528B'/> : 
        <form className="flex flex-col justify-center items-center mb-16">
          <div>
            {props.edit ? <h1>Edit user:</h1> : <h1>Create a new user:</h1>}
          </div>
          <div className="mb-6 w-96">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-eerie-black">First Name:</label>
            <input name="firstname" type="text" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5" 
            placeholder={props.edit ? firstName : "Navn"} 
            value={firstName}
            onChange={(event)=>setFirstName(event.target.value)}
            required />
          </div>

          <div className="mb-6 w-96">
            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-eerie-black ">Last Name:</label>
            <input name="lastname" type="text" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5" 
            placeholder={props.edit ? lastName : "Navnesen"} 
            value={lastName}
            onChange={(event)=>setLastName(event.target.value)}
            required />
          </div>

          <div className="mb-6 w-96">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Email:</label>
            <input name="email" type="email" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5" 
            placeholder={props.edit ? email : "navn.navnesen@email.no"} 
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            required />
          </div>

          <div className="mb-6 w-96">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-eerie-black ">{props.edit ? "Set new password:" : "Password:"} </label>
            <input name="password" type="password" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5" placeholder=""
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            required />
          </div>

          <div className="flex flex-col justify-center items-center">
            <Button text={props.edit ? "Edit" : "Create User"} clickFunction={props.edit ? updateUser : createUser}></Button>
            <Button text="Cancel" link="/admin"></Button>
            {props.edit ? <Button text="Delete User" warning={true} clickFunction={deleteUser}></Button> : null}
          </div>

        </form>
      }
    </div>
  );
}
