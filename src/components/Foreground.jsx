import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);

    const cardData = [

        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium. Quo natus odio ipsum asperiores quidem culpa voluptatibus aut.',
            fileSize: '.8mb',
            button: true,
            tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'green'}
        },

        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium. Quo natus odio ipsum asperiores quidem culpa voluptatibus aut.',
            fileSize: '.9mb',
            button: false,
            tag: {isOpen: false, tagTitle: 'Download Now', tagColor: 'blue'}
        },

        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium. Quo natus odio ipsum asperiores quidem culpa voluptatibus aut.',
            fileSize: '.9mb',
            button: true,
            tag: {isOpen: true, tagTitle: 'Upload', tagColor: 'blue'}
        }

    ]
  return (
    <div ref={ref} className='fixed z-[3] h-screen w-full top-0 left-0 flex gap-10 flex-wrap p-5'>
        {cardData.map((val) => (
            <Card data={val} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
