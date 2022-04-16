import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { pomodoroActions } from '../../store/pomodoro';
import useSound from 'use-sound';

import slideSfx from '../../assets/sounds/slide.mp3';

import {
  HeaderWrapper,
  TimerTypeBtn,
  Selector,
  BtnWrapper,
} from './PomodoroHeaderStyles';

const PomodoroHeader = () => {
  const { timerType, appliedSettings, isRunning, isVolume } = useSelector(
    (state) => state.pomodoro
  );
  const { color, timerSettings } = appliedSettings;
  const dispatch = useDispatch();
  const [play] = useSound(slideSfx, {
    volume: isVolume,
  });

  const selectTypeHandler = (e) => {
    dispatch(pomodoroActions.updateTimerType(e.target.dataset.type));
    dispatch(
      pomodoroActions.upDateSecondsLeft(timerSettings[e.target.dataset.type])
    );
    if (isRunning) dispatch(pomodoroActions.toggleIsRunnning());
    play();
  };

  let position;

  if (timerType === 'pomodoro') {
    position = '0%';
  } else if (timerType === 'short') {
    position = '50%';
  } else {
    position = '100%';
  }

  return (
    <HeaderWrapper>
      <BtnWrapper>
        <TimerTypeBtn
          data-type="pomodoro"
          isSelected={timerType === 'pomodoro'}
          onClick={selectTypeHandler}
        >
          pomodoro
        </TimerTypeBtn>
        <TimerTypeBtn
          data-type="short"
          isSelected={timerType === 'short'}
          onClick={selectTypeHandler}
        >
          short break
        </TimerTypeBtn>
        <TimerTypeBtn
          data-type="long"
          isSelected={timerType === 'long'}
          onClick={selectTypeHandler}
        >
          long break
        </TimerTypeBtn>
        <Selector colorTheme={color} position={position} />
      </BtnWrapper>
    </HeaderWrapper>
  );
};

export default PomodoroHeader;
