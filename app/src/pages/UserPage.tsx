import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import UserInfo from '../components/UserInfo'

export default function UserPage() {

    return(
       
<div className="flex flex-col justify-center items-center">
<div className="text-2xl relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-plum rounded-full ">
    <span className="font-medium text-ghost-white ">NN</span>
</div>

<UserInfo />



</div>

    )
}