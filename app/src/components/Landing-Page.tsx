import React from 'react'

type LandingProps = {
    heading?: String,
    paragraph?: String
}

export default function Landing({heading, paragraph}: LandingProps) {
  return (
    <div>
    <h1 className="text-2xl font-bold">{heading}</h1>
    <p>{paragraph}</p>
    </div>
  )
}
