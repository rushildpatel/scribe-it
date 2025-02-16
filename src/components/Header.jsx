import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <h1><span className='text-blue-400'>Scribe</span> it</h1>
            <button className='flex items-center gap-2 cursor-pointer' onClick={() => alert('Button Clicked!')}>
                <p>New</p>
                <i className="fa-regular fa-square-plus"></i>
            </button>
        </header>
    )
}
