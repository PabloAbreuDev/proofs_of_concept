const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Success!").status(201);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
  console.log("Closing http server.");
  // Closing th server to stop requests
  server.close(() => {
    console.log("Http server closed.");
    // Close app
    process.exit(0);
  });
});
