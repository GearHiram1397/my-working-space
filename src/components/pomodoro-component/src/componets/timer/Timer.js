import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pomodoroActions } from '../../store/pomodoro';
import useSound from 'use-sound';

import starSfx from '../../assets/sounds/startTimer.mp3';
import pauseSfx from '../../assets/sounds/pauseTimer.mp3';
import timeUpSfx from '../../assets/sounds/timesUp.mp3';

import {
  TimerWrapper,
  OuterCircle,
  InnerCircle,
  ControlBtn,
} from './TimerStyles';

import ProgressBar from './progress-bar/ProgressBar';
import Display from './display/Display';
import Mute from './mute/Mute';

const Timer = () => {
  const dispatch = useDispatch();
  const { appliedSettings, timerType, isRunning, isVolume, secondsLeft } =
    useSelector((state) => state.pomodoro);
  const { color, timerSettings } = appliedSettings;

  const [start] = useSound(starSfx, {
    interrupt: true,
    volume: isVolume,
  });

  const [pause] = useSound(pauseSfx, {
    interrupt: true,
    volume: isVolume,
  });

  const [timeUp] = useSound(timeUpSfx, {
    volume: isVolume,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [progress, setProgress] = useState(100);

  const initialTime = timerSettings[timerType];

  // check winow width

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const controlHandler = () => {
    if (secondsLeft === 0) {
      start();
      dispatch(pomodoroActions.upDateSecondsLeft(timerSettings[timerType]));
    } else if (isRunning) {
      pause();
      dispatch(pomodoroActions.toggleIsRunnning());
    } else {
      start();
      dispatch(pomodoroActions.toggleIsRunnning());
    }
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth);

    return () => {
      window.removeEventListener('resize', changeWindowWidth);
    };
  }, []);

  // settings profress bar radius and store width

  let radius = 182;
  let stroekWidth = 12;

  if (windowWidth <= 480) {
    radius = 134;
    stroekWidth = 8;
  }

  useEffect(() => {
    if (secondsLeft === 0) {
      timeUp();
    }

    const currentProgress = (secondsLeft / initialTime) * 100;

    setProgress(currentProgress);
  }, [secondsLeft, initialTime, timeUp]);

  useEffect(() => {
    if (isRunning) {
      if (secondsLeft === 0) return;
      let timer = setInterval(() => {
        dispatch(pomodoroActions.upDateSecondsLeft(secondsLeft - 1));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, secondsLeft, dispatch]);
  return (
    <TimerWrapper>
      <OuterCircle>
        <InnerCircle>
          <Mute />
          <Display secondsLeft={secondsLeft} />
          <ControlBtn themeColor={color} onClick={controlHandler}>
            {secondsLeft !== 0 && `${isRunning ? 'Pause' : 'Start'}`}

            {secondsLeft === 0 && 'restart'}
          </ControlBtn>
          <ProgressBar
            progress={progress}
            radius={radius}
            stroekWidth={stroekWidth}
          />
        </InnerCircle>
      </OuterCircle>
    </TimerWrapper>
  );
};

export default Timer;
