const express=require('express');
const cors=require('cors');
const bcrypt=require('bcrypt');

const app=express();
const port=3000

// middilewares
app.use(cors());
// To access the form data in the login page
app.use(express.urlencoded({extended:true}));









app.get('/', (req,res)=>{
    console.log(req)
    res.status(200).json({message:'Successful'})
})

// app.post('/registerUser',(req,res)={
//     res.status(200).json({message: 'User Registered'})
// })

app.post('/registerUser',(req,res)=>{
    res.status(200).json({message: 'User Registered'})
})




app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})



