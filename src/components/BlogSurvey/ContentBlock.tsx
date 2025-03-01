import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface ContentBlockProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  imageFirst?: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  imageUrl = "https://placehold.co/1080x1080/eee/31316a?text=Election+Poll&font=montserrat",
  title = "Engaging Blog Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
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

      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 tracking-tight">
        {title}
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100"
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

export default ContentBlock;
