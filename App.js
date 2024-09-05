const express = require("express");
const cors = require("cors");

const app = express();
const corsMiddleware = cors();

app.use(corsMiddleware);

app.listen(3000, () => console.log("Server running"));

