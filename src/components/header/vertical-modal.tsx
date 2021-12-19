import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const modalRootElement = document.querySelector("#modal");

const VerticalModalMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  animation: shadow 0.5s linear;
  z-index: 450;

  ${({ isOpen }) =>
    isOpen &&
    `
    @keyframes shadow {
    0% {opacity: 0;}
    100% {opacity: 1;}
    }
    `}

  .modal__container {
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 120px 0 50px 30px;
    row-gap: 25px;
    background: #ffffff;
    box-shadow: 0px 0px 25px rgb(0 0 0 / 15%);
    position: relative;
    z-index: 451;
  }

  img {
    width: 130px;
    height: 100px;
    margin: 0;
  }

  li {
    margin: 0;
  }

  @media screen and (min-width: 1290px) {
    display: none;
  }
`;

interface VerticalModalProps {
  isOpen: boolean;
  onClick: () => void;
}

const VerticalModal: React.FC<VerticalModalProps> = ({
  isOpen,
  children,
  onClick,
}) => {
  const element = document.createElement("div");

  useEffect(() => {
    modalRootElement?.appendChild(element);

    return () => {
      modalRootElement?.removeChild(element);
    };
  });

  if (isOpen) {
    return createPortal(
      <VerticalModalMenu isOpen={isOpen} onClick={onClick}>
        <div className="modal__container" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </VerticalModalMenu>,
      element
    );
  }

  return null;
};

export default VerticalModal;
