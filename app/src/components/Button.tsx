import React from 'react'

type ButtonProps = {
    text?: String,
    showicon?: Boolean
}

export default function Button(props: ButtonProps) {
  return (
    <button>{props.text}</button>
  )
}
