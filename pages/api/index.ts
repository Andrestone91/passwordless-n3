import { NextApiRequest, NextApiResponse } from "next";
import { } from "lib/firestore"
export default function (req: NextApiRequest, res: NextApiResponse) {
    res.send("api " + process.env.FIREBASE)
}