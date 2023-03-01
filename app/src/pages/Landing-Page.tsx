import React from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'

type LandingProps = {
    heading?: String,
    paragraph?: String
}

export default function Landing({heading, paragraph}: LandingProps) {
  return (
<body className="bg-ghost-white h-screen">
    <div className="grid grid-cols-2 gap-30 m-0 h-[30vh]">
        {/* <div> */}
      <h1 className="text-4xl font-bold m-5">{heading}</h1>
      <img src="/WMS_image_logo.svg" alt="logo" className="col-span-1 justify-self-end md:hidden" />
      <img src="/wms_logo.svg" alt="logo" className="hidden md:block h-28 justify-self-center self-center row-span-2" />
      
      {/* </div> */}
      <p className="text-lg w-80 font-bold m-5">{paragraph}</p>

    <Button text="Start booking" showicon={true}/>
     </div>
    

    
     </body>

    
  )
}
