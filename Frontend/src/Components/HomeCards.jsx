import React from 'react'

function HomeCards(props) {
    return (
        <>

            <div className='w-[80%] bg-[#F5F5F5] flex flex-col min-h-[184px] items-center px-4 py-5 rounded-md drop-shadow-[4px_4px_6px_rgba(0,0,0,0.2)] xs:w-[60%] sm:w-[40%] md:w-[25%]'>
                <img className='w-[3rem] ' src={props.data.Image} alt="" />
                <h2 className='text-[#0288d1] font-semibold text-[1.5rem] mb-3'>{props.data.Heading}</h2>
                <p className='text-center'>{props.data.Text}</p>
            </div>

        </>
    )
}

export default HomeCards