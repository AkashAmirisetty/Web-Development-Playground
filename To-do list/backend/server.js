const express=require('express');
const app=express();
const cors=require('cors');
const mysql=require('mysql2');
app.use(cors());
app.use(express.json());


const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'######',
    database:'todo'
})

db.connect((err)=>{
    if (err){
        console.log('error connecting to the database');
        return
    }
    console.log('connected to database');

})


app.get('/',(req,res)=>{
    // res.send('Default route');
    db.query('select * from todoItems',(err,result)=>{
        if (err){
            console.log('error occured',err);
            return
        }
        console.log('Data: ',result)
    res.json(result);
    })
})

app.post('/add-item',(req,res)=>{
    console.log(req.body);
    db.query(`insert into todoItems(itemDescription) values ('${req.body.text}')`, (err, results)=>{
        if (err){
            console.log('error occured',err);
            return
        }
        console.log('created successfully')
    })
    res.send('Added successfully')

})
app.put('/edit-item',(req,res)=>{
    console.log('Line 51:', req.body)
    db.query(`update todoItems set itemDescription='${req.body.itemDescription}' where ID=${req.body.ID};`, (err, results)=>{
        if (err){
            console.log('error occured',err);
            return
        }
        console.log('created successfully')
    })
    res.send('success')
});

app.delete('/delete-item/:ID',(req,res)=>{
    const ID= req.params.ID;
    const sql = 'DELETE FROM todoItems WHERE ID = ?';
    db.query(sql, [ID], (err, results) => {
        if (err) {
            console.error('Error occurred:', err);
            return res.status(500).send('Error deleting item');
        }
        console.log('Deleted Successfully');
        res.status(200).send('success')
    });

})




app.listen(3000,()=>{
    console.log('Listening to port 3000')
})