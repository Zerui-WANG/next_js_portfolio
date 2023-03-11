import { Social } from "@/typings";

export const fetchSocials = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    ).then((res) => res.json());

    const socials: Social[] = res.socials;

    return socials;
  } catch (err) {
    console.error(err);
  }
  return null;
};
