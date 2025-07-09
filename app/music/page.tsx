import Aside from "@/components/Aside"
// import Loader from "@/components/Loader"
import musicanim from '@/animations/musicanim.json'
import Music from "@/components/Music"
import dynamic from "next/dynamic"

const DynamicLoader = dynamic(() => import('@/components/Loader'), { ssr: false })

const page = () => {
    return (
        <main className='w-full flex mt-32 gap-5'>
            <Aside />
            <DynamicLoader animationData={musicanim}>
                <Music />
            </DynamicLoader>

        </main>
    )
}

export default page