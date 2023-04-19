import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import UserInfo from '../components/UserInfo'
import CheckList from '../components/CheckList'
import UserTable from '../components/UserTable'
import CourseTable from '../components/CourseTable'

export default function UserPage() {

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