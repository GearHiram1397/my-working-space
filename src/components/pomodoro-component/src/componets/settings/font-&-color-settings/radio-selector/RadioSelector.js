import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { pomodoroActions } from '../../../../store/pomodoro';

import { RadionBtn, RadioContent } from './RadioSelectorStyles';

const RadioSelector = ({ settingsType, value, labelContent }) => {
  const pomodoro = useSelector((state) => state.pomodoro);
  const { color, font } = pomodoro;

  const dispatch = useDispatch();

  let bgColor;
  let textColor;
  let isSelected;

  const updateSettingHandlrer = () => {
    dispatch(
      pomodoroActions.updateColorOrFont({
        setting: settingsType,
        value,
      })
    );
  };

  if (settingsType === 'color') {
    bgColor = value;
    isSelected = color === value;
  } else {
    bgColor = font === value ? 'very-dark-blue' : 'gray';
    textColor = font === value ? 'white' : 'dark-blue';
  }

  return (
    <RadionBtn
      value={value}
      bgColor={bgColor}
      isSelected={isSelected}
      onClick={updateSettingHandlrer}
    >
      <RadioContent font={value} color={textColor}>
        {labelContent}
      </RadioContent>
    </RadionBtn>
  );
};

export default RadioSelector;
