//qn1
 let people = ["Mariam", "Gorret", "Joy","Robinah", "Aladina","Bena"];
 for(let value in people){
    console.log(people[value])
 }

// qn2
 let people = ["Mariam", "Gorret", "Joy","Robinah", "Aladina","Bena"];
  let x =[0]
  people.splice("Mariam")
 console.log(x)

//qn3
people.splice("Bena")
//qn4
let display=document.getElementById("root")
let people = ["Mariam", "Gorret", "Joy","Robinah", "Aladina","Bena"];
people.push("Janet")
display.innerHTML=people

//qn5
people.push("Vivian")
display.innerHTML=people

//qn6
let people = ["Mariam", "Gorret", "Joy","Robinah", "Aladina","Bena"];
console.log(people);
 for(let value in people){
    console.log(people[1]);
}

//qn7

let people = ["Mariam", "Gorret", "Joy","Robinah", "Aladina","Bena"];
let people1=people.slice(16,43);
console.log(people1);

//qn8

let people = ["Mariam", "Gorret", "Joy","Robinah", "Aladina","Bena"];

let first=people.indexOf(myfunction)

function myfunction(value,index,array) {
     return value >1;
    
}
 console.log(myfunction());

//qn10
let display=document.getElementById("root")
let people = ["Mariam", "Gorret", "Joy","Robinah", "Aladina","Bena"];
people.push("Elizabeth","Artie")
people.splice("Aladina")
display.innerHTML=people