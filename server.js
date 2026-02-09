const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Import and use the default router
const defaultRouter = require('./router/defaultRouter');

app.use(
  cors({
    origin: `${process.env.HOST}`,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: { 'Content-Type:': 'application/json' },
  }),
);

// Routes
app.use(defaultRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
