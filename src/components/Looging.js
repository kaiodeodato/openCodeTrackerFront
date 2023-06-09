import styled from 'styled-components'
import React from 'react'

const Body = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .spinner {
    scale: 1.5;
    width: 40px;
    height: 40px;
    border: 4px solid #333;
    border-top: 4px solid #fff;
    border-radius: 50%;
    animation: spin 1.5s linear infinite;
    opacity: 0.6;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
        scale: 1.5;
    }
    50% {
        transform: rotate(180deg);
        scale: 1.7;
    }
    100% {
        transform: rotate(360deg);
        scale: 1.5;
    }
}

`

export default function Looging() {
  return (
    <Body>
        <div className="spinner"></div>
    </Body>
  )
}
