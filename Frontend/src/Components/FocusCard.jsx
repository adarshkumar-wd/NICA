import React from 'react'

function FocusCard(props) {

    return (

        <div className="w-full sm:w-[45%] md:w-[40%] lg:w-[36%] xl:w-[30%] flex gap-2 px-4 items-center">

            <div className=" h-[3rem] w-[3rem]  bg-[var(--orange)]"></div>

            <div className="bg-[var(--grey1)] w-[80%] sm:w-[90%] h-[3rem] flex items-center justify-center px-2 ">
                <p className="tracking-tight font-semibold">{props.item}</p>
            </div>

        </div>

    )
}

export default FocusCard