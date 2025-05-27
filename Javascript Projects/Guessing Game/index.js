// for  asking user for a max num so that we can get a range
let max=prompt("Enter the max number"); 

// for generating random number and store it in random variable
let random = Math.floor(Math.random()*max)+1; 

// asking user to guess a number so that we can compare it with our random number
let num = prompt("Guess a number");            

while(true){

    // starting me hi koi quit likhde toh directly bahar aane ke liye
    if(max == "quit" || num =="quit"){         
        console.log("Quitting the game");
        break;
    }
    
    if(num == random){    // checking our number is equal to random no. or not

        console.log("You win and your number is : " , num);   // if number is same then print the number 
        break;
    } 

    else{
    num=prompt("Guess again ");// if not same,again guess a number and then store it in num then process repeat                             
    }
}



