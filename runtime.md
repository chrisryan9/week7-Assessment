Data is saved on Array-data.PNG:


After testing the array's you can see the larger the number of elements that are being pushed into the array the longer the function takes to process. When comparing the two function of .push and .unshift you can see just how much longer it takes as the array's get bigger. Espeically when comparing the extraLargArray when using the insert-.unshift method it takes nearly 2 seconds to complete. While whne using the append-.push method it is completing the same method in just over 5 ms.

The reason the .unshift method is so much slower when handling bigger array's is do the the process of when it adds an element. Once unshift adds an element at the beginning of the array it takes the values at each index and shifts it to the next value to correctly add the new index when the new element is added. 

.push however is just adding the element to the end of the array and simply creating a new index when that element is added. It does not need to go through the array again and change the index for all the elements in the array. 