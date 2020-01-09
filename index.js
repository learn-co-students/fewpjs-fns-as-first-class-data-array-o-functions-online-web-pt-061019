function wakeDog(dogName, dogBreed) {
  const wakeDogPhrase = `Wake ${dogName} the ${dogBreed}`
  console.log(wakeDogPhrase)
  return wakeDogPhrase
}

function leashDog(dogName, dogBreed) {
  const leashDogPhrase = `Leash ${dogName} the ${dogBreed}`
  console.log(leashDogPhrase)
  return leashDogPhrase
}

function walkToPark(dogName, dogBreed) {
  const walkToParkPhrase = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(walkToParkPhrase)
  return walkToParkPhrase
}

function throwFrisbee(dogName, dogBreed) {
  const throwFrisbeePhrase = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(throwFrisbeePhrase)
  return throwFrisbeePhrase
}

function walkHome(dogName, dogBreed) {
  const walkHomePhrase = `Walk home with ${dogName} the ${dogBreed}`
  console.log(walkHomePhrase)
  return walkHomePhrase
}

function unleashDog(dogName, dogBreed) {
  const unleashDogPhrase = `Unleash ${dogName} the ${dogBreed}`
  console.log(unleashDogPhrase)
  return unleashDogPhrase
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  return routine.map(activity => activity(dogName, dogBreed))
}