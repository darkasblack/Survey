import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

const Logo: React.FC<LogoProps> = ({ size = "md", variant = "default" }) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  const textColor = variant === "white" ? "text-white" : "text-gray-900";
  const accentColor = variant === "white" ? "text-white" : "text-blue-600";

  return (
    <div className={`flex items-center ${sizeClasses[size]}`}>
      <div className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 p-2 rounded-lg mr-3 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div>
        <h3 className={`font-bold ${textColor} text-lg leading-tight`}>
          2025 Poll <span className={accentColor}>Survey</span>
        </h3>
        <p className="text-xs text-gray-500">Occidental Mindoro</p>
      </div>
    </div>
  );
};

export default Logo;
