const express = require('express');
const app = express();
const port = 3000;

const usersRouter = require("./routes/users.js")

app.use(express.json());
app.use("/api/", usersRouter)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



//Open your browser and go to http://localhost:3000. 
// You should see the message "Welcome to our simple REST API!"

