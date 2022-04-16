import React from 'react';

import { useDispatch } from 'react-redux';
import { pomodoroActions } from '../../store/pomodoro';

import {
  SettingsHeader,
  SettingsContentWrapper,
  ApplyBtn,
} from './SettingsStyles';
import { ReactComponent as Close } from '../../assets/icon-close.svg';
import TimeSettings from './time-settings/TimeSettings';
import FontColorSettings from './font-&-color-settings/FontColorSettings';

const Settings = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(pomodoroActions.toggleModal());
  };

  const applyHandler = (e) => {
    e.preventDefault();
    dispatch(pomodoroActions.applySettings());
    dispatch(pomodoroActions.toggleModal());
  };

  return (
    <>
      <SettingsHeader>
        <h2>Settings</h2>
        <Close className="closeBtn" onClick={closeHandler} />
      </SettingsHeader>
      <SettingsContentWrapper>
        <TimeSettings />
        <FontColorSettings heading="font" />
        <FontColorSettings heading="color" />
        <ApplyBtn onClick={applyHandler}>Apply</ApplyBtn>
      </SettingsContentWrapper>
    </>
  );
};

export default Settings;
