
const mysql = require('mysql');
// const { config } = require('process');
// konfig
const connection = mysql.createConnection({
  host : "localhost",
  database : "mastersbookdb",
  user : "siteFindigBase",
  password : "humansedrexstep",
  port : "3306"
});
connection.connect(function(err){
  if(err){
    return console.log("blya pizdec")
  }else{
    console.log("ne pizdec")
  }
}
)

let savedClass =  localStorage.getItem("savedClass");
let image = localStorage.getItem("image")
let stats =[];
for (i=0; i<6; i++){
  stats[i] = localStorage.getItem(`stats${i}`)
}
// let select = `SELECT * FROM hero WHERE ${}`;
// let deleteElement = `DELETE FROM hero WHERE ${}`;
// ${savedClass}, ${image}, ${stats[0]}, ${stats[1]}, ${stats[2]}, ${stats[3]}, ${stats[4]}, ${stats[5]}
let addElement = `INSERT INTO hero (class, image, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES (${savedClass}, ${image}, ${stats[0]}, ${stats[1]}, ${stats[2]}, ${stats[3]}, ${stats[4]}, ${stats[5]})`;
connection.query(addElement,(err, result, field)=>{
  console.log(err)
  console.log(result)
  // console.log(field)
});
connection.end(function(err){
  if(err){
    return console.log("blya pizdec")
  }else{
    console.log("ne pizdec")
  }
}
)
// module.exports ={databaseOptions: databaseOptions}
// conn.connect( options: err => {
//   if(err){
//     console.log('error');
//   }
//   else {
//     console.log('DB -- Ok');
//   }
// });
