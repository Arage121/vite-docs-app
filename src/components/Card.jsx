import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({data, reference}) => {
  return (
    <motion.div
     drag dragConstraints={reference}
     whileDrag={{scale: 1.1}} whileTap={{cursor: 'grabbing'}}
     dragElastic={0.2}  dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
     className='relative h-72 w-60 bg-white rounded-[30px] text-zinc-800 px-8 py-10 overflow-hidden flex-shrink-0'
     >
        <FaFileAlt />
        <p className='text-xs mt-6'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-1 mb-5'>
                <h5 className='text-sm'>{data.fileSize}</h5>
                <span className='w-6 h-6 rounded-full shadow-md drop-shadow-sm flex items-center justify-center'>
                   {data.button ? <LuDownload size='.9em'/> : <IoMdClose />}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor==='green'?'bg-green-500':'bg-blue-500'} text-white flex items-center justify-center`}>
                   <h3 className='text-sm tracking-wide '>{data.tag.tagTitle}</h3>
                </div>
            )}
            
        </div>
    </motion.div>
  )
}

export default Card
