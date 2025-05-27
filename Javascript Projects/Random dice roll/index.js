function dice(){

    let random = Math.floor(Math.random()*6)+1;
    console.log("The dice has shown the number : ", random);
}

for(let i=1;i<=6;i++){
dice();
}
