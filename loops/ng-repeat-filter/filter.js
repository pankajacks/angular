var array = [1,2,3,4,5,6,7,8,9,10];
console.log("Array without filtering: ", array);

function filterData(val1) {
    return val1 > 5;
}

var newArray = array.filter(filterData);
console.log("Array with filtering: ", newArray);
