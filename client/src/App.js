import React, { useState, useEffect, useCallback } from 'react';
import MainView from './Components/Views/MainView/MainView';
import AdminView from './Components/Views/AdminView/AdminView';
import Header from './Components/Header/Header';
import EventView from './Components/Views/EventView/EventView';
import LoginView from './Components/Views/LoginView/LoginView';
import EditDescription from './Components/EditDescription/EditDescription';
import EditEventView from './Components/Views/EditEventView/EditEventView';
import useStyles from './appStyles';
import { Switch, Route } from 'react-router-dom';
import { getAllEvents, getAllUsers } from './api';

function App() {

  const [ currentUser, setCurrentUser ] = useState('')
  const [ currentEvent, setCurrentEvent ] = useState('')
  const [ events, setEvents ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ isLoggedIn, setIsLoggedIn ] =useState('')
  const [ users, setUsers ] = useState()
  const styles = useStyles()
  const { eventView } = styles

  console.log('current event in app:', currentEvent)

  const getData = async () => {
    const events = await getAllEvents() 
    const allUsers = await getAllUsers()
    setEvents(events.data)
    setUsers(allUsers.data)
  }
  
  useEffect(() => {
    setIsLoggedIn(false)
    getData()
  }, [])

  return (
    <Switch>
      <Route
        path='/create_event'
        render={()=> {
          return (
            <div>
              <Header isLoggedIn={ isLoggedIn } setCurrentEvent={ setCurrentEvent } />
              <EditEventView 
                currentEvent={ currentEvent } 
                currentUser={ currentUser } 
                setEvents= { setEvents }
                events={ events }
              />            
            </div>
          )
        }}
      ></Route>
      <Route
        path='/edit_description'
        render={()=> {
          return (
            <div>
              <Header isLoggedIn={ isLoggedIn } setCurrentEvent={ setCurrentEvent } />
              <EditDescription 
                events={ events }
                currentEvent={ currentEvent }
                description={ description } 
                setDescription={ setDescription } 
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
              <Header isLoggedIn={ isLoggedIn } setCurrentEvent={ setCurrentEvent } />
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
            <div className={ eventView }>
              <Header isLoggedIn={ isLoggedIn } setCurrentEvent={ setCurrentEvent } />
              <EventView eventInfo={ currentEvent } users={ users } currentEvent={ currentEvent } />
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
              <Header isLoggedIn={ isLoggedIn } setCurrentEvent={ setCurrentEvent } />
              <EditEventView 
              currentUser={ currentUser }
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
              <Header isLoggedIn={ isLoggedIn } setCurrentEvent={ setCurrentEvent } />
              {
              currentUser.isAdmin ? 
                <AdminView 
                  users={ users }
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
                  users={ users }
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
