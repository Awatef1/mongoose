const express = require("express");
const connectDB = require ("./DB/connectDB")
const PersonDB = require("./Model/model")

const app = express();

const PORT =3000;

// new person 

//const Person = new PersonDB( { name:"mohamed", age:31, favoritfood:"spaghetti"})
//Person.save ((err)=>{
   // if (err) return handleError(err)
    //save
//})

//Find All
//const search = async()=>{
   //try{
//const data = await PersonDB.find({});
//console.log(data)
  //  }
    //catch(err){
    //console.log(err)
   // }
 //}
//search()

//Find one
//const search = async()=>{
   // try{
//const data = await PersonDB.find({name:"awatef"});
//console.log(data)
    //}catch(err){
        //console.log(err)
    //}
//}
//search()
//Find by id
//const search = async()=>{
// try{
//const data = await PersonDB.findById({_id:"61277bd8253ed2811815cb73"});
//console.log(data)
    //}catch(err){
        //console.log(err)
  // }
//}
//search()


//Find One Person which has a certain food in the person's favorites
//const search = async() => {
   // try {
    // const data = await PersonDB.findOne({favoritfood: ["Soupe"]})
    //console.log(data)
  // } catch (err) {
       //console.error(err)
  //}
//}
//search()

//const query ={name:"sami"}
//const UpdatePerson= async()=>
//{
     //await PersonDB.findOneAndUpdate(query,{name:"sarra"},(err,data)=>{
       // try{
//console.log("update")
       // } catch (err){
       //    console.log(err) 
      //  }
    //})
//}
//UpdatePerson()


//Fin one delet
//const Delete = async()=>{
    //await PersonDB.findOneAndDelete({_id:"6128922da62f931eed1e07cb"}, (err,data)=>{
        //try{
//console.log("removed Data",data)
        //}catch(error){
           // console.log(err)
       // }
   // })
//}

//Delete()


//Delete Many Documents with model.remove()

//const DeletePerson = async() => {
  //   const res = await PersonDB.remove({name: "awatef"}, (err, data) => {
         //try {
           // console.log("Persons removed ")
        // } catch (err) {
           // console.error(err) 
         //}
     //})
 //}
 // DeletePerson()

  //_Find people who like pizza

//const chainSearch = async() => {
    //try {
    //  const data = await PersonDB.find({favoriteFoods: {$elemMatch: {$eq: "pizza"}}}).sort({name: 'sarra'}).limit(2).select({age: 0, __v: 0}).exec()
          //console.log(data)
 //   } catch (err) {
    //    console.error(err)
  //  }
//}
//chainSearch()


connectDB()

app.listen(PORT,(err)=>{
    err?
    console.log(err)
    : console.log(`server is ruuning in ${PORT}...`)
}
)