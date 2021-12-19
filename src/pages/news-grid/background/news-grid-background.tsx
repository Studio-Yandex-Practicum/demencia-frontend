import React from "react";

interface NewsGridBackgroundProps {
  newsGridBackgroundClass: string;
}

const NewsGridBackground: React.FC<NewsGridBackgroundProps> = ({
  newsGridBackgroundClass,
}) => {
  return <div className={newsGridBackgroundClass} />;
};

export default NewsGridBackground;
