import React, { useState, useEffect, useContext } from 'react'
import UserInfo from '../components/UserInfo'
import UserTable from '../components/UserTable'
import CourseTable from '../components/CourseTable'
import { AuthContext } from '../context/authContext'


export default function UserPage() {

    const { token } = useContext(AuthContext)

    return (
        <>
            <h1 className="flex  md:flex-column justify-center  text-4xl md:text-5xl font-bold text-eerie-black mb-20">Account information</h1>
            <div className="md:flex  md:flex-column justify-center  md:space-x-16">

                <UserInfo />

                <div className="flex justify-center top-15">
                    <CourseTable />
                </div>

            </div>
            <div className="md:flex  md:justify-center">
                <UserTable />

            </div>


            <p className="italic flex justify-center mt-20" >If your account information is incorrect, please contact the page manager. </p>
        </>

    )
}