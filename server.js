const express = require("express");
const app = express();
const compression = require("compression");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const methodOverride = require("method-override");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

// Load config
dotenv.config({ path: "./config/config.env" });

// Passport
require("./config/passport")(passport);

// DB Connect
connectDB();

// Logger
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

// Middleware
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PATCH, DELETE, PUT",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

// Session
app.use(
  session({
    secret: "kitkat dogt",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
    cookie: {
      path: "/",
      httpOnly: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Passport middleware
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Routes here
app.use("/api", require("./controllers"));

// Server start
app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  console.log(`Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
