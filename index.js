function wakeDog(a,b) {
  console.log(`Wake ${a} the ${b}`);
  return `Wake ${a} the ${b}`;
}
function leashDog(a,b) {
  console.log(`Leash ${a} the ${b}`);
  return `Leash ${a} the ${b}`;
}
function walkToPark(a,b) {
  console.log(`Walk to the park with ${a} the ${b}`);
  return `Walk to the park with ${a} the ${b}`;
}
function throwFrisbee(a,b) {
  console.log(`Throw the frisbee for ${a} the ${b}`);
  return `Throw the frisbee for ${a} the ${b}`;
}
function walkHome(a,b) {
  console.log(`Walk home with ${a} the ${b}`);
  return `Walk home with ${a} the ${b}`;
}
function unleashDog(a,b) {
  console.log(`Unleash ${a} the ${b}`);
  return `Unleash ${a} the ${b}`;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
let output = [];

function exerciseDog(dogName, dogBreed) {

// Iterate over the routine Array
// Call each function in the array and
// pass the dogName and dogBreed received by exerciseDog() to the function as they are called
// capture the result of each function's call
// return an Array of all those functions' return values

let index = 0

  for (index = 0; index < routine.length; index++) {
      // console.log(array[index]);
      var routineToRun = routine[index];
      var outputToSave = routineToRun(dogName, dogBreed);
      output.push(outputToSave);
  }
  // console.log(output.length); // 6
  return output;
}
