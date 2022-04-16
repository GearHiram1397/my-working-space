import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  isModalOpened: false,
  isRunning: false,
  secondsLeft: 1500,
  isVolume: 1,
  color: 'orange',
  font: 'Kumbh Sans',
  timerType: 'pomodoro',
  timerSettingsSelected: {
    pomodoro: 1500,
    short: 300,
    long: 900,
  },

  appliedSettings: {
    color: 'orange',
    font: 'Kumbh Sans',
    timerSettings: {
      pomodoro: 1500,
      short: 300,
      long: 900,
    },
  },
};

const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModalOpened = !state.isModalOpened;
    },
    updateTimersSettings(state, action) {
      state.timerSettingsSelected[action.payload.timerType] =
        parseInt(action.payload.time) * 60;

      if (action.payload.timerType === state.timerType) {
        state.secondsLeft = parseInt(action.payload.time) * 60;
      }
    },
    updateColorOrFont(state, action) {
      state[action.payload.setting] = action.payload.value;
    },
    applySettings(state) {
      state.appliedSettings = {
        color: state.color,
        font: state.font,
        timerSettings: {
          pomodoro: state.timerSettingsSelected.pomodoro,
          short: state.timerSettingsSelected.short,
          long: state.timerSettingsSelected.long,
        },
      };
    },
    updateTimerType(state, action) {
      state.timerType = action.payload;
    },
    toggleIsRunnning(state) {
      state.isRunning = !state.isRunning;
    },
    toggleVolume(state) {
      if (state.isVolume) {
        state.isVolume = 0;
      } else {
        state.isVolume = 1;
      }
    },
    upDateSecondsLeft(state, action) {
      state.secondsLeft = action.payload;
    },
  },
});

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('pomodoroSettings', JSON.stringify(getState()));
    return result;
  };
};

// Rehydration function

const reHydrateStore = () => {
  if (localStorage.getItem('pomodoroSettings') !== null) {
    return JSON.parse(localStorage.getItem('pomodoroSettings')); // re-hydrate the store
  }
};

export const pomodoroActions = pomodoroSlice.actions;

const store = configureStore({
  reducer: { pomodoro: pomodoroSlice.reducer },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
