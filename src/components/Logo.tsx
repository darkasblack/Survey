import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = "md", withText = true }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`${sizeClasses[size]} bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 text-white rounded-full flex items-center justify-center font-bold`}
      >
        P
      </div>
      {withText && (
        <span className={`${textSizeClasses[size]} font-medium`}>
          2025 Poll Survey
        </span>
      )}
    </div>
  );
};

export default Logo;
