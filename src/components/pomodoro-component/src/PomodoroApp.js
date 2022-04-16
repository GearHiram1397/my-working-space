import GlobalStyles from './styles/GlobalStyles';
// import { useSelector, useDispatch } from 'react-redux';

// import { pomodoroActions } from './store/pomodoro';
import { Provider } from 'react-redux';
import store from './store/pomodoro';

import PomodoroWrapper from './componets/pomodoro-wrapper/PomodoroWrapper';
import PomodoroHeader from './componets/pomodoro-header/PomodoroHeader';
import Timer from './componets/timer/Timer';


function App() {
  // const dispatch = useDispatch();
  // const pomodoro = useSelector((state) => state.pomodoro);

//  const { isModalOpened, isRunning } = pomodoro;

//   const modalHandler = () => {
//     if (isRunning) dispatch(pomodoroActions.toggleIsRunnning());
//     dispatch(pomodoroActions.toggleModal());
//   }; 

  return (
    <div className="pomodoro-container">
      <GlobalStyles />
      <PomodoroWrapper >
        <PomodoroHeader />
        <Timer />
      </PomodoroWrapper>
      
    </div>
  );
}



function PomodoroApp(){
  return (
    <Provider store={store}>
      <App />
      </Provider>
  )
}

export default PomodoroApp;


// <AnimatePresence>{isModalOpened && <Modal />}</AnimatePresence>

