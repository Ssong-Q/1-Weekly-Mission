/* PC: 1200px 이상
Tablet: 768px 이상 ~ 1199px 이하
Mobile: 375px 이상 ~ 767px 이하 */
import styled from "styled-components";

interface PropsSticky {
  $sticky: string;
}

export const Nav = styled.nav<PropsSticky>`
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  background-color: #edf7ff;
  z-index: 9999;

  ${({ $sticky }) =>
    $sticky === "shared" &&
    `
    position: sticky;
  `}

  ${({ $sticky }) =>
    ($sticky === "/" || $sticky === "folder") &&
    `
    position: static;
  `}
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 192rem;
  height: 9.4rem;
  padding: 0 20rem;

  @media (max-width: 1199px) {
    height: 7rem;
    padding: 0 4rem;
  }
`;
