const websocket = require("ws");

module.exports = function initWebSocket(server) {
    const wss = new websocket.Server({ server });

    wss.on("connection", (ws) => {
        console.log("New Client Connected");

        ws.on("message", (data) => {
            try {
                const message = JSON.parse(data.toString());
                console.log("Received message:", message);

                if (message.event === "media") {
                    console.log("Media event data", message.data);
                }

                if (message.event === "start") {
                    console.log("Media stream started");
                }

                if (message.event === "stop") {
                    console.log("Media stream stopped");
                }
            } catch (error) {
                console.error("Error parsing message:", error);
            }
        })

        ws.on("close",()=>{
            console.log("Client Disconnected")
        })
    })
}