import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  .loader {
    position: relative;
    display: flex;
    margin-top: 100px;

    span {
      position: relative;
      width: 250px;
      height: 250px;
      background-color: #eaeef0;
      box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
        8px 8px 25px rgba(0, 0, 0, 0.15);
      border-radius: 50%;
      overflow: hidden;
      margin: auto;
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.5);
        inset: -5px -5px 15px rgba(255, 255, 255, 1);
      }
      &::after {
        content: "";
        position: absolute;
        inset: 40px;
        background: #eaeef0;
        border: 3px solid #eaeef0;
        border-radius: 50%;
        box-shadow: -8px -8px 25px rgba(255, 255, 255, 1),
          8px 8px 25px rgba(0, 0, 0, 0.25),
          inset 3px 3px 10px rgba(0, 0, 0, 0.15),
          inset -1px -1px 15px rgba(255, 255, 255, 1);
      }
      i {
        position: absolute;
        filter: blur(5px);
        inset: 0;
        background: linear-gradient(#42abff, #ff4f8b, #ffeb3b);
        animation: animate 1s linear infinite;
      }
    }

    .rocket {
      position: absolute;
      inset: 50px;
      display: flex;
      z-index: 10;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 50%;
      z-index: 1000;

      .fa-rocket {
        position: absolute;
        color: #ff518c;
        font-size: 3.5rem;
        -webkit-text-stroke: 2px #000;
        animation: animateRocket 0.2s linear infinite;
      }

      .fa-cloud {
        position: absolute;
        top: calc(35px * var(--i));
        left: calc(45px * var(--i));
        font-size: 2em;
        color: #fff;
        -webkit-text-stroke: 2px #000;
        animation: animateClouds 1s linear infinite;
        animation-delay: calc(-0.5s * var(--i));
      }
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animateRocket {
    0%,
    100% {
      transform: translate(0px, 0px) rotate(-45deg);
    }
    50% {
      transform: translate(0px, 3px) rotate(-45deg);
    }
  }

  @keyframes animateClouds {
    0% {
      transform: translateY(calc(-35 * 5px));
    }
    100% {
      transform: translateY(calc(35 * 5px));
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="loader my-4">
        <div className="rocket">
          <i className="fas fa-rocket"></i>
          <i className="fas fa-cloud"></i>
          <i className="fas fa-cloud"></i>
          <i className="fas fa-cloud"></i>
        </div>
        <span>
          <i></i>
        </span>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
