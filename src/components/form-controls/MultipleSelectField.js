import React, { useState } from 'react'

const MultipleSelectField = ({options}) => {
    const [optionState, setOptionState] = useState("hidden");
    const toggleOptions = (e) => {
        setOptionState(optionState === "hidden" ? "block" : "hidden");
    }

  return (
    
<div className="w-full md:w-1/2 flex flex-col items-center h-64 mx-auto">
    <div className="w-full px-4">
        <div className="flex flex-col items-center relative">
            <div className="w-full  svelte-1l8159u">
                <div className="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
                    <div className="flex flex-auto flex-wrap">
                        <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-700 bg-teal-100 border border-teal-300 gap-1">
                            <div className="text-xs font-normal leading-none max-w-full flex-initial">HTML</div>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        
                        <div className="flex-1">
                            <input placeholder="" className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"/>
                        </div>
                    </div>
                    <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                        <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none" onClick={toggleOptions}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-up w-4 h-4">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={` ${optionState} absolute shadow  top-[100%] bg-white z-40 w-full lef-0 rounded max-h-[300px] overflow-y-auto`}>
                <div className="flex flex-col w-full">
                    <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6  ">Python </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6  ">Javascript </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6  ">Ruby </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6  ">JAVA </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6  ">ASP.Net </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6  ">C++ </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6  ">SQL </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer w-full border-gray-100 rounded-b hover:bg-teal-100">
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                            <div className="w-full items-center flex">
                                <div className="mx-2 leading-6  ">HTML </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MultipleSelectField
