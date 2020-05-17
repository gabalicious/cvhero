const express = require("express");
const router = express.Router();
const request = require("request");
const passport = require("passport");
const User = require("../models/User");
const _ = require("lodash");

/* Handle Login POST */
router.post("/api/login", function(req, res) {
  console.log("route hit", Object.keys(req));
  console.log(req.body);
  passport.authenticate("local", function(err, user, info, some) {
    // If authentication failed, `user` will be set to false. If an exception occurred, `err` will be set.
    if (err || !user || _.isEmpty(user)) {
      // PASS THE ERROR OBJECT TO THE NEXT ROUTE i.e THE APP'S COMMON ERROR HANDLING MIDDLEWARE
      console.log("err", user, err, info, some);
      res.status(401);
      return res.json({ error: true });

      // return next(info);
    } else {
      // console.log("success", Object.assign(user));
      res.cookie("userID", String(user._id), {
        secure: false,
        maxAge: 90000
      });

      // console.log("req", Object.keys(req.sessionStore.state.generate));
      console.log("req", req.sessionStore.state);

      console.log("res", Object.keys(res));
      // console.log("res", res.locals);

      res.cookie("sessionID", req.sessionID, {
        secure: false,
        maxAge: 90000
      });
      return res.json({ success: true });
    }
  })(req, res);
  // res.json({ success: true });
});

router.post("/api/register", function(req, res, next) {
  console.log("registering user", req.body);
  User.register(
    new User({
      username: req.body.username || req.body.email,
      email: req.body.email || req.body.username
    }),
    req.body.password,
    function(err) {
      if (err) {
        console.log("error while user register!", err);
        return next(err);
      }

      console.log("user registered!");

      res.json({ success: true });
    }
  );
});

router.post("/api/signup", function(req, res) {
  // console.log("route hit", Object.keys(req));
  console.log(req.body);
  res.json({ success: true });
});

router.get("/api/logout", function(req, res) {
  req.logout();
  console.log(Object.keys(req));
  res.clearCookie("userID");
  res.clearCookie("session");
  res.clearCookie("sessionID");

  console.log(Object.keys(res.cookie));

  console.log("logged out");
  req.session.destroy(function(err) {
    res.redirect("/login"); //Inside a callback… bulletproof!
  });

  // return res.send();
});

module.exports = router;
