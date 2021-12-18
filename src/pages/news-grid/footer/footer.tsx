const Footer: React.FC = () => {
  const currentDate = new Date();
  return (
    <footer className="footer footer_page_news">
      <p className="footer__copyright">
        &copy; {currentDate.getFullYear()} Благотворительный фонд «Память
        поколений»
      </p>
    </footer>
  );
};

export default Footer;
