import Aside from "@/components/Aside"
import Work from "@/components/Work"
import pageanim from '@/animations/pageanim.json'
import dynamic from "next/dynamic"
// import Loader from "@/components/Loader"

const DynamicLoader = dynamic(() => import('@/components/Loader'), { ssr: false })

const page = () => {
    return (
        <main className='w-full flex mt-32 gap-5'>
            <Aside />
            <DynamicLoader animationData={pageanim}>
                <Work />
            </DynamicLoader>
        </main>
    )
}

export default page