import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Box, Button } from "../../../../ui/controls";
import { ButtonShape, ButtonType } from "../../../../ui/types";

interface Props {
  pageID: number;
}

const Progress: React.FC<Props> = ({ pageID }) => {
  const pagesArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const location = useLocation().pathname;
  console.log(location);

  const renderDots = () =>
    pagesArray.map((page) => (
      <Box mb={2} key={page}>
        <Button shape={ButtonShape.Circle} type={ButtonType.Alt}>
          {page}
        </Button>
      </Box>
    ));

  return <div>{renderDots()}</div>;
};

export default Progress;
