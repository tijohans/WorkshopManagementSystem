import React, { ReactNode, useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import jwt_decode from "jwt-decode";
import axios from "axios";
import ReactLoading from "react-loading";

export default function UserTable() {
    const { token } = useContext(AuthContext);
    const userId = jwt_decode(token).sub;
    const [userBooking, setUserBooking] = useState([]);
    const [toolName, setToolName] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserBooking();
    }, []);

    const getUserBooking = () => {
        axios
            .get(`https://wms-api-ps1s.onrender.com/api/bookings/user/${userId}`, {
                headers: { "x-access-token": token },
            })
            .then((response) => {
                setUserBooking(response.data);
            })
            .catch((error) => console.error("Error: " + error));
    };

    useEffect(() => {
        setLoading(true);

        if (!userBooking)
            return

        const booking = userBooking[0]
        const tool_id = booking?.tool_id

        if(!tool_id)
            return

        
        axios
            .get(`http://localhost:9003/api/tools/${tool_id}`, {
                headers: { "x-access-token": token }
            })
            .then((response) => {
                setToolName(response.data[0]?.name)
                setLoading(false);
            })
            .catch((error) => console.error("Error: " + error));

    }, [userBooking])

    const deleteBooking = async (id) => {
        setLoading(true);
        if (id) {
            await axios
                .delete(`https://wms-api-ps1s.onrender.com/api/bookings/${id}`)
                .then((response) => {
                    console.log(response.data);
                    alert(
                        `booking is now completed, make sure you put the tool where it is supposed to be`
                    );
                    setLoading(false);
                    setUserBooking(userBooking.filter((item) => item.booking_id !== id));
                })
                .catch((error) => console.error("Error: " + error));
        } else {
            console.error("Error: Booking ID is null or undefined");
        }
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center mt-20">
                    <ReactLoading type="spin" color="#9C528B" />
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <h2 className="text-2xl font-bold text-eerie-black flex flex-col justify-center items-center">
                        My bookings
                    </h2>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6">
                        <table className="w-full text-sm text-left text-gray-500  ">
                            <thead className="text-xs text-white uppercase bg-plum ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Tool name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Start time
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        End time
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Change booking
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {userBooking.map((item) => (
                                    <tr className="bg-white border-b hover:bg-ghost-white  ">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                                        >
                                            <td className="px-6 py-4">{toolName}</td>
                                        </th>
                                        <td className="px-6 py-4">{item.booking_date}</td>

                                        <td className="px-6 py-4">{item.booking_start}</td>

                                        <td className="px-6 py-4">{item.booking_end}</td>

                                        <td className="px-6 py-4">
                                            <a
                                                onClick={() => deleteBooking(item.booking_id)}
                                                className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4"
                                            >
                                                Return tool
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}
