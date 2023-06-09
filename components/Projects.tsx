import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[] | null;
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll  snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
            key={i}
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="object-cover w-64 h-64 md:w-44 md:h-w-44 xl:w-90 xl:h-w-90"
            >
              <Image
                src={urlFor(project?.image).url()}
                alt={`${project?.title} project screenshot`}
                width={512}
                height={512}
                className="object-cover w-64 h-64 md:w-44 md:h-w-44 xl:w-90 xl:h-w-90"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>
                <Link href={project?.linkToBuild} className="text-[#F7AB0A]">{project?.title}</Link>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    className="h-10 w-10"
                    src={urlFor(technology?.image).url()}
                    alt={`${technology.title} logo`}
                    width={256}
                    height={256}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
