'use client'

import { Pacifico } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })
import { FiBriefcase, FiFileText, FiHome, FiMessageCircle } from 'react-icons/fi'
import {  IoGlasses } from 'react-icons/io5'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'

const Navbar = () => {
    const pathname = usePathname()

    const active = (currentPath: string) => {
        return pathname == currentPath ? 'bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] text-white' : 'bg-[#E1E8EF] text-black'
    }
    return (
        <>
        <ToastContainer />
            <main>
                <section className="w-full flex justify-between">
                    <h1 className={`text-3xl ${pacifico.className}`}>Pearl <span className='text-orange-500'>Ekwe</span></h1>
                    <div className="theme bg-[#EBF2FA] dark:bg-slate-700 w-10 h-10 rounded-full flex justify-center items-center border-2 border-gray-200 dark:border-gray-500 cursor-pointer" onClick={() => toast.info('Theme is dependent on your system')}>
                        {/* <span className='text-2xl hover:animate-pulse hover:-skew-y-6 transition duration-500 hover:scale-125'>🕶️</span> */}
                        <IoGlasses className='text-2xl hover:animate-pulse hover:-skew-y-6 transition duration-500 hover:scale-125 dark:text-white' />
                        {/* <span className='text-2xl'>👓</span> */}
                    </div>
                </section>

                <nav className="border-2 border-gray-200 dark:border-gray-500 p-5 w-full lg:w-[26rem] flex items-center gap-5 rounded-2xl float-right mt-14">
                    <Link href={'/'} className={`w-96 h-14 dark:bg-slate-700 dark:text-slate-200 rounded-2xl cursor-pointer hover:shadow-lg duration-700 items-center flex flex-col justify-center ${active('/')}`}>
                        <FiHome size={20} />
                        <p className="text-xs capitalize">Home</p>
                    </Link>

                    <Link href={'/skills'} className={`w-96 h-14 dark:bg-slate-700 dark:text-slate-200 rounded-2xl cursor-pointer hover:shadow-lg duration-700 items-center flex flex-col justify-center ${active('/skills')}`}>
                        <FiFileText size={20} />
                        <p className="text-xs capitalize">Skills</p>
                    </Link>

                    <Link href={'/work'} className={`w-96 h-14 dark:bg-slate-700 dark:text-slate-200 rounded-2xl cursor-pointer hover:shadow-lg duration-700 items-center flex flex-col justify-center ${active('/work')}`}>
                        <FiBriefcase size={20} />
                        <p className="text-xs capitalize">Work</p>
                    </Link>

                    <Link href={'/contact'} className={`w-96 h-14 dark:bg-slate-700 dark:text-slate-200 rounded-2xl cursor-pointer hover:shadow-lg duration-700 items-center flex flex-col justify-center ${active('/contact')}`}>
                        <FiMessageCircle size={20} />
                        <p className="text-xs capitalize">Contact</p>
                    </Link>
                </nav>
            </main>
        </>
    )
}

export default Navbar