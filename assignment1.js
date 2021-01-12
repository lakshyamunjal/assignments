// OR operation is distinct elements of A or B.
const orOperation = function (arrayA, arrayB) {
    let output = [];
    // push all distinct elements of one array to output array
    for (let i = 0; i < arrayA.length; i++) {
        let value = arrayA[i];
        // check for duplicates here also
        if (output.includes(value) == false) {
            output.push(value);
        }
    }

    // From array B, check if the element is already not in the output and arrayA, then push it.
    for (let i = 0; i < arrayB.length; i++) {
        let value = arrayB[i];
        if (output.includes(value) == false && arrayA.includes(value) == false) {
            output.push(value);
        }
    }
    // For BONUS 2, we can return a sorted array from this function
    // return output.sort((value1, value2) => {
    //     return value1 - value2;
    // });
    return output;
}

// If value is found in both array A and array B, include it in output.
const andOperation = function (arrayA, arrayB) {
    let output = [];
    const lengthA = arrayA.length;
    const lengthB = arrayB.length;

    if (lengthA > lengthB) {
        // loop through complete array A becuase it is larger in size.
        for (let i = 0; i < lengthA; i++) {
            let value = arrayA[i];
            // check if value is also in array B and not in output array(to avoid duplicates)
            if (arrayB.includes(value) && output.includes(value) == false) {
                output.push(value);
            }
        }
    } else {
        // loop through complete array B becuase it is larger in size.
        for (let i = 0; i < lengthB; i++) {
            let value = arrayB[i];
            // check if value is also in array A and not in output array(to avoid duplicates)
            if (arrayA.includes(value) && output.includes(value) == false) {
                output.push(value);
            }
        }
    }

    // For BONUS 2, we can return a sorted array from this function
    // return output.sort((value1, value2) => {
    //     return value1 - value2;
    // });
    return output;
}

// elements that are in A but not in B
const minusOperation = function (arrayA, arrayB) {
    let output = [];
    for (let i = 0; i < arrayA.length; i++) {
        let value = arrayA[i];
        if (arrayB.includes(value) == false) {
            output.push(value);
        }
    }
    // For BONUS 2, we can return a sorted array from this function
    // return output.sort((value1, value2) => {
    //     return value1 - value2;
    // });
    return output;
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

// BONUS 1
const elementInOnlyOneArray = function (arrayA, arrayB) {
    // Resue the functions of AND, OR, MINUS.
    // (A|B) - (A&B)

    let output = orOperation(arrayA, arrayB);
    let output2 = andOperation(arrayB, arrayA);

    output = minusOperation(output, output2);

    return output;
}
const arrayA = [1, 3, 5, 10];
const arrayB = [2, 4, 6];
const operator = "EITHER";

const output = operationOnArray(arrayA, arrayB, operator);
console.log(output);