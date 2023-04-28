import styled, { keyframes } from "styled-components";

const scale1 = keyframes`
  0% {
    transform: scale(0);
  }
  8% {
    transform: scale(1.1);
  }
  15% {
    transform: scale(1);
  }
  82% {
    transform: scale(1);
  }
  90% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`;



 const scale2 = keyframes`
  0% {
    transform: scale(0);
  }
  15% {
    transform: scale(0);
  }
  20% {
    transform: scale(1.1);
  }
  25% {
    transform: scale(1);
  }
  75% {
    transform: scale(1);
  }
  85% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`;



 const scale3 = keyframes`
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(0);
  }
  30% {
    transform: scale(1.1);
  }
  35% {
    transform: scale(1);
  }
  70% {
    transform: scale(1);
  }
  75% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`;



 const scale4 = keyframes`
  0% {
    transform: scale(0);
  }
  30% {
    transform: scale(0);
  }
  35% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
  65% {
    transform: scale(1);
  }
  70% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`;



 const scale5 = keyframes`
  0% {
    transform: scale(0);
  }
  35% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.1);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(1);
  }
  65% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`;



 const scale6 = keyframes`
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(0);
  }
  45% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  55% {
    transform: scale(1);
  }
  60% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`;

export const ImageMain = styled.div`
  width: 285px;
  height: 250px;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 409px;
    height: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 532px;
    height: 468px;
  }
`;

export const HumanImage = styled.div`
  width: 126.48px;
  height: 151.96px;
  position: absolute;
  top: 89.28px;
  left: 35px;
  z-index: 3;

  @media screen and (min-width: 768px) {
    width: 194.48px;
    height: 314.96px;
    top: 89.28px;
    left: 36px;
  }

  @media screen and (min-width: 1440px) {
    width: 265.48px;
    height: 314.96px;
    top: 136.28px;
    left: 35px;
  }
`;

export const FirstImage = styled.div`
  width: 50.68px;
  height: 50.14px;
  position: absolute;
  top: 50.26px;
  left: 89.38px;
  animation: ${scale1} 15000ms infinite 0000ms;

  @media screen and (min-width: 768px) {
    width: 66.68px;
    height: 66.14px;
    top: 65.26px;
    left: 128.38px;
  }

  @media screen and (min-width: 1440px) {
    width: 89.68px;
    height: 91.14px;
    top: 102.26px;
    left: 164.38px;
  }
`;

export const SecondImage = styled.div`
  width: 98.47px;
  height: 33.05px;
  position: absolute;
  top: 46.34px;
  left: 153.08px;
  z-index: 2;
  animation: ${scale2} 15000ms infinite 0000ms;

  @media screen and (min-width: 768px) {
    width: 139.47px;
    height: 45.05px;
    top: 68.34px;
    left: 221.08px;
  }

  @media screen and (min-width: 1440px) {
    width: 174.47px;
    height: 52.05px;
    top: 89.34px;
    left: 289.08px;
  }
`;

export const ThirdImage = styled.div`
  width: 98.47px;
  height: 33.05px;
  position: absolute;
  top: 78.34px;
  left: 153.08px;
  z-index: 2;
  animation: ${scale3} 15000ms infinite 0000ms;

  @media screen and (min-width: 768px) {
    width: 139.47px;
    height: 45.05px;
    top: 113.5px;
    left: 221.08px;
  }

  @media screen and (min-width: 1440px) {
    width: 174.47px;
    height: 52.05px;
    top: 145.5px;
    left: 290.08px;
  }
`;

export const FourthImage = styled.div`
  width: 98.47px;
  height: 33.05px;
  position: absolute;
  top: 109.34px;
  left: 153.08px;
  z-index: 2;
  animation: ${scale4} 15000ms infinite 0000ms;

  @media screen and (min-width: 768px) {
    width: 139.47px;
    height: 45.05px;
    top: 158.5px;
    left: 221.08px;
  }

  @media screen and (min-width: 1440px) {
    width: 174.47px;
    height: 52.05px;
    top: 201.5px;
    left: 291.08px;
    z-index: 2;
  }
`;

export const Fifthimage = styled.div`
  width: 98.47px;
  height: 33.05px;
  position: absolute;
  top: 141.34px;
  left: 153.08px;
  z-index: 2;
  animation: ${scale5} 15000ms infinite 0000ms;

  @media screen and (min-width: 768px) {
    width: 139.47px;
    height: 45.05px;
    top: 202.5px;
    left: 221.08px;
  }

  @media screen and (min-width: 1440px) {
    width: 174.47px;
    height: 52.05px;
    top: 257.5px;
    left: 291.08px;
  }
`;

export const Sixthimage = styled.div`
  width: 98.47px;
  height: 33.05px;
  position: absolute;
  top: 171.34px;
  left: 153.08px;
  z-index: 2;
  animation: ${scale6} 15000ms infinite 0000ms;

  @media screen and (min-width: 768px) {
    width: 139.47px;
    height: 52.05px;
    top: 242.5px;
    left: 221.08px;
  }

  @media screen and (min-width: 1440px) {
    width: 188.47px;
    height: 54.05px;
    top: 315.5px;
    left: 283.08px;
  }
`;

 