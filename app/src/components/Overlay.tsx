import React, { useState} from 'react'

export default function Overlay() {
    return (
        <nav className={'h-[60vh] w-full absolute bg-ghost-white animate-[slideIn_0.5s_ease-in-out]'}>
            <p>I'm an overlay</p>
        </nav>
    )
}
