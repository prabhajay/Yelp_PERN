require("dotenv").config();
const express=require('express');
const db=require("./model/index.js")

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

/*app.listen(on=>{
console.log(`Server is started ${port}`);
});*/

app.post("/api/restaurants",async(req,res)=>{
    try{
        console.log(req.body)
        const result=await db.query("INSERT INTO restaurants (name,location,price_range) VALUES($1,$2,$3)",[req.body]);
        console.log(result);
        res.status(200).json({
            status:"success",
            result:result.rows.length,
            data:{
                restaurants:result.rows
            },
        });
    }
    catch(err)
    {
        console.log(err);
    }
});
app.get("/api/restaurants",async(req,res)=>{
    try{
        const result=await db.query("select * from restaurants");
        console.log(result);
        res.status(200).json({
            status:"success",
            result:result.rows.length,
            data:{
                restaurants:result.rows
            },
        });
    }
    catch(err)
    {
        console.log(err);
    }
});

app.get("/api/restaurants/:id",async(req,res)=>{
    console.log(req.params.id);
    try{
        const result=await db.query(`select * from restaurants where id=${req.params.id}`);
        console.log(result);
        res.status(200).json({
            status:"success",
            result:result.rows.length,
            data:{
                restaurants:result.rows[0]
            },
        });
    }
    catch(err)
    {
        console.log(err);
    }
});

app.delete("/api/restaurants/:id",async(req,res)=>{
    console.log(req.params.id);
    try{
        const result=await db.query(`select * from restaurants where id=${req.params.id}`);
        console.log(result);
        res.status(200).json({
            status:"success",
            result:result.rows.length,
            data:{
                restaurants:result.rows
            },
        });
    }
    catch(err)
    {
        console.log(err);
    }
});

app.put("/api/restaurants/:id",async(req,res)=>{
    console.log(req.params.id);
    try{
        const result=await db.query(`select * from restaurants where id=${req.params.id}`);
        console.log(result);
        res.status(200).json({
            status:"success",
            result:result.rows.length,
            data:{
                restaurants:result.rows
            },
        });
    }
    catch(err)
    {
        console.log(err);
    }
});

app.use((req,res)=>{
    console.log("Hello middleware")
});

app.listen(port,()=>{
    console.log(`Server is started ${port}`);
});


