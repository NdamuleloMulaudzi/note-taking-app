import express from "express";
import session from "express-session";
import LocalStrategy from "passport-local";
import passport from "passport";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import notesRoutes from "./routes/notes.routes.js"
configDotenv();

LocalStrategy.Strategy

const app = express();

app.use(bodyParser.json())

app.use(passport.session())

app.use(session({secret:"cats",resave:false,saveUninitialized:false}))

app.use(express.urlencoded({ extended: false }));


passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);



passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async (user_id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE user_id = $1", [user_id]);
    const user = rows[0];

    done(null, user);
  } catch(err) {
    done(err);
  }
});


app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);


app.use("/notes", notesRoutes)
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
