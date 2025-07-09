import Aside from "@/components/Aside"
import Contact from "@/components/Contact"
// import Loader from "@/components/Loader"
import pageanim from '@/animations/pageanim.json'
import dynamic from "next/dynamic"

const DynamicLoader = dynamic(() => import('@/components/Loader'), { ssr: false })

const page = () => {
    return (
        <main className='w-full flex mt-32 gap-5'>
            <Aside />
            <DynamicLoader animationData={pageanim}>
                <Contact />
            </DynamicLoader>

        </main>
    )
}

export default page