function say(message){
    message = typeof message !== 'undefined' ? message:'Hi';
    console.log(message)
}
say()
//passing default values to parameters in functions
function creatDiv(height='100px',width='100px',border='solid 1px red'){
    let div= document.createElement('div')
    div.style.height = height;
    div.style.width = width
    div.style.border =border
    document.body.appendChild(div)
    return div
}
creatDiv();
// javascript engine evaluate default arguments at the call time of the function
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']

//parameter can take a default value which is a result of a function
function date(d= today()){
    console.log("Todays date: "+d)
}
function today(){return (new Date()).toLocaleDateString('en-US')}
date()
function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3