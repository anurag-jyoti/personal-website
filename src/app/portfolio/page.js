import BackButton from "@/components/back";
import Card from "@/components/project_card";
import img1 from './assets/cap1.png';
import {DM_Sans} from 'next/font/google';
import {Montserrat} from 'next/font/google';


const dm = DM_Sans({
    subsets: ['latin'],
  });

const montserrat = Montserrat({
    subsets: ['latin'],
  });


const Portfolio = () => {
    return(
        <>
        <BackButton/>
        <main className="w-full h-full flex flex-col bg-white">

            <div className="w-full h-[60px] shrink-0 bg-gray-300 flex items-center justify-center">
                <span className={`text-[20px] font-extrabold ${dm.className}`}>Skills & Expertise</span>
            </div>
            {/* Technical Skills */}
            <div className={`w-full h-auto flex flex-col md:flex-row gap-3 py-5 ${montserrat.className}`}>
                <div className="h-full w-full md:w-1/2 pl-4 py-4">
                    <div className="mb-3"> <strong className="text-xl">Technical Skills -</strong></div>
                    <strong className="ml-4">Web Development</strong>
                    <div className="text-md px-5 py-3">
                        <p><strong>• HTML & CSS:</strong> Skilled in creating and styling responsive web pages.</p>
                        <p><strong>• Next.js:</strong> Know how to build web apps with SSR and SSG.</p>
                        <p><strong>• JavaScript:</strong> Proficient in writing dynamic scripts and handling user interactions.</p>
                    </div>
                    <strong className="ml-4">Backend Development</strong>
                    <div className="text-md px-5 py-3">
                        <p><strong>• Go:</strong> Learning to build efficient and scalable applications with Go.</p>
                        <p><strong>• Node.js:</strong> Knowledgeable in developing server-side applications and APIs.</p>
                    </div>
                </div>

            {/* Personal Skills */}
                <div className="h-full w-full md:w-1/2 pl-4 py-3">
                <strong className="text-xl">Professional Skills -</strong>
                    <div className="text-md px-5 py-3">
                        <p><strong>• Project Management:</strong> Able to organize and manage academic projects efficiently.</p>
                        <p><strong>• Problem-Solving:</strong> Skilled at tackling engineering problems and finding practical solutions.</p>
                        <p><strong>• Adaptability:</strong> Quick to learn and adapt to new tools and technologies.</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-[60px] shrink-0 bg-gray-300 flex items-center justify-center">
                <span className={`text-[20px] font-extrabold ${dm.className}`}>Featured Projects</span>
            </div>

            <div className="w-full h-auto flex items-center justify-center sm:justify-start py-3 px-3">
                <div className="flex flex-col items-center">
                    <Card img={img1} desc="A personal portfolio built using Next.js" link='/' />
                </div>
            </div>
             
        </main>
        </>
    )
};

export default Portfolio;