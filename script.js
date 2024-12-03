//Fizz Buzz
/*let i=1;
for(i=1; i<=100; i++){
    if(i%3 == 0 && i%5 ==0){
        console.log("Fizz Buzz");
    }
    else if(i%3 == 0){
        console.log("Fizz");
    }
    else if(i%5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}*/
//Feeling Loopy
/*let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

//let cell=[cell1, cell2, cell3, cell4];
let cell = "";

for (let i = 0; i <= str.length; i++) {

    if (str[i] !== "\n") {

        cell += str[i];
    }

    else {
        console.log(cell);
        cell = "";
    }

}
console.log(cell);// includes the last line*/


//prime number

let count = 0
let i, j
for (j = 24; j <= 100; j++) {
    for (i = 1; i <= j; i++) {
        if (j % i == 0) {
            count++;
        }
    }

    if (count == 2) {
        console.log(j);
        break;
    }
    count = 0;

}