const express = require("express");
const cors = require("cors");

const app = express();
videoRoutes = require("./routes/video.routes")

app.use(cors());
app.use(express.json());

app.use('/video', videoRoutes);

app.get("/health", (_, res) => {
    res.json({ status: "OK", service: "AI Live Assistant vadvadvadvnsa" });
});

module.exports = app;
