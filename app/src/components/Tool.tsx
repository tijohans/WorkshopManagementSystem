import React from 'react'

type toolsPageProps = {
  src: string,
  alt: string,
  name?: string,
  paragraph?: string,
  other?: string,
  otherParagraph?: string
}

export default function Tool(props: toolsPageProps) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <h1>{props.name}</h1>
      <p>{props.paragraph}</p>
      <h2>{props.other}</h2>
      <p>{props.otherParagraph}</p>
    </div>
  )
}
