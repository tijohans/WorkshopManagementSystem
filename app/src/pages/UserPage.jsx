import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import UserInfo from '../components/UserInfo'

import UserTable from '../components/UserTable'

export default function UserPage() {

    return (
        <>
           <h1 className="flex  md:flex-column justify-center items-center text-4xl md:text-5xl font-bold text-eerie-black mb-20">Account information</h1>
        <div className="md:flex  md:flex-column justify-center items-center md:space-x-16">
           
            <UserInfo />

          
            <UserTable /> {/*Denne UserInfo taggen skal erstattes med Table */}
        </div>

        <p className="italic flex justify-center" >If your account information is incorrect, please contact the page manager. </p>

       
</>

    )
}