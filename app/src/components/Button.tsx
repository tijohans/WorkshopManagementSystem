import React from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
    text?: String,
    showicon?: Boolean
    function?: any
    link?: string
}

export default function Button(props: ButtonProps){
  if (props.link){
    return <Link to={props.link}><button 
        type="button" 
        className=" w-40 group shadow-lg h-14  px-5 m-2 rounded-full transition-colors duration-300 ease-in-out  text-ghost-white bg-plum hover:delay-50  hover:bg-robin-egg-blue  hover:text-eerie-black  focus:outline-none font-medium text-s md:text-2xl w-50 md:w-60 text-center mr-2 mb-2"> 
        <div className="flex align-middle justify-center">        
          {props.text}
          {props.showicon == true ? <img src="icons/arrow-right.svg" className="h-7 group-hover:invert group-hover:delay-40 duration-500 md:h-9  "/>: null} 
        </div>
      </button></Link>
  } else
  return (
      <button 
        type="button" 
        className="w-40 group shadow-lg h-14  px-5 m-2 rounded-full transition-colors duration-300 ease-in-out  text-ghost-white bg-plum hover:delay-50  hover:bg-robin-egg-blue  hover:text-eerie-black  focus:outline-none font-medium text-s md:text-2xl w-50 md:w-60 text-center mr-2 mb-2"
        >
        <div className="flex align-middle justify-center">        
          {props.text}
          {props.showicon == true ? <img src="icons/arrow-right.svg" className="h-7 group-hover:invert group-hover:delay-40 duration-500 md:h-9  "/>: null}
        </div>
      </button>
  )
}