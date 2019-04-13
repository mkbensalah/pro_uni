var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./key');
const userModel = require('../modals/user');

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;
module.exports = passport => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        userModel.findById(jwt_payload.id, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user != undefined && user.length > 0) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}