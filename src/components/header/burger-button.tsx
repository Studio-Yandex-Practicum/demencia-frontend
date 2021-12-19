import styled from "styled-components";
import cursorPointer from "../../images/cursor_pointer.svg";

const StyledBurgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  z-index: 456;
  background-color: transparent;
  border: none;
  cursor: url(${cursorPointer}), pointer;
  padding: 0;
  transition: transform 0.3s linear, opacity 0.5s linear;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1290px) {
    display: flex;
    position: fixed;
    top: 30px;
    right: 25px;
  }

  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }

  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  ${({ isOpen }) =>
    isOpen &&
    `.opened.line1 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    }

    .opened.line2 {
      stroke-dasharray: 1 60;
      stroke-dashoffset: -30;
      stroke-width: 6;
    }

    .opened.line3 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    }`}
`;

interface BurgerButtonProps {
  isOpen: boolean;
  handleBurgerMenuOpen: () => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({
  isOpen,
  handleBurgerMenuOpen,
}) => {
  return (
    <StyledBurgerButton onClick={handleBurgerMenuOpen} isOpen={isOpen}>
      <svg width="60" height="60" viewBox="0 0 100 100">
        <path
          className="line line1 opened"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className="line line2 opened" d="M 20,50 H 80" />
        <path
          className="line line3 opened"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </StyledBurgerButton>
  );
};

export default BurgerButton;
