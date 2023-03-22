

export default function InfoSection() {
    return (
        <div className='flex flex-col items-center mx-auto w-[80vw] md:flex-row md:justify-evenly [&>*]:m-6'>
            <section className='flex flex-col max-w-[35ch]'>
                <h2 className='text-xl font-bold'>View</h2>
                <p>With our workshop management system, you can easily view a comprehensive list of available tools and their specifications, enabling you to make informed decisions based on your project's requirements.</p>
            </section>

            <section className='flex flex-col max-w-[35ch]'>
                <h2 className='text-xl font-bold'>Book</h2>
                <p>Our system provides a hassle-free booking process, allowing you to quickly reserve the tools you need with just a few clicks. You can also keep track of your booking history and be notified when your requested tool is available for pick-up.</p>
            </section>

            <section className='flex flex-col max-w-[35ch]'>
                <h2 className='text-xl font-bold'>Request</h2>
                <p>We understand that every workshop has unique requirements, which is why we offer a tool request feature. With this feature, you can request new tools to be added to the inventory, ensuring that the workshop stays up-to-date with the latest industry trends and technologies.</p>
            </section>
        </div>
    ) 
}
