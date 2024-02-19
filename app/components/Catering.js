import React from 'react'

const Catering = () => {
    return (
        <div className=' w-full'>
            <img className="w-full h-[70vh]" src="images/catering.jpg" />
            <div className='grid grid-cols-12 pt-10 justify-center items-center gap-10'>
                <img src="images/catering1.jpg" className='col-span-6' />
                <div className='col-span-6 flex flex-col justify-center items-center gap-4'>
                    <h3 className='text-2xl text-orange-500 font-semibold'>Catering in Call me Crazy with Easy</h3>
                    <p className='font-medium text-lg'>Incredible food and drink is our passion, so let us bring that fire to your next event. Whether it’s a small, in-home celebration or a full-scale wedding reception, we can help. Our talented event catering team can help you create a menu and meal experience for the books. For more information, contact Amanda Niel at an@easybistro.com</p>
                    <div>
                        <p className='text-base'>+5678676788</p>
                        <p className='text-base'>+5678676788</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Catering