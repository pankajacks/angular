var product = {
    name: "Cookies",
    obj: {
        price: 255,
        type: 'edible'
    },
    getType: function() {
        console.log("Function called");
        console.log("Product Type: " + this.obj.type);
    }
}

var subproduct = Object.create(product);

// Step 1 Example
// console.log("Child Name: " + subproduct.name);
// console.log("Child Obj.type: ", subproduct.obj.type)
// console.log("Parent Name: " + product.name);
// console.log("Parent Obj.type: ", product.obj.type)
// console.log(product);
// console.log(subproduct);

// Step 2 Example
// // name will be added to child object
// subproduct.name = "Fan";
// // type will not be added first dearch for obj which is in parent
// subproduct.obj.type = "Non-edible"; 
// console.log("Child Name: ", subproduct.name);
// console.log("Child Obj.type: ", subproduct.obj.type)
// console.log("Parent Name: ", product.name);
// console.log("Parent Obj.type: ", product.obj.type)
// console.log(product);
// console.log(subproduct);
// console.log("child obj === parent obj ? ", subproduct.obj === product.obj);


// step 3 Example
// Function constructor

function Dog(name) {
    this.name = name;
    console.log("this is: ", this);
}

var myDog = new Dog("Rocky");
console.log("myDog", myDog);

Dog("Tommy");
