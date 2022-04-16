import React from 'react';

import { useSelector } from 'react-redux';

import { TimeSelectWrapper } from './TimeSettingsStyles';
import { Heading } from '../SettingsStyles';
import TimeSelector from './time-selector/TimeSelector';

const TimeSettings = () => {
  const { appliedSettings } = useSelector((state) => state.pomodoro);

  const { timerSettings } = appliedSettings;
  return (
    <>
      <Heading>time (minutes)</Heading>
      <TimeSelectWrapper>
        <TimeSelector
          timer={'pomodoro'}
          defaultTime={timerSettings.pomodoro / 60}
          min={'5'}
          max={'90'}
        />
        <TimeSelector
          timer={'short break'}
          defaultTime={timerSettings.short / 60}
          min={'1'}
          max={'14'}
        />
        <TimeSelector
          timer={'long break'}
          defaultTime={timerSettings.long / 60}
          min={'15'}
          max={'30'}
        />
      </TimeSelectWrapper>
    </>
  );
};

export default TimeSettings;
