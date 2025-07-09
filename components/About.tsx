import { Luckiest_Guy } from 'next/font/google'
import { FiDroplet, FiDownloadCloud, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi'
import Link from "next/link";
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })

export default function About() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>About Me <span className="text-6xl"></span></h1>
            <p className="mt-4">Are you looking for a reliable writing and editing solution without breaking the bank? Do words often confuse you and give you a headache?
                Does writing make you cry because stringing the words together is always overbearing?
                Do you need help with writing and editing perfect content?
                Does your work schedule make it a little difficult for you to get things done?
                <p>Introducing Pearl and Associates, the virtual assistant who can do it all!
                    We are revolutionary virtual assistants capable of writing and editing content with unparalleled accuracy and speed.</p>
                <p>Forget spending hours trying to perfect your writing or worrying about grammar and punctuation: we are passionate and excellent creative and technical writers who will save you time and effort while ensuring your work is polished and professional.
                    Stay tuned!</p></p>

            <div className="icons flex gap-3 mt-3 lg:hidden">
                <Link href={'https://www.facebook.com/pearl.ekwe777'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiFacebook size={16} className='text-blue-500' />
                </Link>
                <Link href={'https://www.linkedin.com/in/pearl-ekwe-609292210/'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiLinkedin size={16} className='text-sky-500' />
                </Link>
                <Link href={'https://www.instagram.com/p.e.ar.l?igsh=M29nOWppNzY0MHBk'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiInstagram size={16} className='text-indigo-500' />
                </Link>
                <Link href={'https://www.instagram.com/p.e.ar.l?igsh=M29nOWppNzY0MHBk'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiInstagram size={16} className='text-indigo-500' />
                </Link>
            </div>

            <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gray-500 lg:hidden rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                <FiDownloadCloud className='text-white' />
                <Link href={'/PearlCV.pdf'} target="_blank" className="capitalize rounded-full text-sm">Download Resume</Link>
            </button>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl flex items-center gap-2 my-6">What i do</h1>

            <div className="grid lg:grid-cols-2 gap-7">
                <div className="bg-[#ffff] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Grant / Technical Writing</h6>
                    </div>

                    <p className="text-sm">We craft compelling proposals and technical documents that clearly communicate your mission and value, designed to capture funders&apos; attention and secure the resources you need to scale your impact.
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Social Media Management</h6>
                    </div>

                    <p className="text-sm">From strategy to execution, we help you build a consistent, engaging online presence that connects with your audience, strengthens your brand, and drives real growth, without the overwhelm.
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Visual Content</h6>
                    </div>

                    <p className="text-sm">We produce high-quality, eye-catching visuals that tell your story, amplify your message, and stop the scroll—because good design isn&apos;t just beautiful, it&apos;s powerful communication.</p>
                </div>

                <div className="bg-[#ffff] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Creative Writing</h6>
                    </div>

                    <p className="text-sm">Whether it&apos;s brand storytelling, campaign messaging, or meaningful narratives, we turn ideas into words that move people because emotion and authenticity are what truly resonate. </p>
                </div>

                <div className="bg-[#ffff] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Project Management</h6>
                    </div>

                    <p className="text-sm">We bring structure, clarity, and momentum to your vision, delivering projects on time, on budget, and with excellence, so you can focus on what matters most.</p>
                </div>
            </div>
        </main>
    )
}