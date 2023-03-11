import { Skill } from "@/typings";

export const fetchSkills = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    ).then((res) => res.json());

    const skills: Skill[] = res.skills;

    return skills;
  } catch (err) {
    console.error(err);
  }
  return null;
};
