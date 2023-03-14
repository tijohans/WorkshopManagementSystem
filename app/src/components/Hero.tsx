import Button from "./Button"

export default function Hero() {
    return (
        <section className='flex flex-col justify-between content-center mx-[5vw] my-12 max-w-full md:flex-row '>
            <aside className='px-4 max-w-3xl [&>*]:pb-6'>
                <h1 className='text-4xl font-bold md:text-5xl md:mb-6'>Workshop Management System</h1>
                <p className='text-xl md:text-2xl'>The place where you can view, find, and book all the tools you need. All from the same web-page</p>
                <Button text='start booking' showicon={true} />
            </aside>
            <img src="/wms_logo.svg" alt="logo" className="hidden md:inline-block max-w-md" />
        </section>
    )
}