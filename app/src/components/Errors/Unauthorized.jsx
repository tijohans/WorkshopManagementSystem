import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

export default function Unauthorized() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <div className='[&>*]:m-3'>
            <h1 className='text-4xl font-bold'>401 Unauthorized</h1>
            <p>You do not have access to this site</p>
            <Button text="Login?" link="/login"></Button>
        </div>
    </div>
  )
}
