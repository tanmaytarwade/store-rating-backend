const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());



sequelize.sync().then(() => {
  console.log("✅ DB Synced");
});

module.exports = app;
