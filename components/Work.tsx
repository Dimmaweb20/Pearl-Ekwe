import { Luckiest_Guy, Pacifico } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiLink2, FiPocket } from 'react-icons/fi'
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })

const Work = () => {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <div className='flex gap-4 items-center'>
                <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>Portfolio <span className="text-5xl"></span></h1>
                <hr className="w-[50rem]" />
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mt-5">
                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/baby.jpg'} width={10000} height={2} alt='Fact App' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://www.linkedin.com/pulse/i-forgot-how-love-her-maternal-care-in-africa-yooef'} target='_blank' className="font-bold text-lg">I Forgot How To Love Her</Link>
                        </div>

                        <Link href={'https://www.linkedin.com/pulse/i-forgot-how-love-her-maternal-care-in-africa-yooef'} target='_blank'></Link>
                    </div>
                </div>


                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/cry.jpg'} width={10000} height={2} alt='nadice' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank' className="font-bold text-lg">Cry Changed Everything</Link>
                        </div>

                        <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank'></Link>
                    </div>
                </div>


                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/mother.jpg'} width={10000} height={2} alt='podpis' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://www.linkedin.com/pulse/when-one-mother-stands-family-rises-maternal-care-in-africa-amgvf'} target='_blank' className="font-bold text-lg">When One Mother Stands, Family Rises</Link>
                        </div>

                        <Link href={'https://www.linkedin.com/pulse/when-one-mother-stands-family-rises-maternal-care-in-africa-amgvf'} target='_blank'></Link>
                    </div>
                </div>
                
                
                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/nexus.jpg'} width={10000} height={2} alt='asu' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://medium.com/p/59fc39579add'} target='_blank' className="font-bold text-lg">The Vital Nexus</Link>
                        </div>

                        <Link href={'https://medium.com/p/59fc39579add'} target='_blank'></Link>
                    </div>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/portfolioimg.jpg'} width={10000} height={2} alt='asu' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://drive.google.com/drive/folders/1nRMilAQFJ_zgBL3blXC_zlWHXZ0T7hJV?usp=sharing'} target='_blank' className="font-bold text-lg">Portfolio</Link>
                        </div>

                        <Link href={'https://drive.google.com/drive/folders/1nRMilAQFJ_zgBL3blXC_zlWHXZ0T7hJV?usp=sharing'} target='_blank'></Link>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Work