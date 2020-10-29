const express=require('express')
const app=express();
const port=process.env.PORT || 3000;
app.get('/',function(req,res){
	res.send("Hello. How are you. Hii");
});
app.get('/user/:link/:id',function(req,res){
	//res.send("User.");
	res.send(req.params);
});
app.listen(3000,function(){
	console.log(`Server listening on port ${port}.`);
});
