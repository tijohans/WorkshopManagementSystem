import React from 'react'

type LandingProps = {
    heading?: String,
    paragraph?: String
}

export default function Landing({heading, paragraph}: LandingProps) {
  return (
    <div className="flex">
    <h1 className="text-5xl font-bold">{heading}</h1>
    <img src="../../public/WMS_image_logo.svg" alt="logo" className="object-right-top" />
    <p>{paragraph}</p>
    </div>
  )
}
