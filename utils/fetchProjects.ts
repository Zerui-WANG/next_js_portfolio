import { Project } from "@/typings";

export const fetchProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    ).then((res) => res.json());

    const projects: Project[] = res.projects;

    return projects;
  } catch (err) {
    console.error(err);
  }
  return null;
};
