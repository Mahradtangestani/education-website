import React, { useState } from 'react';
import {BsChevronDown} from "react-icons/bs"
import {motion , AnimatePresence} from "framer-motion"


const Accordion = ({ id , title}) => {

    const [activeIndex , setActiveIndex] = useState(null)
    const handleClick = (id)=>{
      setActiveIndex(id === activeIndex ? null : id)
    }

    return (
        <div className='pb-8'>
            <div className='flex items-center justify-between'>
               <div className='sm:text-xl text-base font-bold'>{title}</div>
               <BsChevronDown onClick={()=>handleClick(id)} className={`${id===activeIndex ? "rotate-180" : "rotate-0"} transition-all duration-300 cursor-pointer`}/>
            </div>
            <AnimatePresence>
                {id === activeIndex && (
                    <motion.div
                    initial={{height: 0}}
                    animate={{height: "auto"}}
                    exit={{height: 0}}
                    transition={{duration: 0.3}}
                    style={{overflow:"hidden"}}
                    // className='pt-4'
                    >
                        <p className='text-sm leading-7 text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nobis ad. Quis, sapiente! Voluptates iusto impedit voluptatum. Velit nesciunt explicabo voluptate id adipisci aliquid, mollitia ab autem officia? Eum, aliquam.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Accordion;
