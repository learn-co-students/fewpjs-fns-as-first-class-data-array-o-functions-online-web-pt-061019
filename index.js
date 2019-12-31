function wakeDog(dogName,dogBreed) {
  String = `Wake ${dogName} the ${dogBreed}`
  console.log(String);
  return String;
  
}

function leashDog (a,b){
  String = `Leash ${a} the ${b}`;
  console.log(String);
  return String;
}
function walkToPark(a,b){
  String = `Walk to the park with ${a} the ${b}`;
  console.log(String);
  return String;
}
function throwFrisbee(a,b){
  String = `Throw the frisbee for ${a} the ${b}`;
  console.log(String);
  return String;
}
function walkHome(a,b){
  String = `Walk home with ${a} the ${b}`;
  console.log(String);
  return String;
}
function unleashDog(a,b){
  String = `Unleash ${a} the ${b}`;
  console.log(String);
  return String;
}

let routine = [wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog];
  
  function exerciseDog(dogName,dogBreed) {
    let msg_arr = [];
    for (let i=0; i <routine.length; i++){
      msg_arr[i] = routine[i](dogName,dogBreed) ; 
    }
    return msg_arr;
  }