import React from "react";

interface NewsGridPuzzleProps {
  puzzleImageSource: string;
  newsGridPuzzleClass: string;
}

const NewsGridPuzzle: React.FC<NewsGridPuzzleProps> = ({
  puzzleImageSource,
  newsGridPuzzleClass,
}) => {
  return <img src={puzzleImageSource} className={newsGridPuzzleClass} />;
};

export default NewsGridPuzzle;
