import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { github, linkedin, xing } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.075)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>About me.</h2>
          <h2 className={styles.sectionSubText}>Hi!👋 I'm Ahmet Saribas</h2>
          <p className="mt-4">
            Full-Stack Web Developer based in Sindelfingen, Stuttgart, Germany.
            My interest in police work as a child led me to the police academy
            after High School. After 4 years of police college I decided to
            study International Security Sciences and Public Administration as a
            double major. During my 8 years of education I acquired a lot of
            soft and technical skills like dedication, discipline, problem
            solving, team management, leadership, office programs, Adobe
            Creative Cloud (we published the school magazine 🚀 ).
          </p>
          <p className="mt-4">
            My interest in technology, and in particular in designing and then
            developing things, goes back to high school. I was in the school
            magazine club and we had a very well-designed club room with the
            best computers in the school. And there we were, about 10 friends,
            and we would create something for the magazine and then design it
            ourselves on the computer.
          </p>
          <p className="mt-4">
            After a short police career due to political unrest in Turkey, I
            decided to change careers and combine my greatest passion of
            creating and designing with web technologies and decided to become a
            freelance web designer. During this time I took many web projects
            from sketch to development and successfully delivered them to my
            clients. I specialised in many no-coding tech applications such as
            Wordpress, Shopify, Webflow, Figma, Adobe. It was definitely
            inevitable that I started playing with HTML and CSS as well. I used
            to make very creative sites about things I liked and host them.
          </p>
          <p className="mt-4">
            I think making such a big change in my life has allowed me to face
            most of my fears and to rebuild my confidence and trust in my
            abilities, which is difficult for someone who is constantly pushing
            themselves to be better. In 2022, after working as an IT field
            engineer at Daimler, I rediscovered how good it feels to build
            programs; to create something from nothing.
          </p>
          <p className="mt-4">
            This last experience is what brings me to this moment, returning to
            my humble beginnings in web development. I've started at the Digital
            Career Institute in 2022 as a full stack web developer student. With
            all the work experience I've gained and the practice I've gained
            from freelancing, I'm now focusing all my energy and knowledge on
            becoming the best web developer I can be, hoping to work in this
            industry for the rest of my professional life.
          </p>
          <p className="mt-4">
            Currently, I'm learning new technologies every day, coding and
            building projects as often as I can, and I'm looking forward to
            gaining work experience in web development related companies.
          </p>
          <h2 className="mt-4 text-[28px] text-center">Reach me!</h2>
          <div className="flex justify-center">
            <a href="https://github.com/herrsaribas">
              <div className="p-5 cursor-pointer">
                <img src={github} className="w-[50px]" />
                <p className="mt-1 text-[12px] text-center">GitHub</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ahmet-saribas-993b231ab/">
              <div className="p-5">
                <img src={linkedin} className="w-[50px]" />
                <p className="mt-1 text-[12px] text-center">LinkedIn</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ahmet-saribas-993b231ab/">
              <div className="p-5">
                <img src={xing} className="w-[50px]" />
                <p className="mt-1 text-[12px] text-center">Xing</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}
      ></div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
