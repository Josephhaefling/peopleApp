import React, { useState, useEffect } from 'react';
import MainView from './Components/Views/MainView/MainView';
import AdminView from './Components/Views/AdminView/AdminView';
import Header from './Components/Header/Header';
import EventView from './Components/Views/EventView/EventView';
import LoginView from './Components/Views/LoginView/LoginView';
import EditDescription from './Components/EditDescription/EditDescription';
import EditEventView from './Components/Views/EditEventView/EditEventView';
import { Switch, Route } from 'react-router-dom';

function App() {

  const [ currentUser, setCurrentUser ] = useState('')
  const [ currentEvent, setCurrentEvent ] = useState('')
  const [ events, setEvents ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ isLoggedIn, setIsLoggedIn ] =useState('')

  console.log('is logged in:', isLoggedIn)

  useEffect(() => {
    setIsLoggedIn(false)
  }, [ ])

  return (
    <Switch>
      <Route
        path='/create_event'
        render={()=> {
          return (
            <div>
              <Header isLoggedIn={ isLoggedIn } />
              <EditEventView currentEvent={ currentEvent } currentUser={ currentUser } />            
            </div>
          )
        }}
      ></Route>
      <Route
        path='/edit_description'
        render={()=> {
          return (
            <div>
              <Header isLoggedIn={ isLoggedIn } />
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
              <Header isLoggedIn={ isLoggedIn } />
              <LoginView 
                currentUser={ currentUser } 
                setCurrentUser={ setCurrentUser } 
                isLoggedIn={ isLoggedIn }
                setIsLoggedIn={ setIsLoggedIn }
              />
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
              <Header isLoggedIn={ isLoggedIn } />
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
        exact path='/:eventTitle'
        render={()=> {
          return (
            <div>
              <Header isLoggedIn={ isLoggedIn } />
              <EditEventView 
                currentEvent={ currentEvent } 
                setCurrentEvent={ setCurrentEvent }
                events={ events }
                setEvents={ setEvents}
              />            
            </div>
          )
        }}
      ></Route>
      <Route
        path='/'
        render={() => {
          return (
            <div className="App">
              <Header isLoggedIn={ isLoggedIn } />
              {
              currentUser.isAdmin ? 
                <AdminView 
                  currentUser={ currentUser }
                  setCurrentUser={ setCurrentUser } 
                  description={ description } 
                  setDescription={ setDescription }
                  events={ events }
                  setEvents={ setEvents }
                  currentEvent={ currentEvent } 
                  setCurrentEvent={ setCurrentEvent } 
                /> : 
                <MainView 
                  currentUser={ currentUser } 
                  setCurrentUser={ setCurrentUser }
                  description={ description }
                  setDescription={ setDescription } 
                  events={ events } 
                  setEvents={ setEvents } 
                  currentEvent={ currentEvent } 
                  setCurrentEvent={ setCurrentEvent }
                />
                }
            </div>
          )
        }}
      ></Route>
    </Switch>
  );
}

export default App;
