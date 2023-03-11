import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { sanityClient } from "@/sanity";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchExperiences } from "@/utils/fetchExperience";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { queryPageInfo } from "./api/getPageInfo";
import { queryExperience } from "./api/getExperience";
import { querySkills } from "./api/getSkills";
import { queryProjects } from "./api/getProjects";
import { querySocials } from "./api/getSocials";

type Props = {
  pageInfo: PageInfo | null;
  experiences: Experience[] | null;
  skills: Skill[] | null;
  projects: Project[] | null;
  socials: Social[] | null;
};

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
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
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // const pageInfo: PageInfo | null = await fetchPageInfo();
  // const experiences: Experience[] | null = await fetchExperiences();
  // const skills: Skill[] | null = await fetchSkills();
  // const projects: Project[] | null = await fetchProjects();
  // const socials: Social[] | null = await fetchSocials();
  
  const pageInfo: PageInfo | null = await sanityClient.fetch(queryPageInfo);
  const experiences: Experience[] | null = await sanityClient.fetch(queryExperience);
  const skills: Skill[] | null = await sanityClient.fetch(querySkills);
  const projects: Project[] | null = await sanityClient.fetch(queryProjects);
  const socials: Social[] | null = await sanityClient.fetch(querySocials);

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
