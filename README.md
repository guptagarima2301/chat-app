MERN Stack Chat Application

OVERVIEW:

This MERN Stack Chat Application is a real-time chat application built using MongoDB, Express.js, React.js, and Node.js (MERN stack), along with WebSockets for instant messaging. The app allows users to join chat rooms and exchange messages in real-time, providing a smooth and responsive chat experience.

KEY FEATURES:

Real-Time Messaging: Leveraging WebSockets to enable real-time chat functionality.

Multiple Chat Rooms: Users can create and join different chat rooms to have separate conversations.

Persistent Chat History: Messages are stored in MongoDB, allowing users to view previous conversations when they rejoin.

Responsive Design: The application is optimized for both desktop and mobile devices.

LIVE DEMO:

https://github.com/user-attachments/assets/9ae0b1cb-1801-4fd9-bc17-18d5d5fa19d9

TECH STACK:

MongoDB: NoSQL database to store user data and chat history.

Express.js: Backend framework for handling server-side logic.

React.js: Front-end framework for building a dynamic user interface.

Node.js: JavaScript runtime environment for the server.

WebSockets: Enables real-time, bi-directional communication between the client and server.

WEBSOCKET ARCHITECTURE:

This chat app utilizes WebSockets to establish a persistent connection between the client and server. When a user sends a message, it is broadcast to all connected clients in the same chat room in real-time. The server processes and stores these messages in MongoDB.

WORKFLOW:

Connection: When a user joins a chat room, a WebSocket connection is established.

Message Transmission: Messages are sent via WebSockets and broadcast to other users in the room.

Database Storage: Each message is stored in MongoDB for future retrieval.

