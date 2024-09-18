import Link from "next/link";

const BackButton = () => {
    return(
        <div className='w-full h-[40px] bg-slate-700 flex items-center px-4 sm:px-[30px] text-white'>
        <Link href='/'>
            <button className='flex flex-row gap-2 sm:gap-[3px] font-semibold'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg></span><span>Back</span>
            </button>
        </Link>
    </div>
    )
};

export default BackButton;