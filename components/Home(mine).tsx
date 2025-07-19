import React from 'react'
import Image from 'next/image'

function Home() {
    return (
        <section id='home' className='m-auto bg-black w-full h-screen grid-cols-1 pt-[12rem] text-gray-100 text-center'>
            <div className='m-auto grid grid-cols-1 gap-[8rem] md:grid-cols-2 md:gap-2'>
                <div className='m-auto'>
                    <h2>Hello, I'm Jesse <br />
                        Fontend Web Developer <br />
                        Based in Jos
                    </h2>
                    <p></p>
                    <button>Hire Me</button>
                </div>
                <div className='m-auto'>
                    <Image src={'/portfolio-profilepic.png'} alt='' width={200} height={200} />
                </div>
            </div>
        </section>
    )
}

export default Home