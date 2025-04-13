const express = require("express");
const app = express();

const userRouter = require("./User.js");
app.use(userRouter);

const paymentRouter = require("./payment.js");
app.use(paymentRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});