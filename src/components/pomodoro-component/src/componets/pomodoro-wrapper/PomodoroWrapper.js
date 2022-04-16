import React from 'react';

import { useSelector } from 'react-redux';

import { PomodoroWrap } from './PomodoroWrapperStyles';

const PomodoroWrapper = ({ children }) => {
  const { appliedSettings } = useSelector((state) => state.pomodoro);
  const { font } = appliedSettings;

  return <PomodoroWrap >{children}</PomodoroWrap>;
};

export default PomodoroWrapper;
