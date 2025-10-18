import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
    return (
        <div className='w-1/4 bg-white-600 flex flex-col justify-between gap-10  p-10'>
            <div className=''>
                <h4 className='text-4xl uppercase font-bold text-black pb-10 '>Prospective customer segmentation </h4>
                <p className='text-lg text-black font-normal'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.</p>
            </div>
            <div >

            </div>
            <div className=' mb-5  text-black font-normal cursor-pointer hover:underline underline-offset-4'>
                <div className=" left-0 flex pb-5 items-center gap-2">
                    <ArrowUpRight size={'100px'} />
                </div>
            </div>
        </div>
    )
}
 
export default LeftContent