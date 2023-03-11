import { urlFor } from "@/sanity";
import { Experience } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 2, y: 0 }}
        viewport={{ once: true }}
        className="w-64 h-32 xl:w-[256px] xl:h-[128px] object-cover object-center"
      >
        <Image
          className="w-64 h-32 xl:w-[256px] xl:h-[128px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt={`${experience?.company} logo`}
          width={512}
          height={256}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt={`${technology.title} logo`}
              width={512}
              height={512}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard;
