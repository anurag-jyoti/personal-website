import BackButton from "@/components/back";
import {Syne} from 'next/font/google';
import {Work_Sans} from 'next/font/google';

const aboutMe = "Hello! I'm Anurag Jyoti, an aspiring engineer with a strong interest in understanding the principles behind how things work. My passion for engineering drives me to tackle real-world problems with innovative solutions, and my curiosity about physics adds a unique perspective to my approach."
const myJourney = "My journey into engineering has been shaped by a desire to solve complex problems and make a tangible impact. While my primary focus is on engineering, I also find inspiration in the principles of physics, which often inform and enrich my projects."
const skills = "I bring a diverse set of skills and expertise to my engineering and programming endeavors, including : ";

const syne = Syne({
    subsets: ['latin'],
  });

  const work = Work_Sans({
    subsets: ['latin'],
    weight: ['500', '600', '700', '800']
  });

const AboutMe = () => {
    return(
        <>
        <BackButton/>
        <main className={`w-full min-h-screen px-4 sm:px-[60px] py-6 sm:py-[50px] bg-slate-100 flex flex-col gap-7 text-black`}>
            <div className="w-full flex flex-col gap-3 sm:gap-7">
                <strong className={`text-2xl sm:text-[25px] font-bold sm:ml-[40px] ${syne.className}`}>About Me</strong>
                <p className={`text-sm sm:text-[15px] font-medium ${work.className}`}>{aboutMe}</p>
            </div>

            <div className="w-full flex flex-col gap-3 sm:gap-5">
                <strong className={`text-2xl sm:text-[25px] font-bold sm:ml-[40px] ${syne.className}`}>My Journey</strong>
                <p className={`text-sm sm:text-[15px] font-medium ${work.className}`}>{myJourney}</p>
            </div>

            <div className="w-full flex flex-col gap-3 sm:gap-5">
                <strong className={`text-2xl sm:text-[25px] font-bold sm:ml-[40px] ${syne.className}`}>Skills and Expertise</strong>
                <p className={`text-sm sm:text-[15px] font-medium ${work.className}`}>{skills}</p>
                <ul className={`text-sm sm:text-[15px] space-y-2 ${work.className} ml-5`}>
                    <li>• <strong>JavaScript</strong> : Experienced in using JavaScript for dynamic web development and interactive features.</li>
                    <li>• <strong>Next.js</strong> : Proficient in building server-rendered React applications with Next.js, optimizing performance and user experience.</li>
                    <li>• <strong>Go</strong> : Currently learning Go to enhance my capabilities in backend development and explore concurrency and performance optimizations.</li>
                    <li>• <strong>Mathematics and Physics</strong> : Strong foundation in [e.g., calculus, electromagnetism], applying these concepts to engineering and programming challenges.</li>
                </ul>
            </div>
        </main>
        </>
    )
};

export default AboutMe;