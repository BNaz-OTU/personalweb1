import React from 'react'

const Contact = () => {

    const apiKey = process.env.REACT_APP_GET_FORM

    return (
        <div className='flex items-center'>

            <div className='max-w-[1000px] mx-auto flex text-white/70 p-8
                        rounded-lg space-y-8 md:space-y-0 md:space-x-8' id='contact'>

                <div className='bg-white/10 p-6 rounded-xl md:w-screen'>
                    <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let's connect</h2>
                    <p className='text-white/70 mb-6'>Send me a message and lets schedule a call!</p>
                    <form className='space-y-4' action={apiKey} method='POST'>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <input type="text" name="name" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
                                placeholder='First Name' />
                            <input type="text" name="name" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
                                placeholder='Last Name' />
                            <input type="email" name="email" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
                                placeholder='Email' />
                            <input type="phone" name="phone" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
                                placeholder='Phone' />
                        </div>
                        <textarea className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Your Message' />
                        <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact