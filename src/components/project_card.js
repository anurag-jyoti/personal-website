'use client'
import styles from './styles.module.css'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


const Card = (props) => {

    const [show, setShow] = useState(false);

    return(
        <>
        <div 
            onMouseLeave={() => setShow(!show)} 
            onMouseEnter={() => setShow(!show)} 
            className="relative w-full max-w-[350px] h-[210px] flex flex-col bg-gray-200 rounded-xl"
        >
            <div className="w-full h-auto pl-3 pt-3 text-md"><span>Personal Portfolio</span></div>
            
            <div className='w-full h-full flex items-center justify-center px-2'>
                <Image className='rounded-lg' src={props.img} alt="Portfolio" width={350} height={350} />
            </div>
           
            <div className={`absolute flex items-center justify-center text-white flex-col gap-3 w-full h-full bg-[#222222] rounded-xl transition-all duration-200 ${ show ? `${styles.cover_show}` : `${styles.cover_hide}`}`}>
                <span>{props.desc}</span>
                <Link href={props.link}><div><button className='w-[100px] h-[40px] bg-white rounded-md text-black font-bold'>Visit</button></div></Link>
            </div>

        </div>
        </>
    )
};

export default Card;