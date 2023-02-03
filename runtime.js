const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


// tiny
perf.start();
doublerAppend(tinyArray);
let resultsTinyAppend = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsTinyInsert = perf.stop();

// small
perf.start();
doublerAppend(smallArray);
let resultsSmallAppend = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsSmallInsert = perf.stop();

// medium
perf.start();
doublerAppend(mediumArray);
let resultsMediumAppend = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsMediumInsert = perf.stop();

// large
perf.start();
doublerAppend(largeArray);
let resultsLargeAppend = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsLargeInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
console.log('TinyAppend', resultsTinyAppend.preciseWords);
console.log('TinyInsert', resultsTinyInsert.preciseWords);
console.log('SmallAppend', resultsSmallAppend.preciseWords);
console.log('SmallInsert', resultsSmallInsert.preciseWords);
console.log('MediumAppend', resultsMediumAppend.preciseWords);
console.log('MediumInsert', resultsMediumInsert.preciseWords);
console.log('LargeAppend', resultsLargeAppend.preciseWords);
console.log('LargeInsert', resultsLargeInsert.preciseWords);
