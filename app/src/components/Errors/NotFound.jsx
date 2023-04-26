import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <div className='[&>*]:m-3'>
            <h1 className='text-4xl font-bold'>404 Page not found</h1>
            <p>Are you sure this is the site you were trying to access?</p>
            <p>Please check the URL and try again</p>
        </div>
    </div>
  )
}
