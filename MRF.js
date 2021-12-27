const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

  //--------------print topper--------------------

//  console.log(scores.reduce((max,curr) => max > curr.marks ? max : curr.marks ,0)); 

// console.log(scores.reduce((max,person)=>{
//   if(person.marks > max)
//     max = person.marks;
//     return person;
// },0));
 
// console.log(scores.reduce((max.marks,curr.marks) => {
//   if(max.marks>curr.marks)
//     max.marks =curr.marks;
// }) 
// );

// console.log(scores.filter((person) => Math.max(person.marks)));

let topper=scores.reduce((max,curr) => max > curr.marks ? max : curr.marks ,0);
console.log("Class Topper : " + scores[scores.findIndex(obj => obj.marks==topper)].name);

 
// average mark in the class

  console.log("Average : " + scores.reduce((sum,value)=>sum+value.marks,0)/scores.length);




//   // [32, 57, 22]
//   // Task 1
//   // Print the name list - As an array
//   // Expected Output
//   // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//   //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]

//   // for(let value in scores) {
//   //    console.log(scores[value].name);
//   // }
  
  
//   console.log(scores.map((person)=>person.name));
  
  
//   // Task 2
//   // >=40 pass.. find those student that passed (Use array method)
//   // Expected Output
//   // [{
//   //     marks: 57,
//   //     name: "Lillian Ellis"
//   //   },
//   //     {
//   //     marks: 91,
//   //     name: "Debra Beard"
//   //   },
//   //   {
//   //     marks: 75,
//   //     name: "Nettie Hancock"
//   //   }]
    
//     console.log(scores.filter((person)=>person.marks >= 40));
//   // Task 3
//   //  Find all the names who failed the exams (Array methods)
//   // Expected Output
//   //   ["Yvette Merritt",
//   //   "Mccall Carter",
//   //   "Pate Collier",
//   //   "Hatfield Hodge"
//   // ];

//   // console.log(scores.filter((person)=>person.marks <= 40).map((person)=>person.name));
  
//   const failed = scores.filter((score)=>score.marks <= 40);
//   console.log(failed.map((score)=>score.name));
  



 