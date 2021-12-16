const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');

const mongoose = require('mongoose');


app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

var bodyParser = require('body-parser')
 
//var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://admin:madowls@cluster0.mw3qb.mongodb.net/myprofiles?retryWrites=true&w=majority'

mongoose.connect(myConnectionString,{useNewUrlParser: true});

const Schema = mongoose.Schema;

var profileSchema = new Schema({
    Met: String,
    Minutes: String,
    Weight: String,
   
    Calories: String
});

var ProfileModel = mongoose.model("profiles",profileSchema);



app.get('/api/profiles',(req,res) =>{
    
    // const  myprofiles = [
    //     {
    //         "Met" : "444",
    //         "Minutes": "30",
    //         "Weight": "80",
    //         "Calories": "300"
    //     },

    //     {
    //         "Met" : "500",
    //         "Minutes": "60",
    //         "Weight": "90",
    //         "Calories": "600"
    //     },

    //     {
    //         "Met" : "300",
    //         "Minutes": "20",
    //         "Weight": "50",
    //         "Calories": "200"
    //     }
    // ];

    ProfileModel.find((err,data)=>{
        res.json(data);
    })

    // res.json({profiles:myprofiles});
})


app.get('/api/profiles/:id',(req,res)=>{

    ProfileModel.findById(req.params.id,(err,data)=>{
        res.json(data);
    })
})


app.put('/api/profiles/:id',(req,res)=>{
    console.log("update movie:" + req.params.id);

    console.log(req.body);

    ProfileModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
        (err,data)=>{
            res.send(data);
        })
})


app.delete('/api/profiles/:id',(req,res)=>{
    console.log("Delte Movie:" + req.params.id)

    ProfileModel.findByIdAndDelete(req.params.id,(err,data)=>{
        res.send(data);
    })
})


app.post('/api/profiles',(req,res)=>{
console.log('Movie Recieved');
console.log(req.body.Met);
console.log(req.body.Minutes);
console.log(req.body.Weight);
console.log(req.body.Calories);

ProfileModel.create({
    Met: req.body.Met,
    Minutes: req.body.Minutes,
    Weight: req.body.Weight,
   
    Calories: req.body.Calories
})

res.send('Profile Added');

})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})