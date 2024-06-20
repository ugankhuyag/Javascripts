let fruit1 = "banana";
if(fruit1 === "apple"){
    console.log("apples are red or green")
} else if (fruit === "banana") {
    console.log("bananas are yellow")
} else if (fruit === "orange"){
    console.log("oranges are orange")
} else {
    console.log("unknown fruit")
}

let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("apples are red or green");
        break;    
    
    case "banana":
        console.log("bananas are yellow");
        break;    
            
    case "orange":
        console.log("oranges are orange");
        break;    
        
    default:
        console.log("unknown fruit");
        break;    
}