import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
  const LinkWrapper = (ret) => {
    if (props.link) {
      return (<Link to={props.link}>{ret}</Link>)
    } else {
      return ret
    }
  }

  const submit = () => {
    if(!props.clickFunction) return

    if(!props.warning) {
      props.clickFunction()
      return
    }

    if(!confirm('Are you sure you want to do this?\nThis action is non reversible and potentially dangerous.')) return

    props.clickFunction()
  }

  return (
      LinkWrapper(<button
        disabled={props.disabled}
        type="button"
        className={props.warning 
          ? "w-40 group shadow-lg h-14  px-5 m-2 rounded-full transition-colors duration-300 ease-in-out  text-black bg-yellow-100 hover:border-4 border-spacing-2 border-yellow-300 hover:delay-50  hover:bg-red-200 hover:border-red-400  hover:text-eerie-black  focus:outline-none font-medium text-s md:text-2xl w-50 md:w-60 text-center mr-2 mb-2 disabled:bg-slate-400" 
          : "w-40 group shadow-lg h-14  px-5 m-2 rounded-full transition-colors duration-300 ease-in-out  text-white bg-plum hover:delay-50  hover:bg-ghost-white hover:border hover:border-plum  hover:text-plum  focus:outline-none font-medium text-s md:text-2xl w-50 md:w-60 text-center mr-2 mb-2 disabled:bg-slate-400"  }
        onClick={submit}>
        <div className=" flex align-middle justify-center">
          {props.text}
          {props.showicon == true ? <img src="icons/arrow-right.svg" className="h-7 group-hover:invert group-hover:delay-40 duration-500 md:h-9  " /> : null}
        </div>
      </button>)
  )
}