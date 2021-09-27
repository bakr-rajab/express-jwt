const mongoose =require('mongoose');

const {MONGO_URL}=process.env

exports.connect=()=>{

    mongoose.connect(MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('seccessfully connected to database');
    })
    .catch((error)=>{
        console.log('db connection error ');
        console.error(error);
        process.exit(1);
    })
}
