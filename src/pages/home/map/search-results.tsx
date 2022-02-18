import React from "react";
import styled from "styled-components";
import { Subtitle3, Text2 } from "../../../ui/controls/typography";
import { TextColor } from "../../../ui/types";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { CentersData } from "../../../types/centers";
import { GET_CENTERS } from "../../../gql/query/centers";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
`;

const StyledTitle = styled.div`
  width: 100%;
  padding: 0 0 15px;
  border-bottom: 1px solid #429e84;
  display: flex;
  place-content: center;
`;

const StyledDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #429e84;
  margin: 0;
  padding: 10px;
`;

interface QueryProps {
  query: string;
}

const SearchResults: React.FC<QueryProps> = ({ query }): JSX.Element => {
  const { data, loading, error } = useQuery<CentersData>(GET_CENTERS, {
    fetchPolicy: "cache-first",
    variables: { city: query },
  });

  if (loading) {
    return <Subtitle3 textColor={TextColor.Accent1}>Загрузка...</Subtitle3>;
  }

  if (error) {
    toast.error(`${error}`, { id: "error" });
    return <Text2 textColor={TextColor.Shadow}>Ошибка</Text2>;
  }

  if (!data || !data.centers) {
    toast.error("Не удалось получить адреса офисов", { id: "error" });
    return <Text2 textColor={TextColor.Shadow}>Нет данных</Text2>;
  }

  const centers = data?.centers;

  if (!centers.length) {
    return <Text2 textColor={TextColor.Shadow}>Совпадений не найдено</Text2>;
  }

  const currentCity = centers.find((item) => Object.keys(item.city == query));

  return (
    <StyledWrapper>
      <StyledTitle>
        <Subtitle3 textColor={TextColor.Accent1}>{currentCity?.city}</Subtitle3>
      </StyledTitle>
      {centers.map((center, index) => (
        <StyledDiv key={index}>
          <Text2 textColor={TextColor.Shadow}>{center.address}</Text2>
          <Text2 textColor={TextColor.Shadow}>{center.phoneNo}</Text2>
        </StyledDiv>
      ))}
    </StyledWrapper>
  );
};

export default SearchResults;
