import {Poppins} from 'next/font/google';
import {Work_Sans} from 'next/font/google';
import para from "./public/about_me";
import me from './public/images/me.jpeg';
import Image from "next/image";
import Link from "next/link";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800']
})

const work = Work_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800']
})


const LandingPage = () => {
  return (
    <main className={`relative w-full h-[calc(100vh-56px)] flex flex-col md:flex-row items-center justify-center`}>
      <div className="w-full h-full bg-[#353638] p-4 md:px-[50px] md:py-[60px] flex items-center justify-center">
        <div className={`w-full h-auto bg-slate-200 rounded-lg flex flex-col md:flex-row items-center shadow-lg shadow-gray-800`}>
         
{/* Text */}

          <div className="w-full h-full flex flex-col px-[20px] py-[30px] gap-5">
            <span className={`text-[32px] lg:ml-[30px] md:text-[40px] text-center md:text-left md:ml-7 font-semibold ${poppins.className}`}>Anurag Jyoti</span>
            <p className={`mx-4 font-semibold text-[14px] lg:text-[16px] md:text-[15px] ${work.className}`}>{para}</p>
            <Link href="/about-me" className="self-center md:self-start">
              <button className={`w-[140px] lg:ml-[30px] h-[50px] border-[2px] border-slate-700 mt-[10px] hover:border-blue-800 hover:text-blue-900 ${work.className}`}>
                Let's Explore
              </button>
            </Link>
          </div>

{/* Image */}

          <Image 
            src={me} 
            alt='Anurag Jyoti' 
            height={100} 
            width={420} 
            className="w-full md:w-auto max-w-[420px] py-[20px] px-[20px] rounded-[25px]" 
          />
        </div>
      </div>
    </main>
  )
};



export default LandingPage;