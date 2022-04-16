import React from 'react';

import { Wrapper, SelectorsWrapper } from './FontColorSettingsStyles';

import { Heading } from '../SettingsStyles';
import RadioSelector from './radio-selector/RadioSelector';

const FontColorSettings = ({ heading }) => {
  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <SelectorsWrapper>
        <RadioSelector
          settingsType={heading}
          value={heading === 'font' ? 'Kumbh Sans' : 'orange'}
          labelContent={heading === 'font' && 'Aa'}
        />
        <RadioSelector
          settingsType={heading}
          value={heading === 'font' ? 'Roboto Slab' : 'cyan'}
          labelContent={heading === 'font' && 'Aa'}
        />
        <RadioSelector
          settingsType={heading}
          value={heading === 'font' ? 'Space Mono' : 'purple'}
          labelContent={heading === 'font' && 'Aa'}
        />
      </SelectorsWrapper>
    </Wrapper>
  );
};

export default FontColorSettings;
