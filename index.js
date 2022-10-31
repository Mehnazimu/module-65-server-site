const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors =require('cors');
const app =express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// user:bduser2
// paassword:SOSayK6m4Hfz2FqR



const uri = "mongodb+srv://bduser2:SOSayK6m4Hfz2FqR@cluster0.sn1j5xu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        const userCollection = client.db('nodeMongoCrud').collection('users');
        const user={
            name: 'testing',
            email: 'testing@gmail.com'

        }
        const result = await userCollection.insertOne(user);
        console.log(result);

    }
    finally{

    }
}
run().catch(err=> console.log(err));

app.get('/', (req,res)=>{
    res.send('Hello from node mongo crud server');
});
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})