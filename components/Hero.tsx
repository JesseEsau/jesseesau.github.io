import Image from 'next/image'

function Hero() {
    return (
        <section id='home' className="bg-black py-16 pt-[6rem] md:pt-[10rem] text-white">
            <div className="max-w-8xl mx-auto px-6 flex flex-col md:flex-row md:px-14 lg:px-20 items-center gap-12">

                {/* intro */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white sm:text-2xl md:text-3xl font-bold text-gray-200 mb-4">
                        {`Hello, I'm Jesse`} <br />
                        Fontend Web Developer <br />
                        Based in Jos
                    </h2>
                    <p className="text-gray-200 text-lg">
                        I build responsive, user-friendly websites and web apps using modern tools like React, Next.js, and Tailwind CSS.
                    </p>
                    <button className='bg-green-500 p-3 rounded-md'>Contact Me</button>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Image src={'/portfolio-profilepic.png'} width={250} height={250} alt='profile' className='rounded-full border-4 border-green-500 shadow-2xl shadow-green-500 animate-slowbounce' />
                </div>
            </div>
        </section>
    )
}

export default Hero;