import React from 'react'
import { useNavigate } from 'react-router-dom'

type SmallButtonProps = {
    text?: String,
    showicon?: Boolean,
    toolId: string,
    onClick?: () => void

}

export default function Button(props: SmallButtonProps){
    const navigate = useNavigate()

    const handleClick = () => {
      if (props.onClick) {
        props.onClick()
      }
      navigate(`/tools/${props.toolId}`)
    }

  return (
      <button type="button" 
        className="group shadow-lg h-10 max-w-fit px-5 m-2 rounded-full transition-colors duration-500 ease-in-out text-ghost-white bg-plum hover:delay-50  hover:bg-robin-egg-blue  hover:text-eerie-black  focus:outline-none font-medium text-xl md:text-2xl w-50 md:w-80 text-center mr-2 mb-2"
        onClick={handleClick}>
        <div className="flex align-middle justify-center">        
          {props.text}
          {props.showicon == true ? <img src="icons/arrow-right.svg" className="h-7 group-hover:invert group-hover:delay-40 duration-500 md:h-9  "/>: null}
        </div>
      </button>
  )
}