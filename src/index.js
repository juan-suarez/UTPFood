const express = require('express');
const morgan = require('morgan');
const  {engine} = require('express-handlebars')
const path = require('path');
const { dirname } = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const mysql_store = require('express-mysql-session');
const passport = require('passport');

const {database} =require('./keys');
//inicializacion 

const app = express();
require('./lib/passport');
//settings

app.set('port',process.env.PORT || 4000)
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');

//middlewares
// app.use(session({ 
//   secret:'holamundo',
//   resave:false,
//   saveUninitialized:false,
//   store: new mysql_store(database)
// }));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());

//global variables

app.use((req,res,next)=>{
  next();
});

//routes

app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

//public

app.use(express.static(path.join(__dirname,'public')))

//starting server

app.listen(app.get('port'),() => {
  console.log('server on port',app.get('port'));
});