//1.
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];
//"Max", "Purple", "dog", are matches..."HAS" would be, No Match.
function findWords(dog_string, dog_names) {
    const matched_name = dog_names.filter
      dog_string.toLowerCase().includes(name.toLowerCase());
      
    if (matched_name.length > 0) {
        matched_name.forEach(name => console.log(`Matched ${name}`));
    } else {
      console.log("No Matches");
    }
  }

//2.
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

function replaceEvens(arr){
    // For Loop to get all names
    // And replace even indexes
    for(let i = 0; i < arr.length; i+=2){
        if(i % 2 == 0){
            result.push("even index");
            arr.splice(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])
        }
    }
    return arr
}




//3.
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
    return (flower1 % 2 === 0) !== (flower2 % 2 === 0);
  }
  
  const flower_timmy = 8;
  const flower_sarah = 7;
  console.log(lovefunc(flower_timmy, flower_sarah)); 
  





//4.
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord(boolean) {
    return boolean ? "Yes" : "No";
  }
  
  console.log(boolToWord(true));   
  console.log(boolToWord(false));  
  

