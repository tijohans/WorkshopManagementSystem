import React from 'react'
import './Button.css';

type ButtonProps = {
    text?: String,
    showicon?: Boolean
}

export default function Button(props: ButtonProps) {
  return (
    <button className="button-2">
      <div className="button-text">{props.text}</div>
      {props.showicon == true ? <div className="button-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>: null}
      </button>
  )
}

// export default function Button(props: ButtonProps) {
//   return (
//     <button className="bg-shark-900 text-shark-50 text-xl font-bold py-2 px-4 rounded-lg font-sans flex p-8">
//       {props.text} 
//       <div className="bg-gradient-to-r from-pelorous-400 to-ripe-lemon-400 flex align-middle justify-center rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
//       </button>
//   )
// }
