
// let btn1 = document.querySelector("#btn1")

// btn1.onclick = () =>
// { console.log("btn was clicked");
//     let a = 1 ;
//       a++ ;
//     console.log(a);
    
// }

// let btn2= document.querySelector("#newbtn");

// let currMode = "light" ;

// btn2.addEventListener( "click" , () => 
// {
//     if( currMode === "light")
//         { currMode = "dark";
//             document.querySelector("body").style.background = "Black";
//         }
        

   
//    else  { currMode = "light";
//     document.querySelector("body").style.background = "white";
// }})






let btn = document.querySelector(".btn");
let currentmode = "light" ;

btn.addEventListener("click", () => {
    if(currentmode === "light"
    ){
        currentmode = "Dark"
        document.querySelector("body").style.background = "black";
    }
    else {
        currentmode = "light";
        document.querySelector("body").style.background = "white"

    }

})




















// btn2.addEventListener("click", () => {
//     document.body.style.background = "black";
    
// });
// btn2.addEventListener("dblclick", () => {
//     document.body.style.background = "white";
    
// });






















// let marks = [98 ,12 ,22,33,44] ;
// console.log(marks);

// let Heroes = ["ironman" ,"batman ", "superman", "thor" ,"hulk"]

// for ( let idx = 0; idx < Heroes.length; idx++ ){
//     console.log(Heroes[idx]);
// }

// let cities = ["Rewa" , "Satna", "Patna" ,"Mumbai","Indore"]

// for (let city of cities){
//     console.log(city.toUpperCase()
//     );
    
// }

// let sum = 0;
// for (let val of marks ){
//     sum = sum + val
     
// } 

// console.log(sum)

// for (let value of items{
//     offer = value/10;
//     val= val-offer;
// })


// let items = [250,645,300,900,50]
// let i = 0;
// for (let val of items){
//     console.log(
//         `value at index ${i} = ${val}`);
//         let offer = val/10 ;
//         items[i] = items[i]-offer ;
//         console.log(`value after offer = ${ items[i] }`);
        
//         i++;
//     }

    // let companies = ["bloomberg" ,"Microsoft","Uber","Google ","IBM","Netflix"];

    // companies.shift();

    // companies.splice(2,0,"ola ")

    // companies.push("Amazon")

    console.log("hello");
    "hello".toUpperCase();


[1,2,3].push(4);


function myFunction(){
    console.log("Gaurav is great");
    console.log("superman is also great");
    console.log("Gaurav is great");
    console.log("superman is also great");
    
}


// myFunction();
// myFunction();


// function sum(x ,y){
//    console.log(x + y);
   
// }

// sum(5 ,8)

// // sum function
// function mul(x ,y){
//     console.log(x*y);
    
// }

// mul(5,8)

function countVowels(str) {
    let count = 0;
    for (const char of str){
    if (char === "a" || char === "e"|| char === "i"||char==="o" || char === "u"){

    
        count++
   }
    }
        console.log(count);
        
}


let num = [ 11,22,33,44 ,55,66];

num.forEach((num) =>{
    console.log(num*num);
    
});

let newArr = num.filter((val) =>{
    return val >= 55 ;   
})

console.log(newArr);

let marks = [99,56,84,86,79,90,96,85]

let passing = marks.filter((val) =>{
            return val >= 85 ;
})

console.log(passing)