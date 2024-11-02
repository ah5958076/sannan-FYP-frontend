import React from 'react'
import Service from './Service'
import useGetServices from '../../hooks/useGetServices'
import InputSearch from '../form-controls/InputSearch'


const ServiceList = () => {
    const services = useGetServices();

    return (
        <div className=' min-h-screen bg-secondary-100 flex flex-col justify-center ' id='serviceList'>
                <InputSearch className={'md:w-[30rem]'} bg={'bg-neutral-100'}/>
            <div className='max-w-screen-xl  grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  place-items-center px-6 py-6'>
                {
                    (services && services.length > 0) ? 
                    services.map((service,index)=>
                       <Service service={service} key={index}/>
                        
                    ) : <h3 className='text-xl'>No data Available</h3>
                }
            </div> 
        </div>
      )
}

export default ServiceList
