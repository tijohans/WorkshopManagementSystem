import React from 'react'

type buttonrops = {
    text?: String
}

export default function Button(props: buttonrops) {
  return (
    <button>{props.text}</button>
  )
}
