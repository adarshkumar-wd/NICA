import React from 'react'

function HomeCards(props) {
    return (
        <>

            <div className='w-[80%] bg-[var(--orange)] flex flex-col min-h-[184px] items-center px-4 py-5 rounded-2xl drop-shadow-[4px_4px_6px_rgba(0,0,0,0.2)] xs:w-[60%] sm:w-[40%] md:w-[25%]'>
                <img className='w-[3rem] ' src={props.data.Image} alt="" />
                <h2 className='text-white font-bold text-[1.5rem] mb-2'>{props.data.Heading}</h2>
                <p className='text-center font-semibold text-white'>{props.data.Text}</p>
            </div>

        </>
    )
}

export default HomeCards