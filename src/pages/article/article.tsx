import React from "react";
import purplePuzzleImg from "../../images/article-purple-puzzle.svg";
import greenPuzzleImg from "../../images/article-green-puzzle.svg";
import unsplashImg from "../../images/unsplash.jpg";
import purpleSemicircleImg from "../../images/purple-semicircle.svg";
import styled from "styled-components";
import { Text1 } from "../../ui/controls/typography";
import { Link, Box } from "../../ui/controls";
import { Section } from "../../ui/controls/layout";
import { ScreenSize } from "../../ui/types";

const MainTitleArticle = styled.div`
  color: #6d097a;
  text-transform: uppercase;
  font-size: 60px;
  line-height: 1.15;
  font-style: normal;
  font-weight: 600;
  margin: 60px auto;
  text-align: center;
  padding: 0 20px;

  @media (max-width: ${ScreenSize.Large}px) {
    font-size: 42px;
    margin: 45px auto;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 36px;
    margin: 35px auto;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 24px;
    margin: 15px auto;
  }
`;

const Date = styled.p`
  max-width: fit-content;
  color: #5b5b5b;
  font-size: 32px;
  line-height: 2.15;
  font-weight: 600;
  border-top: 3px solid #5b5b5b;
  margin: auto;
  text-align: center;

  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 28px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 18px;
  }
`;

const PurplePuzzle = styled.img`
  width: 100px;
  height: 96px;
  bottom: 0;
  right: 7.5%;
  position: absolute;
  z-index: 2;

  @media (max-width: ${ScreenSize.Small}px) {
    bottom: 3%;
    width: 60px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    visibility: hidden;
  }
`;

const GreenPuzzle = styled.img`
  width: 7.1%;
  height: 9.6%;
  top: 1%;
  right: 8%;
  position: absolute;

  @media (max-width: ${ScreenSize.Large}px) {
    width: 6.1%;
    top: 1%;
    right: 1.5%;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    width: 7.1%;
    top: 0.5%;
    right: -0.5%;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    width: 6.1%;
    top: 0.5%;
    right: 1%;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    top: 1%;
    right: -1%;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    top: -3%;
    right: -4%;
  }
`;

const ArticleBackground = styled.div`
  position: absolute;
  margin-top: 2em;
  background-color: ${(p) => p.theme.colors.backgroundAlt3};
  width: 100%;
  height: 400px;
  z-index: -1;
  padding: 0 32px;
  
  @media (max-width: ${ScreenSize.XXSmall}px) {
    height: 360px;
    
`;

const ArticleItem = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 130px 20px 20px 20px;

  @media (max-width: ${ScreenSize.Large}px) {
    max-width: 1080px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 880px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    max-width: 600px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    padding: 130px 0 20px 0;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    max-width: 300px;
    padding: 50px 8px 8px 0;
  }
`;

const Unsplash = styled.img`
  width: 100%;
`;

const PurpleSemicircle = styled.img`
  width: 10%;
  height: 18%;
  margin-top: -10em;
  margin-right: 2em;
  margin-left: 6em;

  @media (max-width: ${ScreenSize.Large}px) {
    margin-top: -8em;
    margin-right: 2em;
    margin-left: 7em;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    margin-top: -6em;
    margin-left: 5em;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    width: 18%;
    margin-left: 4em;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 2em;
    margin-right: 1em;
    margin-left: 1em;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    margin-top: 1em;
  }
`;

const DescriptionCase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: auto;
  max-width: 1440px;
`;

const DescriptionText = styled.p`
  display: inline-block;
  color: ${(p) => p.theme.colors.textAccent1};
  font-size: 34px;
  line-height: 1.1;
  font-weight: 700;
  font-style: normal;
  max-width: 1150px;
  margin: 32px 0 0 0;

  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 28px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 24px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    margin-top: 0.5em;
    font-size: 16px;
    font-weight: 600;
  }
`;

const TextBox = styled.div`
  margin: 34px 0;
  padding: 0 12px;

  @media (max-width: ${ScreenSize.Medium}px) {
    margin: 24px 0;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 18px 0;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    margin: 14px 0;
  }
`;

const LinkBox = styled.div`
  padding: 34px 0;

  @media (max-width: ${ScreenSize.Medium}px) {
    padding: 24px 0;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    padding: 18px 0;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    padding: 14px 0;
  }
`;

const ArticlePage: React.FC = () => {
  return (
    <>
      <Section flex mt={4}>
        <MainTitleArticle>
          В Москве открылись пункты для диагностики болезни Альцгеймера и других
          когнитивных изменений
        </MainTitleArticle>
        <Date>14.10.2021</Date>
        <PurplePuzzle src={purplePuzzleImg} alt="." />
      </Section>

      <Section flex centered>
        <ArticleBackground />
        <ArticleItem>
          <GreenPuzzle src={greenPuzzleImg} alt="." />
          <Unsplash src={unsplashImg} alt="." />

          <DescriptionCase>
            <PurpleSemicircle src={purpleSemicircleImg} alt="." />
            <DescriptionText>
              1 октября в рамках проекта Деменция.net благотворительного фонда
              «Память поколений» открылись корнеры по ранней диагностике
              когнитивных изменений.
            </DescriptionText>
          </DescriptionCase>

          <Box>
            <TextBox>
              <Text1>
                На четырех стациях метро Москвы 1 октября в рамках проекта
                Деменция.net благотворительного фонда «Память поколений»
                открылись корнеры по ранней диагностике когнитивных изменений.
                Об этом сообщает газета ВЗГЛЯД. Тестирование, которое сможет
                пройти любой желающий на безвозмездной основе, проходит на
                станциях «Курская», «Маяковская», «Тургеневская», «Киевская» при
                строгом соблюдении мер безопасности — с соблюдением социальной
                дистанции и в масках. Отмечается, что когнитивные изменения
                практически неизлечимы, но их можно предупредить на ранней
                стадии. Кроме того, когнитивные расстройства «молодеют» по всему
                миру и обретают формат эпидемии, проблема выходит на
                общенациональный уровень. Корнер на станции «Курская» официально
                открыл советский, российский участник интеллектуальных игр,
                бизнесмен и преподаватель Александр Абрамович Друзь. Он прошел
                тест под модерацией представителей всероссийского общественного
                движения (ВОД) «Волонтеры-медики», которые являются партнерами
                проекта. Все гости мероприятия смогли пройти тестирование и
                собственным примером продемонстрировать простоту и важность
                подобных исследований. Мероприятие открывает ряд событий,
                связанных с когнитивным здоровьем жителей России — их запускают
                «Память поколений» и «Волонтеры-медики»: запланировано открытие
                центров в регионах, которые помогут населению сохранить
                когнитивное здоровье, что особенно важно для старшего поколения,
                которое с каждым годом все чаще сталкивается с такими серьезными
                заболеваниями, как деменция и болезнь Альцгеймера. Сегодня свыше
                2 млн человек в России уже столкнулись с проблемами памяти,
                мышления и другими когнитивными изменениями, которые являются
                первыми признаками очень серьезных заболеваний. С подобными
                проблемами порой сталкиваются и наши подопечные. По прогнозам, к
                2030 году более 1 млрд людей по всему миру будут охвачены этими
                заболеваниями и уже не смогут вернуться к прежней жизни. Мы
                нацелены на то, чтобы наши проекты по ранней диагностике
                когнитивных заболеваний были полезны не только подопечным нашего
                фонда, но всем гражданам нашей страны. Очень надеемся, что наши
                корнеры и центры помогут справиться с проблемой когнитивного
                здоровья и улучшат ситуацию по стране в целом», — сказала
                исполнительный директор фонда «Память поколений» Екатерина
                Круглова. Указывается, что «Память поколений» существует с 2015
                года и оказывает высокотехнологичную медицинскую помощь
                ветеранам Великой Отечественной войны и других боевых действий,
                а также развивает активное долголетие на территории всей страны.
                Всего за время существования фонд помог почти 16 тыс. ветеранов,
                проживающим в различных городах России.
              </Text1>
            </TextBox>
            <LinkBox>
              <Link to="/news-grid">Перейти к ленте новостей</Link>
            </LinkBox>
          </Box>
        </ArticleItem>
      </Section>
    </>
  );
};

export default ArticlePage;
