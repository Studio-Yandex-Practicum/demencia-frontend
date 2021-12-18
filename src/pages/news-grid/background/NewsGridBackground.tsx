interface INewsGridBackground {
  newsGridBackgroundClass: string;
}

const NewsGridBackground: React.FC<INewsGridBackground> = ({
  newsGridBackgroundClass,
}) => {
  return <div className={newsGridBackgroundClass} />;
};

export default NewsGridBackground;
