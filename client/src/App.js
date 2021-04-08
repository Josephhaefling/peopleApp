import React, { useState, useEffect } from 'react';
import MainView from './Components/Views/MainView/MainView';
import AdminView from './Components/Views/AdminView/AdminView';
import Header from './Components/Header/Header';
import EventView from './Components/Views/EventView/EventView';
import LoginView from './Components/Views/LoginView/LoginView';
import EditDescription from './Components/EditDescription/EditDescription';
import EditEvent from './Components/EditEvent/EditEvent';
import { Switch, Route } from 'react-router-dom';

function App() {

  const [ currentUser, setCurrentUser ] = useState('')
  const [ events, setEvents ] = useState('')
  const [description, setDescription] = useState('')
  console.log('description app:', description)

  return (
    <Switch>
      <Route
        path='/edit_event'
        render={()=> {
          return (
            <div>
              <Header />
              <EditEvent />            
            </div>
          )
        }}
      ></Route>
      <Route
        path='/edit_description'
        render={()=> {
          return (
            <div>
              <Header />
              <EditDescription 
                description={description} 
                setDescription={setDescription} 
              />            
            </div>
          )
        }}
      ></Route>
      <Route
        path='/login'
        render={()=> {
          return (
            <div>
              <Header />
              <LoginView currentUser={ currentUser } setCurrentUser={ setCurrentUser }/>
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
              {
              currentUser.admin ? 
                <AdminView 
                  currentUser={currentUser} 
                  description={description} 
                  setDescription={setDescription}
                  events={events} s
                  setEvents={setEvents} /> : 
                <MainView 
                  currentUser={currentUser} 
                  description={description}
                  setDescription={setDescription} 
                  events={events} 
                  setEvents={setEvents} />
                }
            </div>
          )
        }}
      ></Route>
    </Switch>
  );
}

export default App;
