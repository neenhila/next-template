import { useEffect, useState } from "react"
import { useRouter } from "next/router";
export default function NameProfile() {
    const [username, setUsername] = useState<string | string[]>();
    const router = useRouter();

    useEffect(() => {
        setUsername(router.query.username)
    })
    return <h1>{username ?? "Loading..."}</h1>
}