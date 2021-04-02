import MainView from './Components/Views/MainView/MainView';
import Header from './Components/Header/Header';
import EventView from './Components/Views/EventView/EventView';
import LoginView from './Components/Views/LoginView/LoginView';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route
        path='/login'
        render={()=> {
          return (
            <div>
              <Header />
              <LoginView />
            </div>
          )
        }}
      ></Route>
      <Route
        path='/members'
        render={()=> {
          return <h1>Members Page</h1>
        }}
      ></Route>
      <Route
        path='/event'
        render={()=> {
          return (
            <div>
              <Header />
              <EventView />
            </div>
          )
            
        }}
      ></Route>
      <Route
        path='/photos'
        render={()=> {
          return <h1>Photos Page</h1>
        }}
      ></Route>
      <Route
        path='/'
        render={() => {
          return (
            <div className="App">
              <Header />
              <MainView />
            </div>
          )
        }}
      ></Route>
    </Switch>
  );
}

export default App;
