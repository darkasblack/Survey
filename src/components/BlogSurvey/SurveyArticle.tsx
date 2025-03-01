import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface SurveyArticleProps {
  title?: string;
  imageUrl?: string;
  content?: string;
  imageFirst?: boolean;
}

const SurveyArticle: React.FC<SurveyArticleProps> = ({
  title = "Occidental Mindoro Congressional Race Heats Up: Nene Sato Leads Early Polls",
  imageUrl = "/src/Images/Congress.png",
  content = "The race for the lone congressional seat of Occidental Mindoro is becoming increasingly competitive, with former Congresswoman Nene Sato currently leading the pack. A survey conducted from February 15-22, 2025, in the municipalities of Mamburao, Sta. Cruz, Sablayan, Paluan, and Abra de Ilog shows Sato with a commanding 54% of the vote, ahead of the incumbent Congressman Odie Tarriela, who trails with 42%. Four percent of respondents remain undecided.\n\nThis political showdown sees two prominent leaders vying for the seat: Sato, with her long-standing track record in public service, and Tarriela, who is seeking a second term. The final decision will be made on May 12, 2025, but if the election were held today, the results in the MAPSA area might already favor Sato.\n\nSato, who made headlines after her loss in the 2022 gubernatorial race to Governor Ed Gadiano, is making a strong comeback. Her grassroots approach has resonated with the local population, helping her build a substantial lead over Tarriela, who is facing challenges amid recent controversies. Notably, the survey did not include the municipalities of Looc and Lubang, where Tarriela hails from, which could potentially impact his numbers.\n\nThe incumbent congressman's stance against the impeachment of Vice President Sara Duterte has drawn criticism, further hurting his popularity. Additionally, rumors of irregularities in the distribution of government financial aid have added fuel to the fire, particularly in more remote areas.\n\nDespite trailing, Tarriela still has time to make adjustments, but with Sato gaining momentum, the battle for Occidental Mindoro's congressional seat promises to be a tense one, with Sato likely to push hard for a strong finish come May 12, 2025.",
  imageFirst = true,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const paragraphs = content.split("\n\n");

  const ImageSection = (
    <motion.div
      className="w-full h-auto overflow-hidden bg-gray-100 rounded-xl shadow-md group"
      variants={imageVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Philippine flag colors accent */}
      <div className="flex h-2">
        <div className="w-1/3 bg-blue-600"></div>
        <div className="w-1/3 bg-red-600"></div>
        <div className="w-1/3 bg-yellow-400"></div>
      </div>
    </motion.div>
  );

  const TextSection = (
    <motion.div
      className="w-full px-6 py-12 md:px-12 lg:px-16 bg-white flex flex-col justify-center"
      variants={textVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="mb-4 inline-block">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mr-2">
          Election 2025
        </span>
        <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
          Poll Survey
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 tracking-tight">
        {title}
      </h2>

      <div className="text-gray-600 leading-relaxed space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 mb-16"
    >
      {imageFirst ? (
        <>
          <div className="w-full md:w-1/2">{ImageSection}</div>
          <div className="w-full md:w-1/2">{TextSection}</div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 order-2 md:order-1">
            {TextSection}
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            {ImageSection}
          </div>
        </>
      )}
    </div>
  );
};

export default SurveyArticle;
