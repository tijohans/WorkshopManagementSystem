import React from 'react'

type LandingProps = {
    heading?: String,
    paragraph?: String
}

export default function Landing({heading, paragraph}: LandingProps) {
  return (
    <div className="grid grid-cols-2 gap-30 m-0">
      {/* <div> */}
    <h1 className="text-4xl font-bold m-5">{heading}</h1>
    <img src="../../public/WMS_image_logo.svg" alt="logo" className="col-span-1 justify-self-end" />
    {/* </div> */}
    <p className="text-lg w-80 font-bold m-5">{paragraph}</p>
    </div>
  )
}