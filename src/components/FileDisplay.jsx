import React from "react";

export default function FileDisplay(props) {
    const { handleAudioReset, file, audioStream } = props;
    
    return (
        <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 w-72 max-w-full mx-auto'>
            <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
                <span className="text-blue-400 bold">Your</span>
                &nbsp;
                file
            </h1>
            <div className="flex flex-col text-left my-4">
                <h3 className="font-semibold">Name</h3>
                <p>{file? file.name: "Custom Audio"}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
                <button onClick={handleAudioReset} className="text-slate-400 cursor-pointer hover:text-blue-600 duration-200 flex items-center gap-2">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <p>Reset</p>
                </button>
                <button className="specialBtn px-4 py-2 rounded-lg text-blue-400 cursor-pointer flex items-center gap-2">
                    <i className="fa-solid fa-pen-nib"></i>
                    <p>Transcribe</p>
                </button>
            </div>
        </main>
    )
}