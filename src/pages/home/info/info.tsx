import React from "react";
import StartBtn from "../utils/startBtn";
import { test } from "../utils/links";

const Info: React.FC = () => {
  return (
    <section>
      <div>
        <div>
          <h2>О&nbsp;деменции</h2>
          <p>
            Благотворительный Фонд «ПАМЯТЬ ПОКОЛЕНИЙ» - единственная в России
            некоммерческая организация, формирующая новую благотворительную
            традицию по оказанию адресной высокотехнологичной медицинской помощи
            ветеранам всех боевых действий, в которых принимала участие наша
            страна.
          </p>
        </div>
        <div>
          <div>
            <p>
              Деме́нция - стойкое снижение познавательной деятельности с утратой
              ранее усвоенных знаний и практических навыков и затруднением или
              невозможностью приобретения новых.
            </p>
            <span />
            <span />
          </div>
          <img src="./images/decor-puzzle-green.svg" />
        </div>
      </div>
      <div>
        <div>
          <h3>Помоги близким</h3>
          <p> Пройди тест вместе с тем, кому нужна помощь </p>
        </div>
        <div>
          <div>
            <img src="images/old_couple.jpg" />
            <span />
          </div>
          <StartBtn target={test.target} title={test.title} />
        </div>
      </div>
    </section>
  );
};

export default Info;
