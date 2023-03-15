import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import UserInfo from '../components/UserInfo'
import Table from '../components/Table'

export default function UserPage() {

    return (

        <div className="md:flex  md:flex-column justify-center items-center md:space-x-4">
            <UserInfo />
            <UserInfo /> {/*Denne UserInfo taggen skal erstattes med Table */}
        </div>


    )
}