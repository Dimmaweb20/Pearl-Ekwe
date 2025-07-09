import { Luckiest_Guy, Pacifico } from 'next/font/google'
import { FiPocket } from 'react-icons/fi'
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

export default function Resume() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <div className='flex gap-4 items-center'>
                <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>Skills <span className="text-5xl"></span></h1>
                <hr className="w-[50rem]" />
            </div>

            <div className="grid lg:grid-cols-3 gap-5 mt-5">
                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Strategic Communication</h6>
                    </div>

                    <p className="text-sm">We understand that effective communication isn&apos;t just about saying something, it&apos;s about saying the right thing in the right way to the right audience. Whether it&apos;s a donor proposal, a campaign caption, or a client brief, we communicate with clarity, purpose, and strategy. Our work ensures your message doesn&apos;t just land, it inspires action.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Research & Insight Generation</h6>
                    </div>

                    <p className="text-sm">From securing grants to creating social media content that resonates, we dive deep into data, trends, and audience behavior to generate insights that guide meaningful content. We don&apos;t just create, we inform, ensuring every deliverable is backed by context, relevance, and accuracy.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Writing & Storytelling</h6>
                    </div>

                    <p className="text-sm">We blend the precision of technical writing with the emotional pull of creative storytelling. Whether it&apos;s a grant proposal, a project report, or a social impact story, we write with purpose, capturing both logic and heart. Our words don&apos;t just inform; they connect, inspire, and convert.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Visual Thinking</h6>
                    </div>

                    <p className="text-sm">We bring a trained eye for aesthetics and user experience into every visual piece we create, whether it&apos;s a social media graphic or a branded campaign visual. We understand that design is not just about beauty, but about enhancing clarity and amplifying impact.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Content Strategy & Planning</h6>
                    </div>

                    <p className="text-sm">Every piece of content we produce fits into a broader objective. From managing monthly content calendars to designing project timelines, we develop thoughtful, goal-driven plans that ensure consistency, efficiency, and value delivery, without burnout or guesswork.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Digital Literacy & Tool Proficiency</h6>
                    </div>

                    <p className="text-sm">We are well-versed in industry-standard tools like Canva, Meta Business Suite, Google Workspace, Trello, and Microsoft Office, and we quickly adapt to new platforms. This allows us to deliver quality work efficiently and collaboratively, even under pressure.</p>
                </div>

                <div className="bg-[#F2F7FC]  dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Time & Project Management</h6>
                    </div>

                    <p className="text-sm">With a structured, detail-oriented approach, we manage multiple tasks, people, and deadlines without letting quality slip. Whether leading a project, managing content production, or coordinating a campaign, we deliver results on time and within scope.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Audience Awareness & Empathy</h6>
                    </div>

                    <p className="text-sm">We craft communication and content strategies that center on real people. From teenage audiences to technical donors, we shape messaging to resonate with their lived realities, aspirations, and attention spans, making every word, image, or post feel personal and relevant.
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Adaptability & Creative Problem-Solving</h6>
                    </div>

                    <p className="text-sm">Whether adjusting a grant strategy mid-cycle or reworking a social media plan after a platform change, we pivot quickly and with purpose. We see challenges not as roadblocks, but as invitations to innovate, and we always come prepared with solutions.</p>
                </div>


            </div>
        </main>
    )
}