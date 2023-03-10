import SmallButton from './SmallButton'
type toolcardProps = {
  id: string,
  src: string,
  alt?: string,
  name: string,
  paragraph: string
}

export default function ToolCard(props: toolcardProps) {
  return (
    <div className='flex flex-col justify-center items-center border-2 h-72 md:flex-row md:w-80 md:h-52'>
      <img className='w-52 h-32 p-2' src={props.src} alt={props.alt} />
      <div className='flex-row'>
      <h1 className='text-3xl font-bold ml-3'>{props.name}</h1>
      <p className='ml-3'>{props.paragraph}</p>
      </div>
      <SmallButton text='view' toolId={props.id} />
    </div>
  )
}

