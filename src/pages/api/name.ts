import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    name: string,
}
export async function getName() {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";


    let response = await axios.get("https://api.publicapis.org/entries");
    return response.data.entries[1]["API"];
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const data = await getName();

    res.status(200).send(data)
}
