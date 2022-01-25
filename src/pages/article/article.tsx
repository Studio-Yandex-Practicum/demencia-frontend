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

  @media (max-width: ${ScreenSize.Small}px) {
    bottom: 3%;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 88px;
    height: 84px;
    bottom: -15%;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    opacity: 0.2;
    bottom: -1%;
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
    width: 10.1%;
    top: 0%;
    right: -1.5%;
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
  @media (max-width: ${ScreenSize.XSmall}px) {
    max-width: 440px;
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
  opacity: 0.8;
  font-size: 34px;
  line-height: 1.1;
  font-weight: 700;
  font-style: normal;
  max-width: 1150px;
  margin: 0;

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
                На&nbsp;четырех стациях метро Москвы 1&nbsp;октября
                в&nbsp;рамках проекта Деменция.net благотворительного фонда
                &laquo;Память поколений&raquo; открылись корнеры по&nbsp;ранней
                диагностике когнитивных изменений. Об&nbsp;этом сообщает газета
                ВЗГЛЯД. Тестирование, которое сможет пройти любой желающий
                на&nbsp;безвозмездной основе, проходит на&nbsp;станциях
                &laquo;Курская&raquo;, &laquo;Маяковская&raquo;,
                &laquo;Тургеневская&raquo;, &laquo;Киевская&raquo; при строгом
                соблюдении мер безопасности&nbsp;&mdash; с&nbsp;соблюдением
                социальной дистанции и&nbsp;в&nbsp;масках.
              </Text1>
            </TextBox>
            <TextBox>
              <Text1>
                Отмечается, что когнитивные изменения практически неизлечимы,
                но&nbsp;их&nbsp;можно предупредить на&nbsp;ранней стадии. Кроме
                того, когнитивные расстройства &laquo;молодеют&raquo;
                по&nbsp;всему миру и&nbsp;обретают формат эпидемии, проблема
                выходит на&nbsp;общенациональный уровень. Корнер на&nbsp;станции
                &laquo;Курская&raquo; официально открыл советский, российский
                участник интеллектуальных игр, бизнесмен и&nbsp;преподаватель
                Александр Абрамович Друзь. Он&nbsp;прошел тест под модерацией
                представителей всероссийского общественного движения (ВОД)
                &laquo;Волонтеры-медики&raquo;, которые являются партнерами
                проекта. Все гости мероприятия смогли пройти тестирование
                и&nbsp;собственным примером продемонстрировать простоту
                и&nbsp;важность подобных исследований. Мероприятие открывает ряд
                событий, связанных с&nbsp;когнитивным здоровьем жителей
                России&nbsp;&mdash; их&nbsp;запускают &laquo;Память
                поколений&raquo; и&nbsp;&laquo;Волонтеры-медики&raquo;:
                запланировано открытие центров в&nbsp;регионах, которые помогут
                населению сохранить когнитивное здоровье, что особенно важно для
                старшего поколения, которое с&nbsp;каждым годом все чаще
                сталкивается с&nbsp;такими серьезными заболеваниями, как
                деменция и&nbsp;болезнь Альцгеймера.
              </Text1>
            </TextBox>
            <TextBox>
              <Text1>
                Сегодня свыше 2&nbsp;млн человек в&nbsp;России уже столкнулись
                с&nbsp;проблемами памяти, мышления и&nbsp;другими когнитивными
                изменениями, которые являются первыми признаками очень серьезных
                заболеваний. С&nbsp;подобными проблемами порой сталкиваются
                и&nbsp;наши подопечные. По&nbsp;прогнозам, к&nbsp;2030 году
                более 1&nbsp;млрд людей по&nbsp;всему миру будут охвачены этими
                заболеваниями и&nbsp;уже не&nbsp;смогут вернуться к&nbsp;прежней
                жизни. Мы&nbsp;нацелены на&nbsp;то, чтобы наши проекты
                по&nbsp;ранней диагностике когнитивных заболеваний были полезны
                не&nbsp;только подопечным нашего фонда, но&nbsp;всем гражданам
                нашей страны. Очень надеемся, что наши корнеры и&nbsp;центры
                помогут справиться с&nbsp;проблемой когнитивного здоровья
                и&nbsp;улучшат ситуацию по&nbsp;стране
                в&nbsp;целом&raquo;,&nbsp;&mdash; сказала исполнительный
                директор фонда &laquo;Память поколений&raquo; Екатерина
                Круглова. Указывается, что &laquo;Память поколений&raquo;
                существует с&nbsp;2015 года и&nbsp;оказывает высокотехнологичную
                медицинскую помощь ветеранам Великой Отечественной войны
                и&nbsp;других боевых действий, а&nbsp;также развивает активное
                долголетие на&nbsp;территории всей страны. Всего за&nbsp;время
                существования фонд помог почти 16&nbsp;тыс. ветеранов,
                проживающим в&nbsp;различных городах России.
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
