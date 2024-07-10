const app = require("./app");
const PORT = 3001;
const { conn } = require("./db");

conn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
