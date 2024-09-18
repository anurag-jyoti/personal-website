import Link from "next/link";

const BackButton = () => {
    return(
        <div className='w-full h-[40px] bg-slate-700 flex items-center px-4 sm:px-[30px] text-white'>
        <Link href='/'>
            <button className='flex flex-row gap-2 sm:gap-[3px] font-semibold'>
                <span>🡨</span><span>Back</span>
            </button>
        </Link>
    </div>
    )
};

export default BackButton;