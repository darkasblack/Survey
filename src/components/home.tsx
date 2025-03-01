import React from "react";
import { motion } from "framer-motion";
import PollContainer from "./BlogSurvey/PollContainer";

const Home: React.FC = () => {
  // Animation variants for page entry
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <PollContainer />
    </motion.div>
  );
};

export default Home;
