import UserForm from "../components/RegisterUser"
import Table from "../components/Table"
import Button from "../components/Button"
import React, { ReactNode, useState } from 'react'

export default function AdminDashboard(){
    const edit = true
    return(
        <section className="flex justify-center align-middle items-center flex-col">
            <h1>Registered users:</h1>
            <Table name="users"/>
            <Button link="/admin/user" text="Create new user"></Button>
        </section>
    )
}