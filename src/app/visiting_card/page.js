'use client'
import {useState} from 'react';
import BackButton from "@/components/back";
import Image from 'next/image';
import card1 from './assets/1.png';
import card2 from './assets/2.png'
import style from './styles.module.css';
import rotate from './assets/rotate.png'
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'
import github from './assets/github.png'
import Link from 'next/link';




const VisitingCard = () => {

    const [front, setFront] = useState(true);


    return(<>
        <BackButton/>
        <main className="w-full sm:h-screen h-[calc(100vh-146px)] bg-blue-100 sm:px-0 px-6">
            <div className="w-full h-3/4 flex flex-col items-center justify-center">
                <div className={`${style.card}`}>
                    <div className={`${front ? style.flip_front : `${style.flip_back}`}`}>
                        <Image src={front ? card1 : card2} height={300} alt='card' quality={100} />
                    </div>
                </div>
                <button onClick={() => setFront(!front)} className='m-4 p-2 rounded-[100px] border-[2px] border-gray-700'><Image src={rotate} height={32} width={32} /></button>
            </div>
            <div className='w-full h-1/4 flex flex-row items-center justify-center gap-[60px]'>
           
            <Link href='https://www.linkedin.com/in/anurag-jyoti' target='blank'> <Image src={linkedin} height={30} className='cursor-pointer' /> </Link>
            <Link href='https://github.com/AtTheRate-anuragjyoti' target='blank'><Image src={github} height={30} className='mt-1 cursor-pointer' /> </Link>
            <Link href='mailto:anuragjyoti.me@gmail.com' target='blank'><Image src={gmail} height={30} className='mt-2 cursor-pointer' /> </Link>
            
            </div>
        </main>
        </>
    )
};

export default VisitingCard;