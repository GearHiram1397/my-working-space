
import React, { lazy } from "react";
import store from './store'
import { Provider } from 'react-redux';


// const Header = lazy(() => {
//   return Promise.all([
//     import("./Components/Header/Header"),
//     new Promise((resolve) => setTimeout(resolve, 3000)),
//   ]).then(([moduleExports]) => moduleExports);
// });
const Main = lazy(() => {
  return Promise.all([
    import("./Components/Main/Main"),
    new Promise((resolve) => setTimeout(resolve, 3000)),
  ]).then(([moduleExports]) => moduleExports);
});

function App() {
  return (
    <div className="app">
      
          <Main />
      
    </div>
  );
}

export default function WhiteBoard(){
  return(
  <Provider store = {store}>
      <App />
    </Provider>
  )
}