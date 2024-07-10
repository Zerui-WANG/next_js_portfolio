import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo | null;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Who Am{" "}
          <span className="underline decoration-[#F7AB0A]/50 italic">I</span>?
        </h4>
        <p className="text-base">
          Hi, I&apos;m a front-end developer, issued from a Master IKSEM
          (Information Knowledge Systems Engineering & Management) at University
          Panthéon-Sorbonne Paris 1.
        </p>
        <p>
          My current main focus is on building efficient and user-friendly
          interfaces using ReactJS. As a developer, I&apos;m committed to
          constantly learning and growing, both personally and professionally.
        </p>
        <p>
          When I&apos;m not coding, I enjoy boxing 🥊 to maintain a healthy
          lifestyle and playing League of Legends to climb the elo hell.
        </p>

        <p>
          If you&apos;re interested in discussing a project or just want to
          chat, feel free to reach out to me.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
