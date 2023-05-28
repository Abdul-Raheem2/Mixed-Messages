//console.log('test');

const placesList = ['Paris','Rome','London','Istanbul','Melbourne','Cairo','Rio','Islamabad'];
const namesList = ['Bob','Jim','Jeff','John','Tom','Alex','David'];
const verbsList = ['did nothing','went swimming','watched a football match','had dinner'];

function randomElement(arr){
    // returns random element in array
    return arr[Math.floor(Math.random() * arr.length)];
}

function CreateMessage(){
    return `I went to ${randomElement(placesList)} with ${randomElement(namesList)} and ${randomElement(verbsList)}.`
}

console.log(CreateMessage());