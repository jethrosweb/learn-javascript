// What are greeting and name? 
// What are "Howdy" and "James"? 
// What are num1 and num2?
// What are 3 and 4?


//.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")

//.         parameters
function add(num1, num2) {
    return num1 + num2
}
//.     arguments
add(3, 4)