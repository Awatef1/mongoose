const mongoose=require('mongoose');
const  Schema =mongoose.Schema;


const PersonSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number
    },
    favoriteFoods:{
        type:Array
    }
});
const PersonDB= mongoose.model("Person", PersonSchema);

module.exports=PersonDB