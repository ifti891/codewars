// Abbreviate a Two Word Name

function abbrevName(name){

  // code away
let nameName = name.split(" ");
return nameName[0].charAt(0).toUpperCase()+'.' + nameName[1].charAt(0).toUpperCase(); 

}