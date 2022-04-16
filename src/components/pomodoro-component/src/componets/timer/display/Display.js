import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Time } from './DisplayStyles';

const Display = ({ secondsLeft }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const { appliedSettings } = useSelector((state) => state.pomodoro);

  const { font } = appliedSettings;

  // time format function

  const formatTime = (time) => {
    const minutes = ~~((time % 3600) / 60);
    const secodns = ~~time % 60;
    setMinutes(minutes);
    setSeconds(secodns);
  };

  // changing time text settings basd on font family

  let fontWeight = '700';

  if (font === 'Space Mono') {
    fontWeight = '500';
  }

  useEffect(() => {
    formatTime(secondsLeft);
  }, [secondsLeft]);

  return (
    <Time fontW={fontWeight}>
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </Time>
  );
};

export default Display;
