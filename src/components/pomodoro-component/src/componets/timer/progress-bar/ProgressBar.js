import React from 'react';

import { useSelector } from 'react-redux';

import { ProgressSvg, SvgCircle } from './ProgressBarStyles';

const ProgressBar = ({ progress, radius, stroekWidth }) => {
  const { appliedSettings } = useSelector((state) => state.pomodoro);

  const { color } = appliedSettings;

  const barRadius = radius - stroekWidth * 2;
  const circumference = barRadius * 2 * Math.PI;
  const strokeDashOffset = circumference - (progress / 100) * circumference;

  return (
    <ProgressSvg>
      <SvgCircle
        themeColor={color}
        fill="transparent"
        strokeWidth={stroekWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashOffset}
        r={barRadius}
        cx={radius}
        cy={radius}
        stroke-linecap="round"
      />
    </ProgressSvg>
  );
};

export default ProgressBar;
