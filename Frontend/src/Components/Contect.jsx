import React from 'react'

function Contect() {

    return (

        <div className='w-full bg-[var(--orange)] px-4 py-5 text-white'>

            <div className='text-center text-[2rem] font-bold'>
                <h2>Contact</h2>
            </div>

            <div className=' mt-5'>
                <div className='flex flex-col gap-3 items-center'>
                    <div className='bg-white w-[70%] py-3 px-3 rounded-lg  text-center'>
                        <h2 className='text-[var(--orange)] text-[1.2rem] font-bold'>Prof. Joydeep Banerjee</h2>
                        <p className='text-black font-semibold'>+91 9046344681</p>
                    </div>

                    <div className='bg-white w-[70%] py-3 px-3 rounded-lg  text-center'>
                        <h2 className='text-[var(--orange)] text-[1.2rem] font-bold'>Prof. Triloki Nath</h2>
                        <p className='text-black font-semibold'>+91 9135036969</p>
                    </div>

                    <div className='bg-white w-[70%] py-3 px-3 rounded-lg  text-center'>
                        <h2 className='text-[var(--orange)] text-[1.2rem] font-bold'>Prof. Sakya Sarkar</h2>
                        <p className='text-black font-semibold'>+91 7001644610</p>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Contect