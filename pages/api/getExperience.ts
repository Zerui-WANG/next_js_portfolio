import { Experience } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./../../sanity";

export const queryExperience = groq`
*[_type == 'experience'] {
  ...,
  technologies[]->
}`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(queryExperience);

  res.status(200).json({ experiences });
}
