import React from 'react';
import hero from "../../assets/hero.png"
import { logos } from '../../Data';

const Home = () => {
    return (
        <div className='section' id='home'>
            <div className='md:flex justify-center items-center'>
                <div>
                    <div className='font-bold text-xs text-Teal mb-4'>
                        Your e-learning partner
                    </div>
                    <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
                        This is <br /> the new way <br /> to learn online
                    </div>
                    <p className='text-sm leading-7 text-gray max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam quisquam, earum cumque laborum ipsa!</p>
                    <div className='mt-6'>
                        <button className='px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm'>Get Started</button>
                        <button className='px-6 py-3 border border-solid border-gray rounded-lg text-sm'>Discover</button>
                    </div>
                </div>
                <div className='md:w-[60%]'>
                    <img src={hero} alt="" />
                </div>
            </div>
            <div>
                <p className='text-center text-xl'>We collabrate with <span className='text-Teal'>100+ leading universities and companies</span></p>
                <div className='flex justify-center items-center flex-wrap gap-8 p-2'>
                    {logos.map((logo , index)=>(
                        <div className='w-28' key={index}><img src={logo} alt="" className='w-full object-cover'/></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
