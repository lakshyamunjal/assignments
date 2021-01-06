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
    //return sortArray(output);
    //        OR
    // return output.sort((value1, value2) => {
    //     return value1 - value2;
    // });
    return output;
}

// If value is found in both array A and array B, include it in output.
const andOperation = function (arrayA, arrayB) {
    let output = [];
    let lengthA = arrayA.length;
    let lengthB = arrayB.length;

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
    // return sortArray(output);
    //         OR
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
    // return sortArray(output);
    //          OR
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

        default:
            console.log("Invalid operation");
            return;
    }
    console.log(`Array opeation ${operator} has been performed on array A of size:${arrayA.length} and Array B of size:${arrayB.length} and Output Array is of size:${output.length}`);

    return output;
}

// BONUS 1
const elementInOnlyOneArray = function (arrayA, arrayB) {
    let output = [];

    // loop through array A and if an element of array A is not in array B, include it
    // also keep checking for duplicates
    for (let i = 0; i < arrayA.length; i++) {
        let value = arrayA[i];
        if (arrayB.includes(value) == false && output.includes(value) == false) {
            output.push(value);
        }
    }

    // loop through array B and if an element of array B is not in array A, include it
    // also keep checking for duplicates
    for (let i = 0; i < arrayB.length; i++) {
        let value = arrayB[i];
        if (arrayA.includes(value) == false && output.includes(value) == false) {
            output.push(value);
        }
    }

    return output;
}

/*
const swapElements = function (array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const heapify = function (array, curr, length) {
    let leftChild = 2 * curr + 1;
    let rightChild = 2 * curr + 2;
    let largest = curr;

    if (leftChild < length && array[leftChild] > array[largest]) {
        largest = leftChild;
    }

    if (rightChild < length && array[rightChild] > array[largest]) {
        largest = rightChild;
    }

    // recursive call
    if (largest !== curr) {
        // swap elements
        swapElements(array, largest, curr);
        heapify(array, largest, length);
    }
}

// BONUS 2
// HEAP SORT
const sortArray = function (array) {
    // Create Max-Heap.
    //console.log(array);
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, array.length);
    }
    //console.log(array);

    for (let i = array.length - 1; i >= 0; i--) {
        swapElements(array, i, 0);
        heapify(array, 0, i);
    }
    //console.log(array);
    return array;
}
*/
const arrayA = [1, 3, 5, 10];
const arrayB = [2, 4, 5, 6];

const operator = "OR";

const output = operationOnArray(arrayA, arrayB, operator);

console.log(output);