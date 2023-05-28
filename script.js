const placesList = ['Paris','Dubai','Moscow','Istanbul','Melbourne','Cairo','Rio','Helsinki','Hong Kong','Singapore','Los Angeles'];
const namesList = ['Ronaldo', 'Messi', 'Jeff Bezos', 'Imran Khan', 'LeBron James', 'the Rock', 'Ryan Renolds', 'Donald Trump'];
const verbsList = ['did nothing','went swimming','watched a football match','had dinner', 'watched a movie', 'went sightseeing'];

function randomElement(arr){
    // returns random element in array
    return arr[Math.floor(Math.random() * arr.length)];
}

function CreateMessage(){
    return `I went to ${randomElement(placesList)} with ${randomElement(namesList)} and ${randomElement(verbsList)}.`
}

console.log(CreateMessage());