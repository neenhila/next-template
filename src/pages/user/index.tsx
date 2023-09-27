import { useRouter } from "next/router"
import { useEffect } from 'react'
export default function Index() {
    const router = useRouter();
    useEffect(() => {
        router.push("/")
    }, [])

    return <div className="w-screen h-screen flex flex-col justify-center items-center text-red-400">

        Not allowed page!
        <span>Redirecting...</span>
    </div>
}