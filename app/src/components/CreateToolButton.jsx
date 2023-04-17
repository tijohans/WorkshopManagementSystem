import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditButton(props) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (props.onClick){
            props.onClcik()
        }
        navigate(`/admin/tool/`)
    }

  return (
    <button type="button" className="group shadow-lg h-10 max-w-fit px-5 m-2 rounded-full text-ghost-white bg-plum  focus:outline-none font-medium text-xl md:text-2xl w-50 md:w-80 text-center mr-2 mb-2" onClick={handleClick}>
    <div>
        {props.text}
    </div>
    </button>
  )
}

