import React, { useState } from 'react'
import InputField from './form-controls/InputField'
import SelectField from './form-controls/SelectField'
import TextAreaField from './form-controls/TextAreaField'
import FormSubmitButton from './form-controls/FormSubmitButton'

let options = [
    {label:'Individual',value:'IN'},
    {label:'Company',value:'COM'},
]

const UserProfile = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    const handleInput = (e) => {

    }
    const handleSelectedOption = (e) => {
        setSelectedOption(e.target.getAttribute('data-value'));      
    }


    return (
        <div className=" min-h-screen bg-secondary-100 flex justify-center md:p-6 p-3 ">
            <form onSubmit={handleFormSubmit}>
                <h4 className="mt-2 font-semibold text-3xl ms-3 mb-5 leading-tight truncate text-primary-900">
                    Profile
                </h4>
                <div className="max-w-screen-xl md:w-[80vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6 mb-6">
                    <div className="md:px-12 px-6">
                        <h4 className="mt-2 font-semibold text-2xl leading-tight truncate text-primary-900">
                            General Information
                        </h4>
                        <div className='grid place-items-center py-12'>
                            <figure className='relative rounded-full w-[12rem] h-[12rem]'>
                                <input type="file" id='user_profile_pic' className='hidden'/>
                                <label htmlFor="user_profile_pic" 
                                className='absolute rounded-full cursor-pointer bottom-3 right-3 w-[40px] h-[40px] text-white bg-primary-600 grid place-items-center'>
                                    <i class="fa-solid fa-plus"></i>
                                </label>
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="asda" className='object-fit rounded-full'/>
                            </figure>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-6 mt-6'>
                            <InputField
                                type={"text"}
                                name={"name"}
                                label={"Name"}
                                onChange={handleInput}
                            />
                            <InputField
                                type={"email"}
                                name={"email"}
                                label={"Email"}
                                onChange={handleInput}
                            />
                        </div>
                        <div className='grid sm:grid-cols-2 gap-6 mt-6'>
                            <InputField
                                type={"text"}
                                name={"contact"}
                                label={"Contact"}
                                onChange={handleInput}
                            />
                        </div>

                    </div>
                </div>
                
                <div className="max-w-screen-xl md:w-[80vw] h-max bg-neutral-200 flex flex-col gap-3 rounded-xl shadow-lg py-6">
                    <div className="md:px-12 px-6">
                        <h4 className="mt-2 font-semibold text-2xl leading-tight truncate text-primary-900 mb-6">
                            Address Information
                        </h4>
                        <InputField
                            type={"text"}
                            name={"pickup_address"}
                            label={"Address"}
                            onChange={handleInput}
                        />
                        <div className='grid sm:grid-cols-2 sm:gap-6'>
                            <InputField
                                type={"text"}
                                name={"city"}
                                label={"City"}
                                onChange={handleInput}
                            />
                            <InputField
                                type={"number"}
                                name={"postal"}
                                label={"Postal Code"}
                                onChange={handleInput}
                            />
                        </div>

                    </div>
                </div>
                <FormSubmitButton label={"Update"} className={"mt-5 ms-3"}/>
            </form>
        </div>
    )
}

export default UserProfile
