import React from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  title?: string;
  caption?: string;
  backgroundColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Philippines 2025 Election Poll Survey",
  caption = "View information about all candidates running for various positions in the upcoming 2025 Philippine elections",
  backgroundColor = "bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400",
}) => {
  return (
    <motion.header
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 ${backgroundColor} text-white shadow-2xl relative overflow-hidden`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&auto=format&fit=crop')] bg-repeat opacity-20"></div>
      </div>

      {/* Philippine flag colors accent lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
      <div className="absolute top-2 left-0 w-full h-2 bg-red-600"></div>
      <div className="absolute top-4 left-0 w-full h-2 bg-yellow-400"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="inline-block mb-6 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-sm md:text-base font-medium tracking-wider uppercase">
            2025 Candidate Survey
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {caption}
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;
