import BackButton from "@/components/back"
import {Kaushan_Script} from 'next/font/google'

const kaushan = Kaushan_Script({
    subsets: ['latin'],
    weight: ['400']
  })

const Journal = () => {
    return(
        <>
        <BackButton/>
        <main className="w-full sm:h-[calc(100vh-106px)] h-screen bg-gray-300 flex items-center justify-center">
            <div className="w-full h-auto flex flex-col items-center justify-center text-lg sm:text-3xl text-gray-500">
            <p className={`${kaushan.className} mr-[90px]`}>This scroll remaineth blank, awaiting</p>
            <p className={`${kaushan.className} ml-[90px]`}>the quill's return to weave its tale.</p>
            </div>
        </main>
        </>
    )
};

export default Journal;