import Button from '../components/Button'
import Table from '../components/Table'

type LandingProps = {
  heading?: String,
  paragraph?: String
}

export default function Landing({ heading, paragraph }: LandingProps) {
  return (
    <body className="bg-ghost-white h-screen">
      <div className="grid grid-cols-2 gap-30 m-0">
        {/* <div> */}
        <h1 className="text-4xl font-bold m-5">{heading}</h1> 

        <img src="/WMS_image_logo.svg" alt="logo" className="col-span-1 justify-self-end md:hidden" />
        <img src="/wms_logo.svg" alt="logo" className="hidden md:block h-28 justify-self-center self-center row-span-2" />
        {/* </div> */}
        <p className="text-lg max-w-full font-bold m-5">{paragraph}</p>

        <Button text="Start booking" showicon={true} />
      </div>

      <Table name="tools" />
    </body>
  )
}
