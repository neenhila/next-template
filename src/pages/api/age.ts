import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'
type ResponseData = {
    age: number,
}

export async function getAge() {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";


    let response = await axios.get("https://api.publicapis.org/entries");
    return response.data.count;
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const data = await getAge();

    res.status(200).send(data)
}