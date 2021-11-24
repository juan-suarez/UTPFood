const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.singin', new LocalStrategy({
  usernameField:'user',
  passwordField:'password',
  passReqToCallback: true
},async (req,username,password,done)=>{
  const query = 'SELECT * FROM users WHERE username = "' + username+'"';
  const rows = await pool.query(query,async function(error,result,fields){
    if(result.length > 0){
      const user = result[0];
      const validpassword = await helpers.matchPassword(password,user.password);
      if(validpassword){
        done(null,user,req.flash('Bienvenido'));
      }
      else{
        done(null,false,req.flash('Bienvenido'));
      }
    }
    else{
      return done(null,false);
    }
  });
}
));

passport.use('local.signup',new LocalStrategy({
  usernameField:'user',
  passwordField:'password',
  passReqToCallback: true
},async (req,username,password,done)=>{
  const newuser = {
    username,
    password 
  };
  newuser.password = await helpers.encryptPassword(password);
  const result = await pool.query('INSERT INTO users set ?',[newuser]);
  return done(null, newuser);
}
));

passport.serializeUser((user,done)=>{
  console.log('hola1');
  done(null , user.username);
});
passport.deserializeUser(async (name,done)=>{
  const query = 'SELECT * FROM users WHERE username = "' + name+'"';
  const rows = await pool.query(query,async function(error,result,fields){
    done(null,result[0]);
  });
})