import React, { useRef } from "react";
import { motion } from "framer-motion";

interface PollArticleProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  imageFirst?: boolean;
}

const PollArticle: React.FC<PollArticleProps> = ({
  imageUrl = "https://placehold.co/1080x1080/eee/31316a?text=Election+Poll&font=montserrat",
  title = "Occidental Mindoro Congressional Race Heats Up",
  description = "The race for the lone congressional seat of Occidental Mindoro is becoming increasingly competitive, with former Congresswoman Nene Sato currently leading the pack.",
  imageFirst = true,
}) => {
  const ref = useRef(null);

  const ImageSection = (
    <div className="w-full h-auto overflow-hidden bg-gray-100 rounded-xl shadow-md group">
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
    </div>
  );

  const TextSection = (
    <div className="w-full px-6 py-12 md:px-12 lg:px-16 bg-white flex flex-col justify-center">
      <div className="mb-4 inline-block">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mr-2">
          Election 2025
        </span>
        <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
          Poll Results
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 tracking-tight">
        {title}
      </h2>

      <div className="text-gray-600 leading-relaxed mb-6 space-y-4">
        {description.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
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

export default PollArticle;
