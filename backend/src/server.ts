import express = require('express');
import {MintController} from "./api";
import path = require('path');
import dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT ?? 3000;

// Load environment variables
const envFilePath = path.resolve(__dirname, "./.env");
dotenv.config({ path: envFilePath });

if (!process.env.OPENFORT_SECRET_KEY) {
    throw new Error(
      `Unable to load the .env file. Please copy .env.example to ${envFilePath}`
    );
  }

app.post('/mint', new MintController().run);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});