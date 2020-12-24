const express=require('express')
const app=express() 
app.use(express.urlencoded({extended:true}))

let tasks=[
		'first task'
]
app.get('/',(req,res)=>{
	let listoftask=tasks.map(t=>`<li>${t}</li>`).join('\n')
	res.send(`
		<html>
		<body>
				<form action="/" method="post">
						<input name="newtask">
						<button type="submit">ADD</button>
				</form>
				<ul>
						${listoftask}
				</ul>
		</body>
		</html>
	`)
})

app.post("/",(req,res)=>{
	tasks.push(req.body.newtask)
	res.redirect('/')
})

app.listen('9999',()=>{
	console.log("Started")
})