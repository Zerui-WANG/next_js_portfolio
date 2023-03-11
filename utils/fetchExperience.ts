import { Experience } from "@/typings";

export const fetchExperiences = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
    ).then((res) => res.json());

    const experiences: Experience[] = res.experiences;

    return experiences;
  } catch (err) {
    console.error(err);
  }
  return null;
};
