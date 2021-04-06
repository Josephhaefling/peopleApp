import React, { useState } from 'react';
import MainView from './Components/Views/MainView/MainView';
import Header from './Components/Header/Header';
import EventView from './Components/Views/EventView/EventView';
import LoginView from './Components/Views/LoginView/LoginView';
import { Switch, Route } from 'react-router-dom';

function App() {

  const [ currentUser, setCurrentUser ] = useState('')
  const [ events, setEvents ] = useState('')

  return (
    <Switch>
      <Route
        path='/login'
        render={()=> {
          return (
            <div>
              <Header />
              <LoginView setCurrentUser={ setCurrentUser }/>
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
              <MainView currentUser={currentUser} setEvents={setEvents} events={events} />
            </div>
          )
        }}
      ></Route>
    </Switch>
  );
}

export default App;
