import React from 'react'

type ButtonProps = {
    text?: String,
    showicon?: Boolean
}

export default function Button(props: ButtonProps){
  return (
      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-500">
        <div className="flex align-middle justify-center">        
          {props.text}
          {props.showicon == true ? <img src="icons/arrow-right.svg" className="h-9"/>: null}
        </div>
      </button>
  )
}