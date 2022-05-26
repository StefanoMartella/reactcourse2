import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 448px;
  border-radius: 12px;
  padding: 32px;
  background: #fafafa;
`;

const ClockFace = styled.div`
  text-align: center;

  div {
    border-radius: 12px;
    margin-bottom: 16px;
    padding: 32px;
    border: 3px solid #efefef;

    h1 {
      color: #989898;
      font-size: 5rem;
    }
  }
`;

const Button = styled.button`
  width: 120px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: ${(props) => (props.withHorizontalMargin ? "12px" : "12px 0")};
  color: ${(props) => (props.disabled ? "#9aa7f0" : "#f1f5ff")};
  background: ${(props) => (!props.disabled ? "#9aa7f0" : "#f1f5ff")};
`;

function StyledTimer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef();

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      interval.current = setInterval(() => {
        setTimer((oldTimer) => oldTimer + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(interval.current);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <Container>
      <ClockFace>
        <div>
          <h1>{timer}</h1>
        </div>
      </ClockFace>
      <Button disabled={isRunning} onClick={() => startTimer()}>
        Avvia
      </Button>
      <Button
        disabled={!isRunning}
        withHorizontalMargin
        onClick={() => stopTimer()}
      >
        Stop
      </Button>
      <Button onClick={() => resetTimer()}>Reset</Button>
    </Container>
  );
}

export default StyledTimer;
