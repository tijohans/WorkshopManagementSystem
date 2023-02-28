import React from 'react'
import Button from './Button'
type toolcardProps = {
  src: string,
  alt: string,
  name?: string,
  paragraph?: string
}

export default function ToolCard(props: toolcardProps) {
  return (
    <div className='flex flex-wrap w-60 justify-center items-center h-72 border-2 md:h-52 md:w-80'>
      <img className='w-52 h-32 ml-3' src={props.src} alt={props.alt} />
      <div>
      <h1 className='text-4xl font-bold ml-3'>{props.name}</h1>
      <p className='ml-3'>{props.paragraph}</p>
      </div>
    </div>
  )
}
