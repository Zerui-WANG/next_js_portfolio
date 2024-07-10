import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { sanityClient } from "@/sanity";
import { Experience, PageInfo, Skill, Social } from "@/typings";
import { GetStaticProps } from "next";
import Head from "next/head";
import { queryExperience } from "./api/getExperience";
import { queryPageInfo } from "./api/getPageInfo";
import { querySkills } from "./api/getSkills";
import { querySocials } from "./api/getSocials";

type Props = {
  pageInfo: PageInfo | null;
  experiences: Experience[] | null;
  skills: Skill[] | null;
  socials: Social[] | null;
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  socials,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Zerui WANG&apos;s portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="workExperience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo | null = await sanityClient.fetch(queryPageInfo);
  const experiences: Experience[] | null = await sanityClient.fetch(
    queryExperience
  );
  const skills: Skill[] | null = await sanityClient.fetch(querySkills);
  const socials: Social[] | null = await sanityClient.fetch(querySocials);

  const sortedExperinces = experiences?.sort(
    (a, b) => new Date(b.dateEnded).getTime() - new Date(a.dateEnded).getTime()
  );

  return {
    props: {
      pageInfo,
      experiences: sortedExperinces || null,
      skills,
      socials,
    },
    revalidate: 10,
  };
};
