require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const { secret } = require("./config/secret");
const PORT = secret.port || 7000;
const morgan = require('morgan')
// error handler
const globalErrorHandler = require("./middleware/global-error-handler");
// routes
const userRoutes = require("./routes/user.routes");
const userOrderRoutes = require("./routes/user.order.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const reviewRoutes = require("./routes/review.routes");

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// connect database
connectDB();

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/user-order", userOrderRoutes);
app.use("/api/review", reviewRoutes);

// root route
app.get("/", (req, res) => res.send("Apps worked successfully"));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// global error handler
app.use(globalErrorHandler);
//* handle not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

module.exports = app;
