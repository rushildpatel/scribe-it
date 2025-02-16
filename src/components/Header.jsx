import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className="font-medium"><span className='text-blue-400 bold'>Scribe</span> it</h1></a>
            <a href="/" className='flex items-center gap-2 cursor-pointer specialBtn px-4 py-2 rounded-lg text-blue-400'>
                <p>New</p>
                <i className="fa-regular fa-square-plus"></i>
            </a>
        </header>
    )
}
