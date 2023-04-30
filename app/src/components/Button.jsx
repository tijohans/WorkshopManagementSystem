import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({link, size, children, showicon, disabled, warning, clickFunction}) {

  const LinkWrapper = (ret) => {
    if (link) {
      return (<Link to={link}>{ret}</Link>)
    } else {
      return ret
    }
  }

  const standardCSS = () => {
    let retsize

    switch (size){
      case "small":
        retsize = "h-10 md:text-xl w-42 md:w-42"
      break

      default:
        retsize = "h-14 md:text-2xl w-42 md:w-60"
      break
    }
    return retsize + " group shadow-lg px-5 m-2 rounded-full transition-colors duration-300 ease-in-out"
  }

  const submit = () => {
    if(!clickFunction) return

    if(!warning) {
      clickFunction()
      return
    }

    if(!confirm('Are you sure you want to do this?\nThis action is non reversible and potentially dangerous.')) return

    clickFunction()
  }

  return (
      LinkWrapper(<button
        disabled={disabled}
        type="button"
        className={warning 
          ? standardCSS() + " text-black bg-yellow-100 hover:border-4 border-spacing-2 border-yellow-300 hover:delay-50  hover:bg-red-200 hover:border-red-400  hover:text-eerie-black  focus:outline-none font-medium text-s md:text-2xl md:w-60 text-center mr-2 mb-2 disabled:bg-slate-400" 
          : standardCSS() + " text-white bg-plum hover:delay-50  hover:bg-ghost-white hover:border hover:border-plum  hover:text-plum  focus:outline-none font-medium text-s text-center mr-2 mb-2 disabled:bg-slate-400" }
        onClick={submit}>
        <div className=" flex align-middle justify-center">
          {children}
          {showicon == true ? <img src="icons/arrow-right.svg" className="h-7 group-hover:invert group-hover:delay-40 duration-500 md:h-9  " /> : null}
        </div>
      </button>)
  )
}