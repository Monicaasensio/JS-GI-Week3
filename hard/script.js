function createPII(name, ssn) { //PII properties as parameters
    let pii = {
        name: name, //key value pairs in object to represent persons identifiable information
        ssn: ssn
    };

    //creating a closure that can access inner pii Object
    function getName() {
        return pii.name;
    }
    return {
        getName: getName //returns object method with function to access the name
    }; //not done for ssn for privacy
}

//calling the name property through getName function method
let piiPerson = createPII("Jane Doe", "000-00-0000"); //pii object

let name = piiPerson.getName(); //closure bc getname method still has access to pii object from outside
console.log("Name:", name);


//reassigning name ?
// name = "Monica Asensio";
// console.log("Name:", name);

//creating new ppiPerson object?
// let piiPerson2 = createPII("Johnny Smith", "111-11-1111");
// console.log("Name:", name);