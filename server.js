const express = require('express');

require('dotenv').config();

const cors = require('cors');

const cookieParser = require("cookie-parser")

const app = express();

const PORT = process.env.PORT || 3000;

// App Setup
app.use(express.static('public'));

app.use(cookieParser())

app.set('view engine', 'ejs');

app.use(
  cors({
    origin: `${process.env.HOST}`,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Import and use the default router
const defaultRouter = require('./router/defaultRouter');

const authRouter = require('./router/authRouter');

const authorizedRouter = require('./router/authorizedRouter');

// Routes
app.use(defaultRouter);

app.use(authRouter)

app.use(authorizedRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
