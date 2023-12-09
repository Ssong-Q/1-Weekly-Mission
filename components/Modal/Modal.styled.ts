import styled, { keyframes } from "styled-components";
import closeBtnIMG from "@/public/closebtn.svg";
import facebookShareImg from "@/public/facebook-share.svg";
import kakaoShareImg from "@/public/kakao-share.svg";
import linkShareImg from "@/public/link-share.svg";
import spinnerImg from "@/public/spinner.png";

interface PropsBack {
  $back: string;
  $scrollY: number;
}

interface PropsColor {
  $color: string;
}

interface PropsSnsImg {
  $share: string;
}

const placeholderRotate = keyframes`
  100% {
      transform: rotate(360deg);
  }
`;

export const ModalBackground = styled.div<PropsBack>`
  background-color: ${({ $back }) =>
    $back === "noBG" ? `rgba(0, 0, 0, 0)` : `rgba(0, 0, 0, 0.4)`};
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  position: fixed;
  top: ${({ $scrollY }) => `-${$scrollY}px`};
  left: 0;
  overflow-y: scroll;
`;

export const Spinner = styled.div`
  animation: ${placeholderRotate} 1.5s linear infinite;
  z-index: 9999;
  position: absolute;
  top: 42%;
  left: 46%;
  width: 100px;
  height: 100px;
  background-image: url(${`${spinnerImg}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Container = styled.div`
  width: 35rem;
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: var(--white);
  border: 1px solid var(--gray20);
`;

export const ModalLabel = styled.h1`
  font-size: 2rem;
`;

export const ModalContentName = styled.h1`
  font-size: 1.4rem;
  color: var(--gray20);
  margin-top: -10px;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 20px 15px;
  border-radius: 8px;
  border: 1px solid var(--gray20);

  &::placeholder {
    color: var(--gray20);
  }

  &:focus {
    border: 1px solid var(--primary);
  }
`;

export const ModalBtn = styled.button<PropsColor>`
  width: 100%;
  height: 50px;
  margin-top: -10px;
  text-align: center;
  color: var(--white);
  border-radius: 8px;
  background: ${({ $color }) =>
    $color === "red"
      ? `var(--red)`
      : "linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)"};
`;

export const ModalSnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 35px;
`;

export const ModalSnsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--gray100);
  font-size: 1.1rem;
`;

export const ModalSnsImg = styled.div<PropsSnsImg>`
  background-position: center;
  width: 42px;
  height: 42px;

  ${({ $share }) =>
    $share === "kakao" &&
    `
    background-image: url(${kakaoShareImg});
  `}

  ${({ $share }) =>
    $share === "facebook" &&
    `
    background-image: url(${facebookShareImg});
  `}

  ${({ $share }) =>
    $share === "link" &&
    `
    background-image: url(${linkShareImg});
  `}
`;

export const ModalCloseBtn = styled.div`
  background-image: url(${closeBtnIMG});
  background-position: center;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 160px;
  border: none;
  list-style: none;
  padding-left: 0px;
  overflow-y: scroll;
`;

export const Li = styled.li`
  height: 25%;
  display: flex;
  align-items: center;
  gap: 8px;
`;