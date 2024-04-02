import React from 'react';
import { AiOutlineStar, AiOutlineUser} from "react-icons/ai"

const Courses = ({image , category , title , rating , participants , price}) => {
    return (
        <div className='p-2 shadow-lg min-w-[15rem] bg-white rounded-lg'>
            <img src={image} alt="" />
            <div className='mt-2 text-xs text-Teal'>{category}</div>
            <div className='mt-2 text-sm font-bold'>{title}</div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='bg-Solitude p-1 rounded-full'>
                        <AiOutlineUser className='text-Teal'/>
                    </div>
                    <div className='text-sm font-bold'>{participants}</div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='bg-Solitude p-1 rounded-full'>
                        <AiOutlineStar className='text-yellow'/>
                    </div>
                    <div className='text-sm font-bold'>{rating}</div>
                </div>
                <div className='text-sm font-bold'>${price}</div>
            </div>
        </div>
    );
}

export default Courses;
