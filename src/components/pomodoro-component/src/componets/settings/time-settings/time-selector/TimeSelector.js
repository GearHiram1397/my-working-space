import React from 'react';

import { useDispatch } from 'react-redux';
import { pomodoroActions } from '../../../../store/pomodoro';

import { TimerLabel, TimerInput, TimerWrapper } from './TimeSelectorStyles';

const TimeSelector = ({ timer, defaultTime, min, max }) => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(
      pomodoroActions.updateTimersSettings({
        timerType: e.target.dataset.timer,
        time: e.target.value,
      })
    );
  };

  return (
    <TimerWrapper>
      <TimerLabel htmlFor={timer}>{timer}</TimerLabel>
      <TimerInput
        data-timer={timer.split(' ')[0]}
        type="number"
        name={timer}
        id={timer}
        min={min}
        max={max}
        defaultValue={defaultTime}
        onChange={changeHandler}
      />
    </TimerWrapper>
  );
};

export default TimeSelector;
