import React from 'react'

type ButtonProps = {
    text?: String,
    showicon?: Boolean
}

export default function Button(props: ButtonProps){
  return (
      <button type="button" className="group shadow-lg h-14 px-5 m-2 rounded-full transition-colors duration-500 ease-in-out  text-ghost-white bg-plum transform hover:delay-50  hover:bg-robin-egg-blue  hover:text-eerie-black  focus:outline-none font-medium text-2xl w-80 py-2.5 text-center mr-2 mb-2">
        <div className="flex align-middle justify-center">        
          {props.text}
          {props.showicon == true ? <img src="icons/arrow-right.svg" className="h-9 group-hover:invert group-hover:delay-40 duration-500  "/>: null}
        </div>
      </button>
  )
}