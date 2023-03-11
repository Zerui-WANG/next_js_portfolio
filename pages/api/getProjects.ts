import { Project } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "./../../sanity";

export const queryProjects = groq`
*[_type == 'project'] {
  ...,
  technologies[]->
}`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(queryProjects);
  res.status(200).json({ projects });
}
