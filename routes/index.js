var express = require('express');
var router = express.Router();

//passport liberaries
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    /*
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
    */
    var user = {
      username: "koms",
      password: "testabc123",
      name: "Mark Samaniego"
    };

    if(username === "koms" && password==="testabc123") {
      return done(null, user);
    }
    else {
      return done(null, false, {message: 'Incorrect username or password!'});
    }
  }
));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tanay Advunture Camp' });
});


router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

module.exports = router;
