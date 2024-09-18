import localFont from 'next/font/local';

const suse = localFont({ src: './suse.ttf' })

const Footer = () => {
    return(
        <div className="w-full h-[60px] bg-slate-900 flex items-center justify-center">
            <span className={`text-gray-400 text-sm ${suse.className}`}>© Anurag Jyoti 2024</span>
        </div>
    )
};

export default Footer;