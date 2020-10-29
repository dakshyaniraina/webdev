const express=require('express')
const app=express();
app.get('/',function(req,res){
	res.send("Hello. How are you.");
});
app.get('/user/:link/:id',function(req,res){
	//res.send("User.");
	res.send(req.params);
});
app.listen(3000,function(){
	console.log("Server listening on port 3000.");
});
