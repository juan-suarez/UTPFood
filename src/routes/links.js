const express = require('express');
const helpers = require('../lib/helpers');
const router = express.Router();
const pool = require('../database');
let place;

router.get('/add/:place',(req,res)=>{
  place = req.params.place;
  res.render('places/add');
});

router.post('/add', async(req,res)=>{
  //console.log(req.body);
  const query = 'INSERT INTO '+place+' set ?'
  const {name , direction ,phone,open_time,end_time,url_image} = req.body;
  const query2 = "CREATE TABLE `"+name+"` (`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(45) NULL,`description` VARCHAR(45) NULL,`price` FLOAT NULL,`lugar` VARCHAR(45) NULL,`url_image` VARCHAR(45) NULL,PRIMARY KEY (`id`))";
  await pool.query(query2);
  //await pool.query(query3);
  const newlink = {
    name ,
    direction ,
    phone,
    open_time,
    end_time,
    url_image,
  }
  await pool.query(query,[newlink]);
  //console.log('creado');
  res.redirect('/links/');
});


router.get('/remove/:place',async(req,res)=>{
  place = req.params.place;
  const query = 'SELECT * FROM ' + place;
  const links = await pool.query(query, function(error,results,fields){
    if (error) throw error;
    const restaurant = results;
    //console.log(restaurant);
    res.render('places/remove',{restaurant});
   });
  //res.render('places/removeRestaurant',{ restaurant });
});

router.post('/remove', async(req,res)=>{
  const query = 'DELETE FROM '+place+' WHERE id = ?;';
  //console.log(req.body);
  const {lugar, description} = req.body;
  const query2 = 'SELECT name FROM '+place+' WHERE id = '+lugar+';';
  const links = await pool.query(query2 , function(error,results,fields){
    if (error) throw error;
    const query3 = 'DROP TABLE '+ results[0].name+';';
    pool.query(query3);
    console.log(query3);
    pool.query(query,lugar);
  });
  res.redirect('/links/');
});

router.get('/addproduct/:place',async(req,res)=>{
  place = req.params.place;
  const query = 'SELECT * FROM ' + place;
  const links = await pool.query(query, function(error,results,fields){
    if (error) throw error;
    const lugar = results;
    res.render('places/addproduct',{lugar});
   })

});
router.post('/addproduct',async(req,res)=>{
  const {name , description ,price,lugar,url_image} = req.body;
  const newlink = {
    name,
    description,
    price,
    lugar,
    url_image
  };
  const query = 'SELECT * FROM ' +place+ ' WHERE id = '+ lugar;
  let restaurant;
  const links = await pool.query(query, async function(error,results,fields){
    if (error) throw error;
    restaurant = results;
    console.log(restaurant);
    const query2 = 'INSERT INTO `'+restaurant[0].name+'` set ?';
    console.log(query2,newlink);
    await pool.query(query2,newlink);
  })
  res.redirect('/links/');
});
router.get('/removeproduct1/:place',async(req,res)=>{
  place = req.params.place;
  const query = 'SELECT * FROM ' + place+';';
  const links = await pool.query(query, function(error,results,fields){
    if (error) throw error;
    const lugar = results;
    //console.log(lugar);
    res.render('places/removeproducts1',{lugar});
   })
});
router.post('/removeproduct1', async(req,res)=>{
  //console.log(req.body);
  const {lugar} = req.body;
  const newlink = {
    lugar
  }
  res.redirect('/links/removeproduct2/'+ lugar);
});


router.get('/removeproduct2/:lugar',async(req,res)=>{
  const lugar = req.params;
  const query = 'SELECT * FROM ' + lugar.lugar+';';
  console.log(query);
  const links = await pool.query(query, function(error,results,fields){
    if (error) throw error;
    const product = results;
    //console.log(lugar);
    res.render('places/removeproducts2',{product ,lugar});
   })
});

router.post('/removeproduct2/:lugar',async(req,res)=>{
  const lugar = req.params;
  const query = 'DELETE FROM '+lugar.lugar+' WHERE id = ?;';
  console.log(req.body.product);
  console.log(query);
  pool.query(query,req.body.product);
  res.redirect('/links/');
});

router.get('/', async(req,res)=>{
  res.render('places/main');
});

router.get('/index', async(req,res)=>{
  const query = 'SELECT * FROM restaurants';
  const links = await pool.query(query, async function(error,restaurants,fields){
    if (error) throw error;
    const hola = await pool.query('SELECT * FROM markets',async function(error1,markets,fields1){
      if (error1) throw error1;
      const hola2 = await pool.query('SELECT * FROM pharmacies',async function(error2,pharmacies,fields2){
        if (error2) throw error2;
        const hola3 = await pool.query('SELECT * FROM cart',async function(error3,cart,fields3){
          if (error3) throw error3;
          //console.log(restaurants,markets,pharmacies,cart);
          const restaurant = restaurants[getRandom(0,restaurants.length)];
          const market = markets[getRandom(0,markets.length)];
          const pharmacie = pharmacies[getRandom(0,pharmacies.length)];
          var hide = '';
          const hide2 = 'd-none';
          if(cart.length === 0)
            hide = 'd-none';
          res.render('index/index',{restaurant,market,pharmacie,cart,hide,hide2});
        });
      });
    });
   })
  
});

router.post('/search', async(req,res)=>{
  const {search} = req.body;
  const query = 'SELECT * FROM restaurants WHERE name = "' + search +'"';
  const links = await pool.query(query, async function(error,restaurants,fields){
    if (error) throw error;
    const hola = await pool.query('SELECT * FROM markets WHERE name = "' + search +'"',async function(error1,markets,fields1){
      if (error1) throw error1;
      const hola2 = await pool.query('SELECT * FROM pharmacies WHERE name = "' + search +'"',async function(error2,pharmacies,fields2){
        if (error2) throw error2;
        const hola3 = await pool.query('SELECT * FROM cart',async function(error3,cart,fields3){
          if (error3) throw error3;
          var hide = 'd-none';
          var hide2='';
          if(restaurants.length === 0 && markets.length === 0 && pharmacies.length === 0)
            hide = '';
          if(cart.length === 0)
            hide2 = 'd-none';
          res.render('index/search',{restaurants,markets,pharmacies,cart,hide,hide2});
        });
      });
    });
  });
});

router.get('/place/:lugar', async(req,res)=>{
  console.log(req.params);
  const lugar=req.params.lugar
  const query = 'SELECT * FROM '+lugar ;
  const links = await pool.query(query, async function(error,result,fields){
    if (error) throw error;
    const hola3 = await pool.query('SELECT * FROM cart',async function(error3,cart,fields3){
      if(error3)throw error3;
      let hide = '';
      if(cart.length === 0)
            hide = 'd-none';
      console.log(result)
      res.render('index/place',{result,cart,hide});
    });
   });
});

router.get('/placeproduct/:lugar/:lugaar',async(req,res)=>{
  const lugar=req.params.lugar;
  const lugaar = req.params.lugaar;
  const query = 'SELECT * FROM '+lugar ;
  const links = await pool.query(query, async function(error,result,fields){
    if (error) throw error;
    const hola3 = await pool.query('SELECT * FROM cart',async function(error3,cart,fields3){
      if(error3)throw error3;
      let hide = '';
      if(cart.length === 0)
            hide = 'd-none';
      console.log(result)
      res.render('index/placeproduct',{result,cart,hide,lugaar});
    });
   });
});
router.post('/addcart/:product/:place/:lugaar',async(req,res)=>{
  const product=req.params.product;
  const lugar = req.params.place;
  const lugaar = req.params.lugaar;
  const links = await pool.query('SELECT * FROM '+lugaar+'WHERE ID = '+place, async function(error,result,fields){
    const links = await pool.query('SELECT * FROM '+result[0].name+'WHERE name = "'+product+'"', async function(error,result1,fields){
      console.log(result1);
    });
  });
});
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
router.get('/signup',async(req,res)=>{
  const hide = 'd-none';
  res.render('auth/signUp',{hide});
});
router.post('/signup',async(req,res)=>{
  const {user,eamil,password,confirmpassword} = req.body;
  console.log(user);
  if(password === confirmpassword){
    newuser = {
      username:user,
      password
    };
    newuser.password = await helpers.encryptPassword(password);
    const query = 'INSERT INTO users set ?';
    await pool.query(query,newuser);
    const msg = 'Cuenta creada con exito, Bienvenido.';
    res.redirect('/links/index');
  }
  else{
    const msg = 'Ups! las contraseñas no cionciden';
    res.render('auth/signUp',{msg});
  }
});
router.post('/login',async(req,res)=>{
  const {user,password} = req.body;
  console.log('SELECT * FROM users WHERE username = "'+user+'"');
  const links = await pool.query('SELECT * FROM users WHERE username = "'+user+'"', async function(error,result,fields){
    console.log(result);
    if(result.length > 0){
      const match = await helpers.matchPassword(password,result[0].password);
      if(match){
        if(user === 'admin')
          res.redirect('/links/');
        else
          res.redirect('/links/index');
      }
      else{
        const msg = 'Contraseña incorrecta!'; 
        res.render('auth/signUp',{msg});
      }
    }
    else{
      const msg = 'Usuario no encontrado';
      res.render('auth/signUp',{msg});
    }
  });
});
module.exports = router;