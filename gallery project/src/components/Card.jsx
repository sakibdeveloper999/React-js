import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div key={props.idx} className="">
                <a href={props.elem.url}>
                    <div className="h-40 w-44 bg-white overflow-hidden rounded-2xl ">
                        <img className='h-full w-full object-cover rounded-2xl' src={props.elem.download_url} alt="" />
                    </div>
                    <h2 className='font-bold text-lg '>{props.elem.author}</h2>
                </a>
            </div>
        </div>
    )
}

export default Card