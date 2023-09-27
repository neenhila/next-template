import { useParams } from "next/navigation"

export default function NameProfile() {
    const params = useParams()
    return <h1>{params ? params.name ? params.name : "Loading..." : "Loading..."}</h1>
}