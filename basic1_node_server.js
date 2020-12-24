	const express= require('express')
	const app=express()

	app.use(express.urlencoded({extended: true}))

	app.get('/',(req,res)=>{
		res.send('<h1>Hello mate</h1>')
	})
	app.get('/greet',(req,res)=>{
		let person="xyz"
		if(req.query.person)
		{
			person=req.query.person
		}
		res.send('Good Morning '+person)
	})
	app.post('/greet',(req,res)=>{
		let person="xyz"
		console.log(req.body)
		if(req.body.person)
		{
			person=req.body.person
		}

		res.send('Good Morning '+person)
	})

	app.get('/:city/:welcome',(req,res)=>{
		res.send(req.params.welcome +" to"+ req.params.city)
	})
	app.get('/:aa/:bb',(req,res)=>{
		res.send("thanks "+req.params.aa +" to"+ req.params.bb)
	})

	app.get('/form',(req,res)=>{
		 res.sendFile(__dirname+'/form.html')
	})
	app.listen(4444,()=>{
		console.log('server started on http://localhost:4444')
	})