let todo = []; // Create an empty array
let req = prompt("Please Enter Your Request"); // take a input from user and store it in a variable named req

// Use while loop becuase we weant our task to run infinite time unleass typed quit.
while(true){             

    // most important command beacuse of this we can exit the loop
if(req == "quit"){
    console.log("Quitting To-Do");
    break;
}

// to show the item of the list and if we have to show each element we have to use loop
if(req == "list"){
    console.log("---------------------------------------------"); // to add a line before printing the task

    for(let i=0;i<todo.length;i++){
        console.log(i, todo[i]);    // it will print index position and element on that index position bcz of index we can get help in deleting the element.
    }

    console.log("---------------------------------------------"); // to add a line after showing the list
}

else if(req == "add"){  

let vari = prompt("Please enter the task you want to add");  // take a input from user to add something and then stored in a variable
           todo.push(vari);   // pushed the variable into the empty array
           console.log("Task Added Successfully"); // after pushing showing text so we will know our task is pushed
}
else if(req == "delete"){           
    let idx = prompt("please enter the task index"); // asking for a index position from user and then store the position in idx variable
    todo.splice(idx, 1);       // used to delete , replace, add in an array so in this case we have to delete so idx used as out starting point then 1 means we have to delete 1 element after reaching idx position which means the same idx element
    console.log("task deleted"); 
}
else{
    console.log("Wrong request"); // if user write other request than the upper which we have provided options
    
}
req=prompt("Please Enter Your Request"); // again asking request value and then stored in req variable


}

