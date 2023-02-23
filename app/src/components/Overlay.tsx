import React, { useState} from 'react'

export default function Overlay({children}: any) {
    return (
        <div className={'h-[60vh] w-full absolute bg-ghost-white animate-[slideIn_0.5s_ease-in-out]'}>
            {children}
        </div>
    )
}
