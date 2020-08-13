import React from 'react';
import styled from 'styled-components';

const animationLength = 0.08;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover,
  &:focus {
    outline: none;

    span {
      &:nth-of-type(1):before,
      &:nth-of-type(3):before {
        width: 100%;
      }

      &:nth-of-type(2):before,
      &:nth-of-type(4):before {
        height: 100%;
      }
    }
  }
`;
const Line = styled.span`
  position: absolute;
  background-color: #ffffff;
  z-index: 1;

  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    background-color: #b514b7;
  }

  &:nth-of-type(1),
  &:nth-of-type(3) {
    height: 1px;
    width: 100%;

    &:before {
      transition: width ${animationLength}s
        cubic-bezier(0.455, 0.03, 0.515, 0.955);
      height: 1px;
      width: 0;
    }
  }

  &:nth-of-type(2),
  &:nth-of-type(4) {
    width: 1px;
    height: 100%;

    &:before {
      width: 1px;
      height: 0%;
      transition: height ${animationLength}s
        cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }

  &:nth-of-type(1),
  &:nth-of-type(1):before {
    top: 0;
    left: 0;
  }

  &:nth-of-type(2) {
    top: 0;
    right: 0;

    &:before {
      transition-delay: ${animationLength}s;
      top: 0;
      right: 0;
    }
  }

  &:nth-of-type(3) {
    bottom: 0;
    right: 0;

    &:before {
      transition-delay: ${animationLength * 2}s;
      bottom: 0;
      right: 0;
    }
  }

  &:nth-of-type(4) {
    bottom: 0;
    left: 0;

    &:before {
      transition-delay: ${animationLength * 3}s;
      bottom: 0;
      left: 0;
    }
  }
`;

const ButtonElement = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0rem 0.2rem 0.3rem rgba(#000000, 0.8);
  background-color: #212121;
  color: #ffffff;
  font-size: 0.9rem;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

const Button = ({ children }) => {
  return (
    <Wrapper>
      <Line />
      <Line />
      <Line />
      <Line />
      <ButtonElement>{children}</ButtonElement>
    </Wrapper>
  );
};

export default Button;
