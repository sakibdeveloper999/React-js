import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
    return (
        <div className='w-1/4 bg-white-600 flex flex-col justify-between py-5 px-10 gap-2 '>
            <div className=''>
                <h4 className='text-4xl font-bold text-black pb-4 tracking-wider'>Prospective customer segmentation </h4>
                <p className='text-sm text-black font-normal'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.</p>
            </div>
            <div >

            </div>
            <div className=' bg-red-500  text-black font-normal cursor-pointer hover:underline underline-offset-4'>
                <div className=" left-0 flex items-center gap-2">
                    <ArrowUpRight size={'80px'} />
                </div>
            </div>
        </div>
    )
}
 
export default LeftContent