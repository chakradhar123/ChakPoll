const express   =require('express'),
      app       =express(),
      mongoose=require('mongoose'),
      indexRoutes=require('./routes/indexRoutes');

app.use(express.json())
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

app.use("/",indexRoutes);

app.listen(process.env.PORT || 9000,function(){
    console.log("The ChakPoll server has started!");
});

