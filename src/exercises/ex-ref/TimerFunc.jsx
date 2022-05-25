import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const TimerFunc = forwardRef((props, ref) => {
  const [timer, setTimer] = useState(0);
  const isRunning = useRef(false);
  const interval = useRef();

  useImperativeHandle(ref, () => ({
    startTimer,
    stopTimer,
    resetTimer,
  }));

  const startTimer = () => {
    if (!isRunning.current) {
      isRunning.current = true;
      interval.current = setInterval(() => {
        setTimer((oldTimer) => oldTimer + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    isRunning.current = false;
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

  return <h1>{timer}</h1>;
});

export default TimerFunc;
