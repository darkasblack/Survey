import React from "react";
import { motion } from "framer-motion";
import ContentContainer from "./BlogSurvey/ContentContainer";

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

  // Sample content items for the election poll survey
  const contentItems = [
    {
      id: "1",
      title: "Senatorial Candidates",
      description:
        "The 2025 Philippine senatorial election will be crucial for legislative direction. Candidates for this position will shape national policies and laws.",
      imageUrl:
        "https://placehold.co/1080x1080/eee/31316a?text=Senatorial+Candidates&font=montserrat",
      imageFirst: true,
    },
    {
      id: "2",
      title: "Gubernatorial Candidates",
      description:
        "Provincial leadership is vital for regional development. Gubernatorial candidates will oversee provincial budgets, infrastructure projects, and local economic initiatives.",
      imageUrl:
        "https://placehold.co/1080x1080/eee/b91c1c?text=Gubernatorial+Candidates&font=montserrat",
      imageFirst: false,
    },
    {
      id: "3",
      title: "Mayoral Candidates",
      description:
        "Local governance directly impacts daily life in your community. Mayoral candidates will manage city/municipal services, local development projects, and community programs.",
      imageUrl:
        "https://placehold.co/1080x1080/eee/ca8a04?text=Mayoral+Candidates&font=montserrat",
      imageFirst: true,
    },
    {
      id: "4",
      title: "Vice Presidential Candidates",
      description:
        "The Vice President serves as the second-highest executive official and can take over presidential duties when necessary. These candidates will support the administration's agenda.",
      imageUrl:
        "https://placehold.co/1080x1080/eee/047857?text=Vice+Presidential+Candidates&font=montserrat",
      imageFirst: false,
    },
    {
      id: "5",
      title: "Congressional Representatives",
      description:
        "Members of the House of Representatives draft and vote on legislation while representing their specific districts and constituents' interests.",
      imageUrl:
        "https://placehold.co/1080x1080/eee/7e22ce?text=Congressional+Representatives&font=montserrat",
      imageFirst: true,
    },
    {
      id: "6",
      title: "Vice Gubernatorial Candidates",
      description:
        "Vice Governors assist the governor in provincial administration and preside over the provincial board, playing a key role in local legislation.",
      imageUrl:
        "https://placehold.co/1080x1080/eee/0369a1?text=Vice+Gubernatorial+Candidates&font=montserrat",
      imageFirst: false,
    },
    {
      id: "7",
      title: "Vice Mayoral Candidates",
      description:
        "Vice Mayors support the mayor's initiatives and preside over the city/municipal council, helping shape local ordinances and regulations.",
      imageUrl:
        "https://placehold.co/1080x1080/eee/a16207?text=Vice+Mayoral+Candidates&font=montserrat",
      imageFirst: true,
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <ContentContainer items={contentItems} />
    </motion.div>
  );
};

export default Home;
