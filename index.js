function wakeDog(a,b) {
  console.log(`Wake ${a} the ${b}`);
}
function leashDog() {

}
function walkToPark() {

}
function throwFrisbee() {

}
function walkHome() {

}
function unleashDog() {

}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {

// Iterate over the routine Array
// Call each function in the array and
// pass the dogName and dogBreed received by exerciseDog() to the function as they are called
// capture the result of each function's call
// return an Array of all those functions' return values

const array = []

for (var i = 0; i < routine.length; i++) {
  // array.push(routine[i](dogName,dogBreed));
  routine[i](dogName, dogBreed);
}

}
