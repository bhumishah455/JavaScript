// Immediately Invoked Function Expression(IIFE) :- use to remove global scope pollution
// want to immediately execute the function

(function chai() {
    // named iife
    console.log("DB Connected")
}) ();                // want to stop function semicolon use


//unnamed iife
( (name) =>  {
    console.log(`DB Connected Two ${name}`);
}) ("Bhumi")