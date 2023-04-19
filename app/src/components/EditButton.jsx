import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditButton(props) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (props.onClick){
            props.onClcik()
        }
        navigate(`/admin/tool/${props.toolId}`)
    }

  return (
    <button type="button" className="group shadow-lg h-10 max-w-fit px-5 m-2 rounded-full text-ghost-white bg-green-800   w-50 md:w-80 text-center mr-2 mb-2 transition-colors duration-500 ease-in-out hover:delay-50 hover:border hover:border-green-800  hover:text-green-800  hover:bg-white hover:delay-50 focus:outline-none font-normal text-sm md:text-lg " onClick={handleClick}>
    <div>
        {props.text}
    </div>
    </button>
  )
}

