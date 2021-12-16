import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section>
      <img src="./images/puzzle-white.svg" alt="белый паззл" />
      <div>
        <h2>О&nbsp;фонде</h2>
        <p>
          Благотворительный Фонд «ПАМЯТЬ ПОКОЛЕНИЙ» —&nbsp;единственная
          в&nbsp;России некоммерческая организация, формирующая новую
          благотворительную традицию по&nbsp;оказанию адресной
          высокотехнологичной медицинской помощи ветеранам всех боевых действий,
          в&nbsp;которых принимала участие наша страна.
        </p>
        <Link to="https://pamyatpokoleniy.ru/">Перейти на сайт фонда</Link>
      </div>
      <img src="./images/memory-image.svg" alt="лого память поколений" />
    </section>
  );
};

export default About;
