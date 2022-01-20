import React from "react";
import purplePuzzleImg from "../../images/article-purple-puzzle.svg";
import greenPuzzleImg from "../../images/article-green-puzzle.svg";
import unsplashImg from "../../images/unsplash.jpg";
import purpleSemicircleImg from "../../images/purple-semicircle.svg";
import { MainTitle, Subtitle2, Text1 } from "../../ui/controls/typography";
import { Link } from "../../ui/controls";
import styled from "styled-components";
import { Section } from "../../ui/controls/layout";

const ArticleSection = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
`;

const MainTitleArticle = styled.div`
  text-align: center;
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
`;

const PurplePuzzle = styled.img`
  width: 100px;
  height: 96px;
  position: absolute;
  bottom: 0;
  right: 22.5%;
`;

const ArticleBackground = styled.div`
  position: absolute;
  margin-top: 2em;
  background-color: ${(p) => p.theme.colors.backgroundAlt3};
  width: 100%;
  height: 400px;
  z-index: 0;
`;

const GreenPuzzle = styled.img`
  position: absolute;
  width: 10.1%;
  top: -5.5%;
  right: -7.1%;
`;

const Unsplash = styled.img`
  max-width: 1080px;
`;

const PurpleSemicircle = styled.img`
  width: 104px;
  height: 208px;
  margin-top: -10em;
  margin-right: 2em;
  margin-left: 6em;
`;

const ImageBox = styled.div`
  margin-top: 128px;
  position: relative;
`;

const DescriptionCase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin: 32px auto;
  z-index: 1;
  width: calc(1400px - 20%);
`;

const TextBox = styled.div`
  margin: 34px 0;
`;

const LinkBox = styled.div`
  margin: 30px 0;
`;

const ArticlePage: React.FC = () => {
  return (
    <>
      <Section flex mt={4}>
        <MainTitleArticle>
          <MainTitle>
            В Москве открылись пункты для диагностики болезни Альцгеймера и
            других когнитивных изменений
          </MainTitle>
        </MainTitleArticle>
        <Date>14.10.2021</Date>
        <PurplePuzzle src={purplePuzzleImg} alt="." />
      </Section>

      <Section flex centered>
        <ArticleBackground />
        <ImageBox>
          <GreenPuzzle src={greenPuzzleImg} alt="." />
          <Unsplash src={unsplashImg} alt="." />
        </ImageBox>

        <DescriptionCase>
          <PurpleSemicircle src={purpleSemicircleImg} alt="." />
          <Subtitle2 className="article__description">
            1 октября в рамках проекта Деменция.net благотворительного фонда
            «Память поколений» открылись корнеры по ранней диагностике
            когнитивных изменений.
          </Subtitle2>
        </DescriptionCase>
      </Section>

      <ArticleSection>
        <TextBox>
          <Text1>
            На&nbsp;четырех стациях метро Москвы 1&nbsp;октября в&nbsp;рамках
            проекта Деменция.net благотворительного фонда &laquo;Память
            поколений&raquo; открылись корнеры по&nbsp;ранней диагностике
            когнитивных изменений. Об&nbsp;этом сообщает газета ВЗГЛЯД.
            Тестирование, которое сможет пройти любой желающий
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
            того, когнитивные расстройства &laquo;молодеют&raquo; по&nbsp;всему
            миру и&nbsp;обретают формат эпидемии, проблема выходит
            на&nbsp;общенациональный уровень. Корнер на&nbsp;станции
            &laquo;Курская&raquo; официально открыл советский, российский
            участник интеллектуальных игр, бизнесмен и&nbsp;преподаватель
            Александр Абрамович Друзь. Он&nbsp;прошел тест под модерацией
            представителей всероссийского общественного движения (ВОД)
            &laquo;Волонтеры-медики&raquo;, которые являются партнерами проекта.
            Все гости мероприятия смогли пройти тестирование и&nbsp;собственным
            примером продемонстрировать простоту и&nbsp;важность подобных
            исследований. Мероприятие открывает ряд событий, связанных
            с&nbsp;когнитивным здоровьем жителей России&nbsp;&mdash;
            их&nbsp;запускают &laquo;Память поколений&raquo;
            и&nbsp;&laquo;Волонтеры-медики&raquo;: запланировано открытие
            центров в&nbsp;регионах, которые помогут населению сохранить
            когнитивное здоровье, что особенно важно для старшего поколения,
            которое с&nbsp;каждым годом все чаще сталкивается с&nbsp;такими
            серьезными заболеваниями, как деменция и&nbsp;болезнь Альцгеймера.
          </Text1>
        </TextBox>

        <TextBox>
          <Text1>
            Сегодня свыше 2&nbsp;млн человек в&nbsp;России уже столкнулись
            с&nbsp;проблемами памяти, мышления и&nbsp;другими когнитивными
            изменениями, которые являются первыми признаками очень серьезных
            заболеваний. С&nbsp;подобными проблемами порой сталкиваются
            и&nbsp;наши подопечные. По&nbsp;прогнозам, к&nbsp;2030 году более
            1&nbsp;млрд людей по&nbsp;всему миру будут охвачены этими
            заболеваниями и&nbsp;уже не&nbsp;смогут вернуться к&nbsp;прежней
            жизни. Мы&nbsp;нацелены на&nbsp;то, чтобы наши проекты
            по&nbsp;ранней диагностике когнитивных заболеваний были полезны
            не&nbsp;только подопечным нашего фонда, но&nbsp;всем гражданам нашей
            страны. Очень надеемся, что наши корнеры и&nbsp;центры помогут
            справиться с&nbsp;проблемой когнитивного здоровья и&nbsp;улучшат
            ситуацию по&nbsp;стране в&nbsp;целом&raquo;,&nbsp;&mdash; сказала
            исполнительный директор фонда &laquo;Память поколений&raquo;
            Екатерина Круглова. Указывается, что &laquo;Память поколений&raquo;
            существует с&nbsp;2015 года и&nbsp;оказывает высокотехнологичную
            медицинскую помощь ветеранам Великой Отечественной войны
            и&nbsp;других боевых действий, а&nbsp;также развивает активное
            долголетие на&nbsp;территории всей страны. Всего за&nbsp;время
            существования фонд помог почти 16&nbsp;тыс. ветеранов, проживающим
            в&nbsp;различных городах России.
          </Text1>
        </TextBox>
        <LinkBox>
          <Link to="/news-grid.html">Перейти к ленте новостей</Link>
        </LinkBox>
      </ArticleSection>
    </>
  );
};

export default ArticlePage;
