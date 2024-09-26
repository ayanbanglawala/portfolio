import React from 'react'

const Card = (props) => {
    return (
        <div className="w-full ml-4 lg:ml-0 lg:w-3/12 px-4 mb-4 mx-0">
            <div className="flex justify-center mb-[-20px]">
                <div
                    className={`w-[50px] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] ${props.shadowColor} ${props.padding} flex justify-center items-center h-[50px] rounded-full bg-[#04071D] border border-[#1E2034] `}
                >
                    <img src={props.imgName} width={'40px'} height={'40px'} alt="" />
                </div>
            </div>
            <div className="w-full bg-[#04071D] border border-[#1E2034] rounded-lg shadow-lg p-6 flex justify-center items-center">
                <h2 className="text-2xl font-bold mb-4 text-white my-3">{props.text}</h2>
                <p className="text-gray-400"></p>
            </div>
        </div>

    )
}

export default Card