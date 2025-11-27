import React from 'react'

export const AppFooter = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="flex justify-center items-center">
                <p className="text-white pb-8 font-semibold">
                    Zainab © {year}, Made by A2Z Techverse </p>
            </div>
        </>
    )
}
