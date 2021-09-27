# People

### A meetup clone to get some practice with Node and Express.

### Setup Instructions
Local Server Instructions:

Clone this repo
- Navigate into the client using `cd client`
- In the directory, run npm install
- Open a new tab in the terminal and navigate into the server using `cd server`
- In the directory, run npm install
- Once npm is installed, run npm start in your terminal for both the server and the client
- Keep the terminal running in the background and go to http://localhost:3000/ in your browser
- When you are done, enter control + c in the terminal to stop the server


### Contributors:
Joe Haefling (GitHub: Josephhaefling)

##### Learning Goals

Designing an application from scratch and researching and effectively using a previously unknown technology. Building applications in React. Implementing React Hooks. Using Express to build a micro-service. Managing API fetch calls and writing endpoints in the microservice.

##### Project Overview

The primary emphasis of this project was to build a MERN stack application from scratch.

##### Main Page

Upon loading the application, our user will be able to see the description of the group and upcoming events. The user will not be able to see the event location or who is attending until they log in or sign up. The group description, group members, and events are created and stored using Node and Express.

##### Login

Currently, the login page uses React Google Login to authenticate users at login.

##### Main Page Logged In (user)

When a user logs in, they are returned to the main page where they will see the group description, a list of group members, and a list of events. Now that the user is logged in, and they can choose to attend an event.

##### Main Page Logged In (admin)

When an admin user logs in, they can read or edit the group description, they can also create, read, update, or delete events.

##### Technologies Used
- React
- React
- Hooks
- Router
- Node
- Express
- JavaScript
- HTML/CSS
- Material UI
