import { urlFor } from "@/sanity";
import { Skill } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const SkillBadge = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter transition duration-100 ease-in-out"
      >
        <Image
          src={urlFor(skill?.image).url()}
          alt={`${skill.title} logo`}
          width={256}
          height={256}
        />
      </motion.div>
    </div>
  );
};

export default SkillBadge;
