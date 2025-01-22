// Array Declaration
let arr = [1, 2, 3, 4, 5];


console.log("Length of array:", arr.length); // Array length


console.log("Array as string:", arr.toString()); // Array toString()


console.log("Element at index 2:", arr.at(2)); // Array at()


console.log("Array joined with '-':", arr.join('-')); // Array join()


let lastElement = arr.pop();
console.log("Popped element:", lastElement, "| Array after pop:", arr); // Array pop()


arr.push(6);
console.log("Array after pushing 6:", arr); // Array push()

let firstElement = arr.shift();
console.log("Shifted element:", firstElement, "| Array after shift:", arr); // Array shift() 



arr.unshift(0);
console.log("Array after unshifting 0:", arr); // Array unshift()


delete arr[2];
console.log("Array after delete at index 2:", arr); // Array delete()


let newArr = arr.concat([7, 8, 9]);
console.log("Concatenated array:", newArr);  // Array concat()


let copiedArr = newArr.copyWithin(0, 3, 5);
console.log("Array after copyWithin:", copiedArr); // Array copyWithin()


let nestedArr = [1, [2, [3, 4]], 5];
console.log("Flattened array:", nestedArr.flat(2)); // Array flat()


let spliced = newArr.splice(2, 2, 10, 11);
console.log("Spliced elements:", spliced, "| Array after splice:", newArr); // Array splice()


let toSplicedArr = newArr.toSpliced(2, 2, 12, 13);
console.log("New array with toSpliced:", toSplicedArr); // Array toSpliced() (ES2023+)


let slicedArr = newArr.slice(1, 4);
console.log("Sliced array:", slicedArr); // Array slice()

// Search
console.log("Index of 6:", newArr.indexOf(6));

//Sort
let unsortedArr = [5, 2, 9, 1];
console.log("Sorted array:", unsortedArr.sort((a, b) => a - b));

//Iteration
newArr.forEach((item, index) => console.log(`Element at index ${index}:`, item));


//while
let count = 0;
while (count <= 5) {
    console.log("Count is:", count);
    count++;
}


//doWhile
let number = 5;
do {
    console.log("Number is:", number);
    number++;
} while (number < 1);
