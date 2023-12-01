// In this exercise, we have names of cities in the UK, but the capitalization is not in the right place. We want to change the names to be lowercase except for the first letter, which must be capitalized. A good way to do this:

// Convert the entire string in the variable to lowercase and store it in a new variable.input
// Retrieve the first letter of the string in this new variable and store it in another variable.
// Using the last variable as a substring, replace the first letter of the lowercase string with the first letter of the lowercase string turned to uppercase. Store the result of this override procedure in another new variable.
// Change the value of the variable so that it is equal to the final result rather than .resultinput
// lonDon
// ManCHESTer
// BiRmiNGHAM
// liVERpoOL

// var list = document.querySelector('.output ul');
// list.innerHTML = '';
// var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
// for(var i = 0; i < cities.length; i++) {
//   var input = cities[i];
//   // write your code just below here
  
//   var result = input;
//   var listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }





// London
// Manchester
// Birmingham
// Liverpool

var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here
  let LowInput = input.toLowerCase();
   let first = LowInput[0];
   let newVb =LowInput.replace(first, (first.toUpperCase()));

  var result = newVb;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}




//A javascript code to print out only christmas related statements from the list below
// Happy Birthday!
// Merry Christmas my love
// A happy Christmas to all the family
// You're all I want for Christmas
// Get well soon

var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i].indexOf("Christmas") != -1) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}

// Acode to extract the first three words and last readable name after which they are concatenated
// MAN675847583748sjt567654;Manchester Piccadilly
// GNF576746573fhdg4737dh4;Greenfield
// LIV5hg65hd737456236dch46dg4;Liverpool Lime Street
// SYB4f65hf75f736463;Stalybridge
// HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here
   let codeNm = input.slice(0,2);
   let semiC=input.indexOf(";");
   let human = input.slice(semiC);
   let final = codeNm + human;
  var result = final;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

