const express = require("express");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const profileRoutes = require("./routes/profile");
const verifyEmail = require("./routes/verifyEmail");

const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// app.get("/", (req, resp) => {
//   resp.send("hello");
// });

app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/register", registerRoutes);
app.use("/api/v1/verifyemail", verifyEmail);
app.use("/api/v1/profile", profileRoutes);

app.use((req, res) => {
  res.status(404).json('404: Page not found');
});

const server = app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// const chats = socketIO(server, {
//   cors: {
//     origin: "http://localhost:3000"
//   }
// });

// const io = chats.of("/chat");

// io.disconnectSockets();

// io.on('connection', (socket) => {
//   console.log('A user connected', socket.id);
//   // Listen for messages from the client
//   socket.on('send-message', (data) => {
//     console.log('Message from client:', data);

//     // Broadcast the message to all connected clients
//     socket.to(data.room).emit('message', data.message);
//   });

//   socket.on("joinRoom", (room) => {
//     socket.leaveAll();
//     socket.join(room);
//     console.log(`User joined room: ${room}`);
//   });

//   socket.on('leaveRoom', (room) => {
//     socket.leave(room);
//     console.log(`User left room: ${room}`);
//   });

//   // Handle disconnection
//   socket.on('disconnectMe', () => {
//     console.log('Disconnecting the user');
//     socket.disconnect();
//   });
// });
