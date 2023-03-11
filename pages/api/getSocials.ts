import { sanityClient } from "@/sanity";
import { Social } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

export const querySocials = groq`*[_type == "social"]`;

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await sanityClient.fetch(querySocials);

  res.status(200).json({ socials });
}
