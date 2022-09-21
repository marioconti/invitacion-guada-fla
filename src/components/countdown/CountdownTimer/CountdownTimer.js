import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="countdown-timer">
      <div className="container-date">
        <span className="number-countdown">{remainingTime.days}</span>
        <span className="days-text">DIAS</span>
      </div>
      <div className="container-date">
        <span className="two-numbers number-countdown">
          {remainingTime.hours}
        </span>
        <span className="days-text">HS</span>
      </div>
      <div className="container-date">
        <span className="two-numbers number-countdown">
          {remainingTime.minutes}
        </span>
        <span className="days-text">MIN</span>
      </div>
      <div className="container-date">
        <span className="two-numbers number-countdown">
          {remainingTime.seconds}
        </span>
        <span className="days-text">SEG</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
