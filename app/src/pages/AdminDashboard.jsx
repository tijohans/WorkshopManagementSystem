import UserForm from "../components/RegisterUser"
import Table from "../components/Table"
import Button from "../components/Button"
import React, { useState } from 'react'
import AdminReports from "../components/AdminReports"

export default function AdminDashboard() {
    const [toggleFunc, setToggleFunc] = useState()
    return (
        <>
            <header className="flex flex-col justify-center align-middle items-center">
                <h1 className="text-3xl font-bold text-eerie-black md:text-4xl ">Admin Dashboard</h1>
                
            </header>

            <section className="flex justify-center align-middle items-center flex-col m-2">
            <hr class="w-96 h-px my-3 bg-gray-300 border-0" />
                <Button size="small" clickFunction={() => { setToggleFunc(!toggleFunc) }}>{toggleFunc ? "See users" : "See reports"}</Button>
                <hr class="w-96 h-px my-3 bg-gray-300 border-0" />
            </section>

            {toggleFunc ?
                <section className="flex flex-col justify-center text-center align-middle m-2">
                    <h1 className=" text-2xl md:text-3xl">Reports:</h1>
                    <AdminReports />
                </section>

                :
                <section className="flex justify-center align-middle items-center flex-col m-2">
                    <h1 className=" text-2xl md:text-3xl">Registered users:</h1>
                    <Table name="users" rowsPerPage={15} footerButton={true} footerButtonLink={"/admin/user"} footerButtonText={"Create new user"} />
                </section>
            }




        </>
    )
}