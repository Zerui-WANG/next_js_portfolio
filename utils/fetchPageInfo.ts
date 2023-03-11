import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    ).then((res) => res.json());
    const pageInfo: PageInfo = res.pageInfo;

    return pageInfo;
  } catch (err) {
    console.error(err);
  }
  return null;
};
