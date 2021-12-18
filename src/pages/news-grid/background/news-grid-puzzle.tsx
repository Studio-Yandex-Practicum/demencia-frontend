interface INewsGridPuzzle {
  puzzleImageSource: string;
  newsGridPuzzleClass: string;
}

const NewsGridPuzzle: React.FC<INewsGridPuzzle> = ({
  puzzleImageSource,
  newsGridPuzzleClass,
}) => {
  return <img src={puzzleImageSource} className={newsGridPuzzleClass} />;
};

export default NewsGridPuzzle;
