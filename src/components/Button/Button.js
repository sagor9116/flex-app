import React from 'react';

const Button = ({children,type, onClick}) => {
    return (
        <>
            <button
                  className="text-lg font-semibold px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 bg-gray-800 text-white"
                  type={type}
                  onClick = {onClick}
                  style={{ transition: "all .15s ease" }}
                >
                   {children}
                </button>
        </>
    )
}

export default Button;
