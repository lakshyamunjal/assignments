// OR operation is distinct elements of A or B.
const orOperation = function (arrayA, arrayB) {
    const output = new Set([...arrayA, ...arrayB]);
    return [...output];         // convert set to array and return it.

    // For BONUS 2, we can return a sorted array from this function
    // return output.sort((value1, value2) => {
    //     return value1 - value2;
    // });
}

// If value is found in both array A and array B, include it in output.
const andOperation = function (arrayA, arrayB) {
    let output = [];
    const lengthA = arrayA.length;
    const lengthB = arrayB.length;

    if (lengthA > lengthB) {
        // avoid duplicates also
        output = arrayA.filter((value) => arrayB.includes(value) && output.includes(value) == false);
    } else {
        // avoid duplicates also
        output = arrayB.filter((value) => arrayA.includes(value) && output.includes(value) == false);
    }

    return output;

    // For BONUS 2, we can return a sorted array from this function
    // return output.sort((value1, value2) => {
    //     return value1 - value2;
    // });
}

// elements that are in A but not in B
const minusOperation = function (arrayA, arrayB) {
    const output = arrayA.filter((value) => {
        return !arrayB.includes(value);
    });
    
    return output;

    // For BONUS 2, we can return a sorted array from this function
    // return output.sort((value1, value2) => {
    //     return value1 - value2;
    // });
}

// BONUS 1
const elementInOnlyOneArray = function (arrayA, arrayB) {
    // (A OR B) - (A and B)
    const output = orOperation(arrayA, arrayB);
    const output2 = andOperation(arrayA, arrayB);
    const result = minusOperation(output, output2);

    return result;
    
    // For BONUS 2, we can return a sorted array from this function
    // return result.sort((value1, value2) => {
    //     return value1 - value2;
    // });
}

const operationOnArray = function (arrayA, arrayB, operator) {
    let output = [];
    switch (operator) {
        case "OR":
            output = orOperation(arrayA, arrayB);
            break;

        case "AND":
            output = andOperation(arrayA, arrayB);
            break;

        case "MINUS":
            output = minusOperation(arrayA, arrayB);
            break;

        case "EITHER":
            output = elementInOnlyOneArray(arrayA, arrayB);
            break;

        default:
            console.log("Invalid operation");
            return;
    }
    console.log(`Array opeation ${operator} has been performed on array A of size:${arrayA.length} and Array B of size:${arrayB.length} and Output Array is of size:${output.length}`);

    return output;
}

const arrayA = [1, 6, 3, 5, 10];
const arrayB = [3, 6, 13];
const operator = "MINUS";

const output = operationOnArray(arrayA, arrayB, operator);
console.log(output);