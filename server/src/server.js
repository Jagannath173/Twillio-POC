const http = require("http");
const app = require("./app");
const registerRoutes = require("./routes/video.routes");
const initWebSocket = require("./websocket/websocket");
const { PORT } = require("./config/env");

const server = http.createServer(app);
initWebSocket(server);

server.listen(PORT, () => {
  console.log(` Backend running on port on that things ${PORT}`);
});
