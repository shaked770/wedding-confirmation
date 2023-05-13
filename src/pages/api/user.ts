import { Person } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "@/lib/api/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Person>
) {
  const user = await getUser(req.query.userId as string);
  res.status(200).json(user as Person);
}
